import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/auth/loginModel';
import { SingleResponseModel } from '../models/response/singleResponseModel';
import { TokenModel } from '../models/auth/tokenModel';
import { env } from '../../environments/environment';
import { UserRegisterModel } from '../models/auth/userRegisterModel';
import { RestaurantRegisterModel } from '../models/auth/restaurantRegisterModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  userLogin(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      env.apiUrl + 'Auth/userlogin',
      loginModel
    );
  }
  userRegister(userRegisterModel: UserRegisterModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      env.apiUrl + 'Auth/userregister',
      userRegisterModel
    );
  }

  restaurantLogin(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      env.apiUrl + 'Auth/restaurantlogin',
      loginModel
    );
  }
  restaurantRegister(restaurantRegisterModel: RestaurantRegisterModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      env.apiUrl + 'Auth/restaurantregister',
      restaurantRegisterModel
    );
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
    localStorage.removeItem('restaurantId');
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
