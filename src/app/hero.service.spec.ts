import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Hero } from './hero';

describe('HeroService', () => {
  let HttpClientSpy;

  beforeEach(() => {
    HttpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    const MessageServiceSpy = jasmine.createSpyObj('MessageService', ['add']);
    TestBed.configureTestingModule({ providers: [ HeroService,
        { provide: HttpClient, useValue: HttpClientSpy },
        { provide: MessageService, useValue: MessageServiceSpy } ] });
  });

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });

  it('should call message service', () => {
    const service: HeroService = TestBed.get(HeroService);
    service.testLog();
    const spy = TestBed.get(MessageService);
    expect(spy.add.calls.count()).toBe(1);
  });

  it('performs GET on heroesUrl for getHero', () => {
    const service: HeroService = TestBed.get(HeroService);
    HttpClientSpy.get.and.returnValue({ pipe: jasmine.createSpy() } );
    service.getHero(42);
    const spy = TestBed.get(HttpClient);
    expect(spy.get.calls.count()).toBe(1);
    expect(spy.get.calls.argsFor(0)).toEqual(['api/heroes/42']);
  });

  it('performs GET on heroesUrl for getHeroes', () => {
    const service: HeroService = TestBed.get(HeroService);
    HttpClientSpy.get.and.returnValue({ pipe: jasmine.createSpy() } );
    service.getHeroes();
    const spy = TestBed.get(HttpClient);
    expect(spy.get.calls.count()).toBe(1);
    expect(spy.get.calls.argsFor(0)).toEqual(['api/heroes']);
  });

  it('performs PUT on heroesUrl for updateHero', () => {
    const exampleHero: Hero = { id: 42, name: 'Towel Man' };
    const service: HeroService = TestBed.get(HeroService);
    HttpClientSpy.put.and.returnValue({ pipe: jasmine.createSpy() } );
    service.updateHero(exampleHero);
    const spy = TestBed.get(HttpClient);
    expect(spy.put.calls.count()).toBe(1);
    expect(spy.put.calls.argsFor(0)[0]).toBe('api/heroes');
    expect(spy.put.calls.argsFor(0)[1]).toEqual(exampleHero);
  });

  it('performs POST on heroesUrl for addHero', () => {
    const exampleHero: Hero = { id: 42, name: 'Towel Man' };
    const service: HeroService = TestBed.get(HeroService);
    HttpClientSpy.post.and.returnValue({ pipe: jasmine.createSpy() } );
    service.addHero(exampleHero);
    const spy = TestBed.get(HttpClient);
    expect(spy.post.calls.count()).toBe(1);
    expect(spy.post.calls.argsFor(0)[0]).toBe('api/heroes');
    expect(spy.post.calls.argsFor(0)[1]).toEqual(exampleHero);
  });

  it('performs DELETE on heroesUrl for deleteHero', () => {
    const exampleHero: Hero = { id: 42, name: 'Towel Man' };
    const service: HeroService = TestBed.get(HeroService);
    HttpClientSpy.delete.and.returnValue({ pipe: jasmine.createSpy() } );
    service.deleteHero(exampleHero);
    const spy = TestBed.get(HttpClient);
    expect(spy.delete.calls.count()).toBe(1);
    expect(spy.delete.calls.argsFor(0)[0]).toBe('api/heroes/42');
  });

  it('performs GET on heroesUrl for searchHeroes', () => {
    const service: HeroService = TestBed.get(HeroService);
    HttpClientSpy.get.and.returnValue({ pipe: jasmine.createSpy() } );
    service.searchHeroes('Towel');
    const spy = TestBed.get(HttpClient);
    expect(spy.get.calls.count()).toBe(1);
    expect(spy.get.calls.argsFor(0)).toEqual(['api/heroes/?name=Towel']);
  });

  it('does not perform GET on heroesUrl for searchHeroes with empty term', () => {
    const service: HeroService = TestBed.get(HeroService);
    HttpClientSpy.get.and.returnValue({ pipe: jasmine.createSpy() } );
    service.searchHeroes('');
    const spy = TestBed.get(HttpClient);
    expect(spy.get.calls.count()).toBe(0);
  });
});
