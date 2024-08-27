import { Routes } from '@angular/router';
import { Form1Component } from './pages/form1/form1.component';
import { Form2Component } from './pages/form2/form2.component';
import { Form3Component } from './pages/form3/form3.component';
import { Form4Component } from './pages/form4/form4.component';

export const routes: Routes = [
  { path: '', redirectTo: 'form1', pathMatch: 'full' },
  { path: 'form1', component: Form1Component }, // form control
  { path: 'form2', component: Form2Component }, // form group
  { path: 'form3', component: Form3Component }, // form builder
  { path: 'form4', component: Form4Component }, // custom validations
];
