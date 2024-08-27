import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-form4',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form4.component.html',
  styleUrl: './form4.component.css',
})
export class Form4Component {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: this.fb.group({
        streetno: ['', [Validators.required]],
        zip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      }),
    });
  }

  submitForm() {}
}
