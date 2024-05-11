import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantcardComponent } from './components/restaurantcard/restaurantcard.component';

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
