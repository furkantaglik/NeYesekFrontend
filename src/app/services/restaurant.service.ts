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
      env.apiUrl + 'restaurants/getall'
    );
  }

  getById(id: number): Observable<SingleResponseModel<Restaurant>> {
    return this.httpClient.get<SingleResponseModel<Restaurant>>(
      env.apiUrl + 'restaurants/getbyid?id=' + id
    );
  }

  getByMail(mail: String): Observable<SingleResponseModel<Restaurant>> {
    return this.httpClient.get<SingleResponseModel<Restaurant>>(
      env.apiUrl + 'restaurants/getbymail?mail=' + mail
    );
  }

  getAllRestaurantDetail(): Observable<ListResponseModel<RestaurantDetail>> {
    return this.httpClient.get<ListResponseModel<RestaurantDetail>>(
      env.apiUrl + 'restaurants/getallrestaurantdetails'
    );
  }
  getRestaurantDetail(
    restaurantId: number
  ): Observable<SingleResponseModel<RestaurantDetail>> {
    return this.httpClient.get<SingleResponseModel<RestaurantDetail>>(
      env.apiUrl +
        'restaurants/getrestaurantdetail?restaurantId=' +
        restaurantId
    );
  }
  add(restaurant: Restaurant): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'restaurants/add',
      restaurant
    );
  }
  update(restaurant: Restaurant): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'restaurants/update',
      restaurant
    );
  }
  remove(restaurant: Restaurant): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'restaurants/remove',
      restaurant
    );
  }
}
