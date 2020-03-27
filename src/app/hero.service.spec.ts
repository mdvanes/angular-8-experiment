import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

describe('HeroService', () => {
  beforeEach(() => {
    const HttpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
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
});
