import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { UserloginComponent } from './components/auth/userlogin/userlogin.component';
import { UserregisterComponent } from './components/auth/userregister/userregister.component';
import { RestaurantloginComponent } from './components/auth/restaurantlogin/restaurantlogin.component';
import { RestaurantregisterComponent } from './components/auth/restaurantregister/restaurantregister.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },

  { path: 'user/login', component: UserloginComponent },
  {
    path: 'user/register',
    component: UserregisterComponent,
  },
  { path: 'restaurant/login', component: RestaurantloginComponent },
  { path: 'restaurant/register', component: RestaurantregisterComponent },
];
