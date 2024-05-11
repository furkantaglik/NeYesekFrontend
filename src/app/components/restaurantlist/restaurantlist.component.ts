import { Component } from '@angular/core';
import { RestaurantcardComponent } from '../restaurantcard/restaurantcard.component';

@Component({
  selector: 'app-restaurantlist',
  standalone: true,
  imports: [RestaurantcardComponent],
  templateUrl: './restaurantlist.component.html',
})
export class RestaurantlistComponent {}
