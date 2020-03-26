import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// @Component({
//   selector: 'app-reactive-form',
//   templateUrl: './reactive-form.component.html',
//   styleUrls: ['./reactive-form.component.css']
// })
// export class ReactiveFormComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  // template: `
  //   Favorite Color: <input type="text" [formControl]="favoriteColorControl">
  // `
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  color1rControl = new FormControl('red');
  color1tColor = 'red';
  color2rControl = new FormControl('red');
  color2tColor = 'red';
  color3rControl = new FormControl('red');
  color3tColor = 'red';
}
