import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  colorForm = new FormGroup({
    color4Control: new FormControl('', Validators.required),
    color5Control: new FormControl('red')
  });

  colorBuildForm = this.fb.group({
    color6Control: ['', Validators.required],
    color7Control: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

}
