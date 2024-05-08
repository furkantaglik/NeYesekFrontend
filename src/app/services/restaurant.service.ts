import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/response/listResponseModel';
import { SingleResponseModel } from '../models/response/singleResponseModel';
import { Observable } from 'rxjs';
import { env } from '../../environments/environment';
import { ResponseModel } from '../models/response/responseModel';
import { Restaurant, RestaurantDetail } from '../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Restaurant>> {
    return this.httpClient.get<ListResponseModel<Restaurant>>(
      env.apiUrl + 'restaurant/getall'
    );
  }

  getById(id: number): Observable<SingleResponseModel<Restaurant>> {
    return this.httpClient.get<SingleResponseModel<Restaurant>>(
      env.apiUrl + 'restaurant/getbyid?id=' + id
    );
  }

  getByMail(mail: String): Observable<SingleResponseModel<Restaurant>> {
    return this.httpClient.get<SingleResponseModel<Restaurant>>(
      env.apiUrl + 'restaurant/getbymail?mail=' + mail
    );
  }

  getAllRestaurantDetail(): Observable<ListResponseModel<RestaurantDetail>> {
    return this.httpClient.get<ListResponseModel<RestaurantDetail>>(
      env.apiUrl + 'restaurant/getallrestaurantdetails'
    );
  }
  getRestaurantDetail(
    restaurantId: number
  ): Observable<SingleResponseModel<Restaurant>> {
    return this.httpClient.get<SingleResponseModel<Restaurant>>(
      env.apiUrl + 'restaurant/getrestaurantdetail?restaurantId=' + restaurantId
    );
  }
  add(restaurant: Restaurant): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'restaurant/add',
      restaurant
    );
  }
  update(restaurant: Restaurant): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'restaurant/update',
      restaurant
    );
  }
  remove(restaurant: Restaurant): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'restaurant/remove',
      restaurant
    );
  }
}
