import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFooComponent } from './my-foo.component';

describe('MyFooComponent', () => {
  let component: MyFooComponent;
  let fixture: ComponentFixture<MyFooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFooComponent ]
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
        component.errorMessage = 'my test error message!';
        fixture.detectChanges();
      });

      it('has an error message if the attribute is set', () => {
        const h1Content = fixture.debugElement.nativeElement.querySelector('h1').textContent;
        expect(h1Content).toContain('MY TEST ERROR MESSAGE!');
      });
  });
});
