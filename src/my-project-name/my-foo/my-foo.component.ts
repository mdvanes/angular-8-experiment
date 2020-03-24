import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../app/hero';

// Generated with `ng g c ../my-project-name/my-foo --module=app`

@Component({
  selector: 'app-my-foo',
  templateUrl: './my-foo.component.html',
  styles: [':host { border: 5px solid lightgreen; display: block; margin-top: 1rem; padding: 0.5rem; }']
  // styleUrls: ['./my-foo.component.css']
})
export class MyFooComponent implements OnInit {
  @Input() errorMessage: string;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
    this.selectedHero =  { id: 42, name: 'Test Name' };
  }

}
