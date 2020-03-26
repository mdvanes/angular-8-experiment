import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';

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
    // It is also possible to set disabled like this: color4Control: new FormControl({value: 'red', disabled: true}, Validators.required),
    color5Control: new FormControl('red')
  });

  colorBuildForm = this.fb.group({
    color6Control: ['', Validators.required],
    color7Control: ['', Validators.required]
    /*
    // Nested is also allowed:
    specialColors: this.fb.group([])
    */
  });

  colorBuildArrayGroup = new FormGroup({
    colorBuildArray: this.fb.array([
      this.fb.control('', Validators.required)
    ])
  });

  constructor(private fb: FormBuilder) {}

  // // Untested
  // get color6() {
  //   return this.colorBuildForm.get('color6Control').value;
  // }
  //
  // // Untested
  // get specialColors() {
  //   return this.colorBuildForm.get('specialColors') as FormGroup;
  // }

  addGroupColor() {
    // This can also be done on a FormGroup with .addControl, but that requires a control name each time
    this.colorBuildForm.addControl('color8Control', new FormControl('', Validators.required));
  }

  hasColor8Control(): boolean {
    return Boolean(this.colorBuildForm.get('color8Control'));
  }

  get colorBuildArray() {
    return this.colorBuildArrayGroup.get('colorBuildArray') as FormArray;
  }

  addArrayColor() {
    // This can also be done on a FormGroup with .addControl, but that requires a control name each time
    this.colorBuildArray.push(this.fb.control('', Validators.required));
  }

}
