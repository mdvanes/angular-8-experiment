import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFooComponent } from './my-foo.component';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({selector: 'app-notification', template: ''})
class NotificationStubComponent {
  @Input() errorMessage: string;
}

describe('MyFooComponent', () => {
  let component: MyFooComponent;
  let fixture: ComponentFixture<MyFooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFooComponent, NotificationStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('with errorMessage attribute', () => {
      beforeEach(() => {
        component.errorMessage = 'My Test Error Message!';
        fixture.detectChanges();
      });

      it('has an error message if the attribute is set', () => {
        const h1Content = fixture.debugElement.nativeElement.querySelector('h1').textContent;
        expect(h1Content).toContain('my test error message!');
      });

      // DOM testing
      it('has an "notification" component with an "errormessage" attribute (DOM)', () => {
        const notificationElem = fixture.debugElement.nativeElement.querySelector('app-notification');
        // Does not work: expect(notificationElem.errorMessage).toContain('MY TEST ERROR MESSAGE!');
        // Does not work: expect(notificationElem.attributes).toEqual({errorMessage: 'MY TEST ERROR MESSAGE!'});
        // Works, but .getNamedItem is more concise:
        //  const x = notificationElem.attributes.find(attr => attr.name === 'ng-reflect-error-message').textContent;
        // Works, but using ng-reflect-* is hacky. This should not be a DOM test. See test below for alternative with spy
        const attr = notificationElem.attributes.getNamedItem('ng-reflect-error-message');
        // console.log(attr.textContent);
        expect(attr.textContent).toBe('My Test Error Message!');
        expect(notificationElem.getAttribute('ng-reflect-error-message')).toBe('My Test Error Message!');
      });

      // Test if the errorMessage attribute of the nested notification element is wired properly
      it('has an "notification" component with an "errormessage" attribute (spy)', () => {
        const notificationDebugElem = fixture.debugElement.query(By.directive(NotificationStubComponent));
        const notificationComp = notificationDebugElem.injector.get(NotificationStubComponent);
        expect(notificationComp.errorMessage).toBe('My Test Error Message!');
      });
  });
});
