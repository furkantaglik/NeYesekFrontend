import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response/responseModel';
import { ListResponseModel } from '../models/response/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { SingleResponseModel } from '../models/response/singleResponseModel';
import { env } from '../../environments/environment';
import { Menu, MenuDetail } from '../models/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<ListResponseModel<Menu>> {
    return this.httpClient.get<ListResponseModel<Menu>>(
      env.apiUrl + 'menu/getall'
    );
  }

  getById(id: number): Observable<SingleResponseModel<Menu>> {
    return this.httpClient.get<SingleResponseModel<Menu>>(
      env.apiUrl + 'menu/getbyid?id=' + id
    );
  }

  getAllMenuDetail(): Observable<ListResponseModel<MenuDetail>> {
    return this.httpClient.get<ListResponseModel<MenuDetail>>(
      env.apiUrl + 'menu/getallmenudetails'
    );
  }
  getMenuDetail(menuId: number): Observable<SingleResponseModel<Menu>> {
    return this.httpClient.get<SingleResponseModel<Menu>>(
      env.apiUrl + 'menu/getmenudetail?menuId=' + menuId
    );
  }
  getMenuDetailsByRestaurant(
    restaurantId: number
  ): Observable<ListResponseModel<Menu>> {
    return this.httpClient.get<ListResponseModel<Menu>>(
      env.apiUrl +
        'menu/getmenudetailsbyrestaurant?restaurantId=' +
        restaurantId
    );
  }
  add(menu: Menu): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(env.apiUrl + 'menu/add', menu);
  }
  update(menu: Menu): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'menu/update',
      menu
    );
  }
  remove(menu: Menu): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'menu/remove',
      menu
    );
  }
}
