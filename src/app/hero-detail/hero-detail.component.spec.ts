import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeroService } from '../hero.service';
import { By } from '@angular/platform-browser';

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})
class AppRoutingStubModule { }

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let expectedHero: Hero;
  let HeroServiceSpy: jasmine.SpyObj<{ getHero: () => Pick<Observable<Hero>, 'subscribe'> }>;

  beforeEach(async(() => {
    HeroServiceSpy = jasmine.createSpyObj('HeroService', ['getHero']);
    HeroServiceSpy.getHero.and.returnValue({ subscribe: jasmine.createSpy() } );
    const HttpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    TestBed.configureTestingModule({
      imports: [ FormsModule, AppRoutingStubModule ],
      declarations: [ HeroDetailComponent ],
      providers: [ HeroDetailComponent,
        { provide: HttpClient, useValue: HttpClientSpy },
        { provide: HeroService, useValue: HeroServiceSpy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;

    // mock the hero supplied by the parent component
    expectedHero = { id: 42, name: 'Test Name' };

    // simulate the parent setting the input property with that hero
    component.hero = expectedHero;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display hero name in uppercase', () => {
    const heroDe  = fixture.debugElement.query(By.css('h2'));
    const heroEl = heroDe.nativeElement;
    expect(heroEl.textContent).toContain('TEST NAME');
    expect(heroEl.textContent).toBe('TEST NAME Details');
  });
});
