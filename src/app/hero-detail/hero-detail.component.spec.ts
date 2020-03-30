import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})
class AppRoutingStubModule { }

xdescribe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let expectedHero: Hero;

  beforeEach(async(() => {
    const HttpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    TestBed.configureTestingModule({
      imports: [ FormsModule, AppRoutingStubModule ],
      declarations: [ HeroDetailComponent ],
      providers: [ HeroDetailComponent,
        { provide: HttpClient, useValue: HttpClientSpy } ]
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
    const expectedPipedName = expectedHero.name.toUpperCase();
    /* somewhere:
    heroDe  = fixture.debugElement.query(By.css('.hero'));
heroEl = heroDe.nativeElement;
     */
    /* here:
    expect(heroEl.textContent).toContain(expectedPipedName);
     */
  });
});
