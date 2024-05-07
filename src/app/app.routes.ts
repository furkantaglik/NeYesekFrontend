import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { UserregisterComponent } from './components/userregister/userregister.component';
import { RestaurantloginComponent } from './components/restaurantlogin/restaurantlogin.component';
import { RestaurantregisterComponent } from './components/restaurantregister/restaurantregister.component';
import { AuthGuard } from './guards/auth.guard';

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
