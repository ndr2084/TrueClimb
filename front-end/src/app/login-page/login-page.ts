import { Component } from '@angular/core';
import { Buttons } from '../shared/components/buttons/buttons';
import { Card } from '../shared/components/card/card';

@Component({
  selector: 'app-login-page',
  imports: [Buttons, Card],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

}
