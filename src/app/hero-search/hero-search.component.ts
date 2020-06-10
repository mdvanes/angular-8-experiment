import { Component, OnInit } from "@angular/core";

import { Observable, Subject, of } from "rxjs";

import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
  withLatestFrom,
  map,
  scan,
  mergeMap,
  delay,
} from "rxjs/operators";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";

interface EnrichedHero extends Hero {
  strength: number;
}

@Component({
  selector: "app-hero-search",
  templateUrl: "./hero-search.component.html",
  styleUrls: ["./hero-search.component.css"],
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<EnrichedHero[]>;
  // A Subject is a type of Observable
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),

      withLatestFrom(this.searchTerms),

      switchMap(([suggestedHeroes, term]: [Hero[], string]) => {
        if (term.length >= 2) {
          return of(...suggestedHeroes).pipe(
            tap((hero) => console.log("test", hero)),
            mergeMap((hero) =>
              this.heroService.getHeroStrength(hero.id).pipe(
                delay(Math.random() * 2000),
                map((strength) => [strength, hero])
              )
            ),
            scan(
              (acc, [strength, hero]) => [...acc, { ...hero, strength }],
              []
            ),
            tap((tuple) => console.log(tuple))
          );
        }
        return of(
          suggestedHeroes.map<EnrichedHero>((h) => ({ ...h, strength: 0 }))
        );
      })
    );
  }
}
