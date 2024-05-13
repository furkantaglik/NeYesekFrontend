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

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  loginDropdown: boolean = false;
  user!: User;
  restaurant!: Restaurant;
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
  }

  setLoginDropdown(): void {
    this.loginDropdown = !this.loginDropdown;
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

  logOut() {
    this.authService.logOut();
    this.toastrService.info('Çıkış Yapıldı');
    this.router.navigate(['user/login']);
  }
}
