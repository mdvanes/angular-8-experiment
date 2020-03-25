import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo-wrapper',
  // templateUrl: './foo-wrapper.component.html'
  template: '<app-my-foo errorMessage="Some Error"></app-my-foo>'
})
export class FooWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
