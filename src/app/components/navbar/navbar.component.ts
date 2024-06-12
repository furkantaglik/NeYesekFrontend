import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../models/user';
import { Restaurant } from '../../models/restaurant';
import { UserService } from '../../services/user.service';
import { RestaurantService } from '../../services/restaurant.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../models/product';
import { Menu } from '../../models/menu';
import { AboutComponent } from '../restaurant/about/about.component';
import { BasketComponent } from '../basket/basket.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    RouterLink,
    AboutComponent,
    BasketComponent,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  loginDropdown: boolean = false;
  basketModal: boolean = false;
  user!: User;
  restaurant!: Restaurant;
  basket: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private restaurantService: RestaurantService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.isUser() && this.getUser();
    this.isRestaurant() && this.getRestaurant();
    this.getBasket();
  }

  setLoginDropdown(): void {
    this.loginDropdown = !this.loginDropdown;
  }
  setBasketModal() {
    this.basketModal = !this.basketModal;
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  isUser() {
    return this.authService.isUser();
  }
  isRestaurant() {
    return this.authService.isRestaurant();
  }

  getUser() {
    this.userService
      .getById(parseInt(localStorage.getItem('userId')!))
      .subscribe((response) => {
        this.user = response.data;
      });
  }
  getRestaurant() {
    this.restaurantService
      .getById(parseInt(localStorage.getItem('restaurantId')!))
      .subscribe((response) => {
        this.restaurant = response.data;
      });
  }
  getBasket() {
    this.basket = JSON.parse(localStorage.getItem('basket')) || [];
    console.log(this.basket);
  }

  logOut() {
    this.authService.logOut();
    this.toastrService.info('Çıkış Yapıldı');
    this.router.navigate(['user/login']);
  }
}
