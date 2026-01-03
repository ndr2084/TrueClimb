import { Component } from '@angular/core';
import { Card } from '../shared/components/card/card';
import { Buttons} from '../shared/components/buttons/buttons';

@Component({
  selector: 'app-login-email',
  imports: [Card, Buttons],
  templateUrl: './login-email.html',
  styleUrl: './login-email.css',
})
export class LoginEmail {

}
