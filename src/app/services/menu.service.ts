import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response/responseModel';
import { ListResponseModel } from '../models/response/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { SingleResponseModel } from '../models/response/singleResponseModel';
import { env } from '../../environments/environment';
import { Menu, MenuDetail, MenuImage } from '../models/menu';

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
  ): Observable<ListResponseModel<MenuDetail>> {
    return this.httpClient.get<ListResponseModel<MenuDetail>>(
      env.apiUrl + 'menu/getmenudetailsbyresturant?restaurantId=' + restaurantId
    );
  }
  add(menu: Menu): Observable<SingleResponseModel<Menu>> {
    return this.httpClient.post<SingleResponseModel<Menu>>(
      env.apiUrl + 'menu/add',
      menu
    );
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

  //image
  updateImage(
    menuImage: MenuImage,
    file: File
  ): Observable<SingleResponseModel<MenuImage>> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('menuImage', JSON.stringify(menuImage));
    return this.httpClient.post<SingleResponseModel<MenuImage>>(
      env.apiUrl + `menuImage/update`,
      formData
    );
  }
  addImage(
    productImage: MenuImage,
    file: File
  ): Observable<SingleResponseModel<MenuImage>> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('menuImage', JSON.stringify(productImage));
    return this.httpClient.post<SingleResponseModel<MenuImage>>(
      env.apiUrl + `menuImage/add`,
      formData
    );
  }
  deleteImage(menuImage: MenuImage): Observable<ResponseModel> {
    const formData = new FormData();
    formData.append('menuImage', JSON.stringify(menuImage));
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + `menuImage/remove`,
      formData
    );
  }
}
