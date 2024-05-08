import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/response/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/response/singleResponseModel';
import { env } from '../../environments/environment';
import { ResponseModel } from '../models/response/responseModel';
import { Product, ProductDetail } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(
      env.apiUrl + 'product/getall'
    );
  }

  getById(id: number): Observable<SingleResponseModel<Product>> {
    return this.httpClient.get<SingleResponseModel<Product>>(
      env.apiUrl + 'product/getbyid?id=' + id
    );
  }

  getByRestaurantId(
    restaurantId: number
  ): Observable<SingleResponseModel<Product>> {
    return this.httpClient.get<SingleResponseModel<Product>>(
      env.apiUrl + 'product/getbyrestaurantid?restaurantId=' + restaurantId
    );
  }

  getByCategoryId(
    categoryId: number
  ): Observable<SingleResponseModel<Product>> {
    return this.httpClient.get<SingleResponseModel<Product>>(
      env.apiUrl + 'product/getbycategoryid?categoryId=' + categoryId
    );
  }

  getAllProductDetail(): Observable<ListResponseModel<ProductDetail>> {
    return this.httpClient.get<ListResponseModel<ProductDetail>>(
      env.apiUrl + 'product/getallproductdetails'
    );
  }
  getProductDetail(
    productId: number
  ): Observable<SingleResponseModel<Product>> {
    return this.httpClient.get<SingleResponseModel<Product>>(
      env.apiUrl + 'product/getproductdetail?productId=' + productId
    );
  }
  getProductDetailsByRestaurant(
    restaurantId: number
  ): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(
      env.apiUrl +
        'product/getproductdetailsbyrestaurant?restaurantId=' +
        restaurantId
    );
  }
  add(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'product/add',
      product
    );
  }
  update(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'product/update',
      product
    );
  }
  remove(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'product/remove',
      product
    );
  }
}
