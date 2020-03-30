import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLinkDirectiveStub } from '../../testing/router-link-directive-stub';

import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from '../hero.service';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    const HeroServiceSpy = jasmine.createSpyObj('HeroService', ['getHeroes']);
    HeroServiceSpy.getHeroes.and.returnValue({ subscribe: jasmine.createSpy() } );
    TestBed.configureTestingModule({
      declarations: [ HeroSearchComponent, RouterLinkDirectiveStub ],
      providers: [ HeroSearchComponent,
        { provide: HeroService, useValue: HeroServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
