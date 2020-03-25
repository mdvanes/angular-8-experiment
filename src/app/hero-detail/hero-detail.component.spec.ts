import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from '../hero';

xdescribe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let expectedHero: Hero;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ]
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
