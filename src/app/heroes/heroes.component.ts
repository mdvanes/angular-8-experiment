import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { delay, timeout } from 'rxjs/operators';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  heroes: Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

  getHeroes(): void /* async getHeroes(): Promise<void> */ {
    // const foo = this.heroService.getHeroes();
    // console.log(foo);
    // this.heroes = foo;
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    // const foo = await this.heroService.getHeroes();
    // foo.subscribe(heroes => this.heroes = heroes);
  }

  // DI param is automatically assigned to member with the same name
  constructor(private heroService: HeroService/*, private myTestParam: string = 'bla'*/, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
    // console.log(this.myTestParam);
  }

}
