import { Component, input } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
type ButtonType = 'button' | 'reset' | 'submit';

@Component({
  selector: 'app-button',
  imports: [],
  host:{
    '[class.button]': "true",
    '[class.primary]': "variant() === 'primary'",
    '[class.secondary]': "variant() === 'secondary'",
    '[class.tertiary]': "variant() === 'tertiary'",
    '[class.danger]': "variant() === 'danger'"
  },
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons {

  variant = input<ButtonVariant>();
  buttonType = input<ButtonType>();

}
