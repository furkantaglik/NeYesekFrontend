import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { UserloginComponent } from './components/auth/userlogin/userlogin.component';
import { UserregisterComponent } from './components/auth/userregister/userregister.component';
import { RestaurantloginComponent } from './components/auth/restaurantlogin/restaurantlogin.component';
import { RestaurantregisterComponent } from './components/auth/restaurantregister/restaurantregister.component';
import { RestaurantdetailComponent } from './components/restaurantdetail/restaurantdetail.component';
import { RestaurantaccountComponent } from './components/restaurantaccount/restaurantaccount.component';
import { UseraccountComponent } from './components/useraccount/useraccount.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { RestaurantprofileComponent } from './components/restaurantprofile/restaurantprofile.component';
import { userGuard } from './guards/user.guard';
import { restaurantGuard } from './guards/restaurant.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  //Auth
  { path: 'user/login', component: UserloginComponent },
  {
    path: 'user/register',
    component: UserregisterComponent,
  },
  { path: 'restaurant/login', component: RestaurantloginComponent },
  { path: 'restaurant/register', component: RestaurantregisterComponent },

  //User Account
  {
    path: 'user/account',
    component: UseraccountComponent,
    canActivate: [userGuard],
    children: [
      { path: 'profile', component: UserprofileComponent },
      { path: 'favorites', component: FooterComponent },
    ],
  },

  //Restaurant Account
  {
    path: 'restaurant/account',
    component: RestaurantaccountComponent,
    canActivate: [restaurantGuard],
    children: [
      { path: 'profile', component: RestaurantprofileComponent },
      { path: 'favorites', component: FooterComponent },
    ],
  },

  //Other
  { path: 'restaurant/detail/:id', component: RestaurantdetailComponent },
];
