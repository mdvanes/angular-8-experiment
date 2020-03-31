import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { of, throwError } from 'rxjs';

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

  it('performs GET on heroesUrl for getHeroes', () => {
    const service: HeroService = TestBed.get(HeroService);
    HttpClientSpy.get.and.returnValue(of([{ id: 42, name: 'Towel Man'}]) );
    service.getHeroes().subscribe(h => expect(h.length).toBe(1));
    const spy = TestBed.get(HttpClient);
    expect(spy.get.calls.count()).toBe(1);
    expect(spy.get.calls.argsFor(0)).toEqual(['api/heroes']);
  });

  it('performs PUT on heroesUrl for updateHero', () => {
    const exampleHero: Hero = { id: 42, name: 'Towel Man' };
    const service: HeroService = TestBed.get(HeroService);
    HttpClientSpy.put.and.returnValue(of([]) );
    service.updateHero(exampleHero).subscribe();
    const spy = TestBed.get(HttpClient);
    expect(spy.put.calls.count()).toBe(1);
    expect(spy.put.calls.argsFor(0)[0]).toBe('api/heroes');
    expect(spy.put.calls.argsFor(0)[1]).toEqual(exampleHero);
  });

  it('performs POST on heroesUrl for addHero', () => {
    const exampleHero: Hero = { id: 42, name: 'Towel Man' };
    const service: HeroService = TestBed.get(HeroService);
    HttpClientSpy.post.and.returnValue(of([]) );
    service.addHero(exampleHero).subscribe();
    const spy = TestBed.get(HttpClient);
    expect(spy.post.calls.count()).toBe(1);
    expect(spy.post.calls.argsFor(0)[0]).toBe('api/heroes');
    expect(spy.post.calls.argsFor(0)[1]).toEqual(exampleHero);
  });

  describe('method getHero', () => {
    it('performs GET on heroesUrl', () => {
      const service: HeroService = TestBed.get(HeroService);
      HttpClientSpy.get.and.returnValue(of({ id: 42, name: 'Towel Man'}));
      service.getHero(42).subscribe(h => console.log(`GET HERO: ${JSON.stringify(h)}`));
      const spy = TestBed.get(HttpClient);
      expect(spy.get.calls.count()).toBe(1);
      expect(spy.get.calls.argsFor(0)).toEqual(['api/heroes/42']);
    });

    it('calls log in tap', () => {
      const service: HeroService = TestBed.get(HeroService);
      HttpClientSpy.get.and.returnValue(of({ id: 42, name: 'Towel Man'}));
      service.getHero(42).subscribe(h => console.log(`GET HERO: ${JSON.stringify(h)}`));
      const messageServiceSpy = TestBed.get(MessageService);
      expect(messageServiceSpy.add.calls.count()).toBe(1);
      expect(messageServiceSpy.add.calls.argsFor(0)).toEqual(['HeroService: fetched hero id=42']);
    });
  });

  describe('method searchHeroes', () => {
    it('returns 2 matches on heroesUrl', () => {
      const service: HeroService = TestBed.get(HeroService);
      HttpClientSpy.get.and.returnValue(of([{ id: 42, name: 'Towel Man'}, { id: 43, name: 'Towel Boy'}]));
      service.searchHeroes('Towel').subscribe(h => expect(h.length).toBe(2));
      const spy = TestBed.get(HttpClient);
      expect(spy.get.calls.count()).toBe(1);
      expect(spy.get.calls.argsFor(0)).toEqual(['api/heroes/?name=Towel']);
      const messageServiceSpy = TestBed.get(MessageService);
      expect(messageServiceSpy.add.calls.count()).toBe(1);
      expect(messageServiceSpy.add.calls.argsFor(0)).toEqual(['HeroService: found heroes matching "Towel"']);
    });

    it('returns 0 matches for term without matches', () => {
      const service: HeroService = TestBed.get(HeroService);
      HttpClientSpy.get.and.returnValue(of([]));
      service.searchHeroes('Mork').subscribe(h => expect(h.length).toBe(0));
      const spy = TestBed.get(HttpClient);
      expect(spy.get.calls.count()).toBe(1);
      expect(spy.get.calls.argsFor(0)).toEqual(['api/heroes/?name=Mork']);
      const messageServiceSpy = TestBed.get(MessageService);
      expect(messageServiceSpy.add.calls.count()).toBe(1);
      expect(messageServiceSpy.add.calls.argsFor(0)).toEqual(['HeroService: no heroes matching "Mork"']);
    });

    it('returns ? when error response', () => {
      const service: HeroService = TestBed.get(HeroService);
      HttpClientSpy.get.and.returnValue(throwError({ message: 'MOCK THROW ERROR'}));
      service.searchHeroes('Mr ServerError').subscribe(h => expect(h.length).toBe(0));
      const spy = TestBed.get(HttpClient);
      expect(spy.get.calls.count()).toBe(1);
      expect(spy.get.calls.argsFor(0)).toEqual(['api/heroes/?name=Mr ServerError']);
      const messageServiceSpy = TestBed.get(MessageService);
      expect(messageServiceSpy.add.calls.count()).toBe(1);
      expect(messageServiceSpy.add.calls.argsFor(0)).toEqual(['HeroService: searchHeroes failed: MOCK THROW ERROR']);
    });

    it('does not perform GET on heroesUrl with empty term', () => {
      const service: HeroService = TestBed.get(HeroService);
      service.searchHeroes('').subscribe(h => expect(h.length).toBe(0));
      const spy = TestBed.get(HttpClient);
      expect(spy.get.calls.count()).toBe(0);
    });
  });

  describe('method deleteHero', () => {
    it('performs DELETE on heroesUrl for Hero Object', () => {
      const exampleHero: Hero = { id: 42, name: 'Towel Man' };
      const service: HeroService = TestBed.get(HeroService);
      HttpClientSpy.delete.and.returnValue(of([]) );
      service.deleteHero(exampleHero).subscribe();
      const spy = TestBed.get(HttpClient);
      expect(spy.delete.calls.count()).toBe(1);
      expect(spy.delete.calls.argsFor(0)[0]).toBe('api/heroes/42');
      const messageServiceSpy = TestBed.get(MessageService);
      expect(messageServiceSpy.add.calls.count()).toBe(1);
      expect(messageServiceSpy.add.calls.argsFor(0)).toEqual(['HeroService: deleted hero id=42']);
    });

    it('performs DELETE on heroesUrl for integer', () => {
      const service: HeroService = TestBed.get(HeroService);
      HttpClientSpy.delete.and.returnValue(of([]) );
      service.deleteHero(43).subscribe();
      const spy = TestBed.get(HttpClient);
      expect(spy.delete.calls.count()).toBe(1);
      expect(spy.delete.calls.argsFor(0)[0]).toBe('api/heroes/43');
      const messageServiceSpy = TestBed.get(MessageService);
      expect(messageServiceSpy.add.calls.count()).toBe(1);
      expect(messageServiceSpy.add.calls.argsFor(0)).toEqual(['HeroService: deleted hero id=43']);
    });
  });

});
