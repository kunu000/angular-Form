import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { zip } from 'rxjs';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css',
})
export class Form2Component {
  profileForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      streetno: new FormControl('', [Validators.required]),
      zip: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{5}$/),
      ]),
    }),
  });

  submitForm() {
    // properties
    console.log(this.profileForm.value); // access form values
    console.log(this.profileForm.value.name); // access particular value
    console.log(this.profileForm.valid); // check validity
    console.log(this.profileForm.invalid); // check form is invalid
    console.log(this.profileForm.status); // status (VALID , INVALID , ...)
    console.log(this.profileForm.get('name')?.touched);
    console.log(this.profileForm.get('email')?.untouched);
    console.log(this.profileForm.get('email')?.errors);
    console.log(this.profileForm.get('name')); // give form control
    console.log(this.profileForm.controls['name'].errors);
    console.log(this.profileForm.controls['address']);

    // methods
    // this.profileForm.setValue({
    //   name: 'John Doe',
    //   email: '',
    //   address: {
    //     zip: '9999',
    //     streetno: '99',
    //   },
    // });

    // this.profileForm.patchValue({
    //   email: 'johndoe@example.com',
    //   address: {
    //     zip: '12345',
    //   },
    // });

    // this.profileForm.reset();

    // this.profileForm.markAsTouched();
    // this.profileForm.markAllAsTouched();
    // this.profileForm.markAsUntouched();
    // console.log(this.profileForm.touched); // if any field is toched it will return true
    // this.profileForm.disable(); // disable entire form
    // this.profileForm.enable(); // enable  entire form
    // this.profileForm.removeControl('email'); // remove form control
    // this.profileForm.addControl(
    //   'password',
    //   new FormControl('', [Validators.required])
    // );

    // if (this.profileForm.valid) {
    //   console.log(this.profileForm.value);
    // } else {
    //   console.log('Form is invalid');
    // }
  }
}
