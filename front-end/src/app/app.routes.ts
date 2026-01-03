import { Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { LoginEmail } from './login-email/login-email';

export const routes: Routes = [
  {
    path: '',
    title: 'Login Page',
    component: LoginPage
  },
  {
    path: 'login-email',
    title: 'Login With Email',
    component: LoginEmail
  }
];
