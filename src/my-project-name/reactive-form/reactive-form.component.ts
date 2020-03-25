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
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl">
  `
})
export class ReactiveFormComponent {
  favoriteColorControl = new FormControl('');
}
