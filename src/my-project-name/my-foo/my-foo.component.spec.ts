import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFooComponent } from './my-foo.component';
import { Component, Input } from '@angular/core';
import { Hero } from '../../app/hero';
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

  it('has a specific text in a p element', () => {
    const pContent = fixture.debugElement.nativeElement.querySelector('p').textContent;
    expect(pContent).toContain('my-foo works!');
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

      // TODO do this without the ng-reflect- prefix
      it('has an "notification" component with an "errormessage" attribute', () => {
        // const notificationElem = fixture.debugElement.query(By.directive(NotificationStubComponent));
        // expect(notificationElem.errorMessage).toContain('MY TEST ERROR MESSAGE!');
        const notificationElem = fixture.debugElement.nativeElement.querySelector('app-notification');
        // expect(notificationElem.attributes).toEqual({errorMessage: 'MY TEST ERROR MESSAGE!'});
        // const x = notificationElem.attributes.find(attr => attr.name === 'ng-reflect-error-message').textContent;
        // console.log(notificationElem.attributes, notificationElem.attributes.getNamedItem('ng-reflect-error-message'));
        const attr = notificationElem.attributes.getNamedItem('ng-reflect-error-message');
        // console.log(attr.textContent);
        expect(attr.textContent).toBe('My Test Error Message!');
        // expect(notificationElem.attributes[1].value).toBe('My Test Error Message!');
        // expect(notificationElem.attributes).toContain('My Test Error Message!');
      });
  });
});
