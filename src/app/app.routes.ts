import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { UserloginComponent } from './components/auth/userlogin/userlogin.component';
import { UserregisterComponent } from './components/auth/userregister/userregister.component';
import { RestaurantloginComponent } from './components/auth/restaurantlogin/restaurantlogin.component';
import { RestaurantregisterComponent } from './components/auth/restaurantregister/restaurantregister.component';
import { UseraccountComponent } from './components/user/useraccount/useraccount.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserprofileComponent } from './components/user/userprofile/userprofile.component';
import { userGuard } from './guards/user.guard';
import { restaurantGuard } from './guards/restaurant.guard';
import { RestaurantaccountComponent } from './components/restaurant/restaurantaccount/restaurantaccount.component';
import { RestaurantprofileComponent } from './components/restaurant/restaurantprofile/restaurantprofile.component';
import { RestaurantdetailComponent } from './components/restaurant/restaurantdetail/restaurantdetail.component';
import { RestaurantcategoryComponent } from './components/restaurant/restaurantcategory/restaurantcategory.component';
import { RestaurantmenuComponent } from './components/restaurant/restaurantmenu/restaurantmenu.component';
import { RestaurantproductComponent } from './components/restaurant/restaurantproduct/restaurantproduct.component';

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
      { path: 'categories', component: RestaurantcategoryComponent },
      { path: 'menus', component: RestaurantmenuComponent },
      { path: 'products', component: RestaurantproductComponent },
    ],
  },

  //Other
  {
    path: 'restaurant/detail/:id',
    component: RestaurantdetailComponent,
    // children: [{ path: 'menu', component: FooterComponent }],
  },
];
