import { Component, input } from '@angular/core';

type cardVariant = 'primary' | 'secondary';

@Component({
  selector: 'app-card',
  imports: [],
  host:{
    '[class.card]': "true",
    '[class.primary]': "variant() === 'primary'",
    '[class.secondary]': "variant() === 'secondary'"
  },
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  variant = input<cardVariant>('primary');

}
