import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/response/listResponseModel';
import { env } from '../../environments/environment';
import { SingleResponseModel } from '../models/response/singleResponseModel';
import { Category, CategoryDetail } from '../models/category';
import { ResponseModel } from '../models/response/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(
      env.apiUrl + 'category/getall'
    );
  }

  getById(id: number): Observable<SingleResponseModel<Category>> {
    return this.httpClient.get<SingleResponseModel<Category>>(
      env.apiUrl + 'category/getbyid?id=' + id
    );
  }

  getAllCategoryDetail(): Observable<ListResponseModel<CategoryDetail>> {
    return this.httpClient.get<ListResponseModel<CategoryDetail>>(
      env.apiUrl + 'category/getallcategorydetails'
    );
  }
  getCategoryDetail(
    categoryId: number
  ): Observable<SingleResponseModel<Category>> {
    return this.httpClient.get<SingleResponseModel<Category>>(
      env.apiUrl + 'category/getcategorydetail?categoryId=' + categoryId
    );
  }
  getCategoryDetailsByRestaurant(
    restaurantId: number
  ): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(
      env.apiUrl +
        'category/getcategorydetailsbyrestaurant?restaurantId=' +
        restaurantId
    );
  }
  getCategoryDetailsByProduct(
    productId: number
  ): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(
      env.apiUrl + 'category/getcategorydetailsbyproduct?productId=' + productId
    );
  }
  add(category: Category): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'category/add',
      category
    );
  }
  update(category: Category): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'category/update',
      category
    );
  }
  remove(category: Category): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'category/remove',
      category
    );
  }
}
