import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../app/hero';

// Generated with `ng g c ../my-project-name/my-foo --module=app`

@Component({
  selector: 'app-my-foo',
  templateUrl: './my-foo.component.html'
  // styleUrls: ['./my-foo.component.css']
})
export class MyFooComponent implements OnInit {
  @Input() errorMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
