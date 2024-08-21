import { Routes } from '@angular/router';
import { Form1Component } from './pages/form1/form1.component';
import { Form2Component } from './pages/form2/form2.component';

export const routes: Routes = [
  { path: '/', redirectTo: '/form1' },
  { path: '/form1', component: Form1Component },
  { path: '/form2', component: Form2Component },
];
