import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLinkDirectiveStub } from '../../testing/router-link-directive-stub';

import { DashboardComponent } from './dashboard.component';
import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({selector: 'app-hero-search', template: ''})
class HeroSearchStubComponent {}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    const HeroServiceSpy = jasmine.createSpyObj('HeroService', ['getHeroes']);
    HeroServiceSpy.getHeroes.and.returnValue({ subscribe: jasmine.createSpy() } );
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, RouterLinkDirectiveStub, HeroSearchStubComponent ],
      providers: [ DashboardComponent,
        { provide: HeroService, useValue: HeroServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
