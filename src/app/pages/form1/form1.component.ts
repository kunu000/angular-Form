import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { upperCaseValidator } from '../../validators/upperCase.validator';

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
    upperCaseValidator,
  ]);

  ngOnInit(): void {
    // whenever the value of inputControl changes this get called
    this.inputControl.valueChanges.subscribe((value) => {
      console.log('value changed', value);
    });
  }

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

  // only number sutable for phone number
  validateNumberInput(e: any) {
    // Replace any non-numeric characters
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  }

  // float numbers
  validateFloatNumberInput(e: any) {
    // Replace any character that is not a digit or a decimal point
    e.target.value = e.target.value.replace(/[^0-9.]/g, '');

    // Ensure that only one decimal point is allowed
    const parts = e.target.value.split('.');
    if (parts.length > 2) {
      e.target.value = parts[0] + '.' + parts.slice(1).join('');
    }
  }

  // accept float number in negative as well as positive
  validateFloatNumberNegativeInput(e: any) {
    // Get the current input value
    let inputValue = e.target.value;

    // Allow only one hyphen and only at the start of the input
    const firstCharIsHyphen = inputValue.charAt(0) === '-';

    // Remove any hyphens not at the start
    inputValue = firstCharIsHyphen
      ? '-' + inputValue.slice(1).replace(/-/g, '') // Retain the first hyphen and remove any others
      : inputValue.replace(/-/g, ''); // No leading hyphen, so remove all hyphens

    // Replace any character that is not a digit or a decimal point
    inputValue = inputValue.replace(/[^0-9.]/g, '');

    // Reapply the hyphen at the beginning if it was originally there
    inputValue = firstCharIsHyphen ? '-' + inputValue : inputValue;

    // Ensure that only one decimal point is allowed
    const parts = inputValue.split('.');
    if (parts.length > 2) {
      inputValue = parts[0] + '.' + parts.slice(1).join('');
    }

    // Set the processed value back to the input
    e.target.value = inputValue;
  }
}
