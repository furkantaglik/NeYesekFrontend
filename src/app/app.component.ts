import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantcardComponent } from './components/restaurant/restaurantcard/restaurantcard.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    RestaurantcardComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'NeYesek';
}
