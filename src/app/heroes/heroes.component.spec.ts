import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { RouterLinkDirectiveStub } from '../../testing/router-link-directive-stub';
import { HeroService } from '../hero.service';

// https://angular.io/guide/testing#stubbing-unneeded-components

@Component({selector: 'app-hero-detail', template: ''})
class HeroDetailStubComponent {
  @Input() hero: Hero;
}

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    const HeroServiceSpy = jasmine.createSpyObj('HeroService', ['getHeroes']);
    HeroServiceSpy.getHeroes.and.returnValue({ subscribe: jasmine.createSpy() } );
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent, HeroDetailStubComponent, RouterLinkDirectiveStub ],
      providers: [ HeroesComponent,
        { provide: HeroService, useValue: HeroServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
