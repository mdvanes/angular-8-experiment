import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { delay, timeout } from 'rxjs/operators';
import { MessageService } from '../message.service';

// Test "auto assigning" of constructor parameters to members
class MyTest {
  // requires TS 3.8+: #barESPrivate: string;
  private barDefault: string;

  // public by default
  constructor(private barPrivate, public barPublic, barDefault) {
    // It is not needed to do this.barPrivate = barPrivate or for public, but it is needed for default.
    this.barDefault = barDefault;
  }

  getMembers(): Record<string, string> {
    return {
      // barESPrivate: this.barESPrivate,
      barPrivate: this.barPrivate,
      barPublic: this.barPublic,
      barDefault: this.barDefault
    };
  }
}

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
    const myTest = new MyTest('BAR_PRIVATE', 'BAR_PUBLIC', 'BAR_DEFAULT');
    console.log(`myTest members: ${JSON.stringify(myTest.getMembers())} | barPublic: ${myTest.barPublic} | members as obj:`
      , myTest.getMembers());
    // Causes compile error, but works runtime:
    // console.log(`myTest barPrivate: ${myTest.barPrivate} | barDefault: ${myTest.barDefault}`);
    // TS 3.8+ causes compile error AND runtime error
    // console.log(`myTest barESPrivate: ${myTest.barESPrivate}`);
  }

}
