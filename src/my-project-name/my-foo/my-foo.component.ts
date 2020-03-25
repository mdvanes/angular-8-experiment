import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../app/hero';

// Generated with `ng g c ../my-project-name/my-foo --module=app`

@Component({
  selector: 'app-my-foo',
  templateUrl: './my-foo.component.html',
  // styles: [':host { display: block; margin-top: 1rem; padding: 0.5rem; border-radius: 2px; background-color: white;
  // box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px; }']
  styleUrls: ['./my-foo.component.css']
})
export class MyFooComponent implements OnInit {
  @Input() errorMessage: string;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
    this.selectedHero =  { id: 42, name: 'Test Name' };
  }

}
