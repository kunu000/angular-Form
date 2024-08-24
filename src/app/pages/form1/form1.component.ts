import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css',
})
export class Form1Component {
  inputControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(30),
  ]);

  handleSubmit() {
    console.log(this.inputControl.value);
    console.log(this.inputControl.valid);
    console.log(this.inputControl.invalid);
    console.log(this.inputControl.status);
    console.log(this.inputControl.touched);
    console.log(this.inputControl.untouched);
    console.log(this.inputControl.errors);
    // this.inputControl.setValue('hello');
    // this.inputControl.patchValue('hello david')
    // this.inputControl.reset();
    // this.inputControl.markAsTouched();
    // this.inputControl.markAsUntouched();
    // this.inputControl.disable();
    // this.inputControl.enable();
    // this.inputControl.clearValidators();
    // this.inputControl.setValidators([Validators.required]); // only this validation get applied
    // this.inputControl.updateValueAndValidity();
    // this.inputControl.setErrors({ hello: true });
    console.log(this.inputControl.hasError('required')); // find specific error
    console.log(this.inputControl.errors);
  }

  // check if user name is admin then show error
  checkUsername() {
    // if (this.inputControl.value === 'admin') {
    //   this.inputControl.setErrors({ reservedName: true });
    // } else {
    //   this.inputControl.setErrors(null);
    // }
  }
}
