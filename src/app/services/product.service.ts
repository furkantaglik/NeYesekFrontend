import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/response/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/response/singleResponseModel';
import { env } from '../../environments/environment';
import { ResponseModel } from '../models/response/responseModel';
import { Product, ProductDetail, ProductImage } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(
      env.apiUrl + 'products/getall'
    );
  }

  getById(id: number): Observable<SingleResponseModel<Product>> {
    return this.httpClient.get<SingleResponseModel<Product>>(
      env.apiUrl + 'products/getbyid?id=' + id
    );
  }

  getByRestaurantId(
    restaurantId: number
  ): Observable<ListResponseModel<ProductDetail>> {
    return this.httpClient.get<ListResponseModel<ProductDetail>>(
      env.apiUrl + 'products/getbyrestaurantid?restaurantId=' + restaurantId
    );
  }

  getByCategoryId(
    categoryId: number
  ): Observable<SingleResponseModel<Product>> {
    return this.httpClient.get<SingleResponseModel<Product>>(
      env.apiUrl + 'products/getbycategoryid?categoryId=' + categoryId
    );
  }

  getAllProductDetail(): Observable<ListResponseModel<ProductDetail>> {
    return this.httpClient.get<ListResponseModel<ProductDetail>>(
      env.apiUrl + 'products/getallproductdetails'
    );
  }
  getProductDetail(
    productId: number
  ): Observable<SingleResponseModel<Product>> {
    return this.httpClient.get<SingleResponseModel<Product>>(
      env.apiUrl + 'products/getproductdetail?productId=' + productId
    );
  }
  getProductDetailsByRestaurant(
    restaurantId: number
  ): Observable<ListResponseModel<ProductDetail>> {
    return this.httpClient.get<ListResponseModel<ProductDetail>>(
      env.apiUrl +
        'products/getproductdetailsbyrestaurant?restaurantId=' +
        restaurantId
    );
  }
  add(product: Product): Observable<SingleResponseModel<Product>> {
    return this.httpClient.post<SingleResponseModel<Product>>(
      env.apiUrl + 'products/add',
      product
    );
  }
  update(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'products/update',
      product
    );
  }
  remove(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'products/remove',
      product
    );
  }

  //image
  updateImage(
    productImage: ProductImage,
    file: File
  ): Observable<SingleResponseModel<ProductImage>> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('productImage', JSON.stringify(productImage));
    return this.httpClient.post<SingleResponseModel<ProductImage>>(
      env.apiUrl + `productImage/update`,
      formData
    );
  }
  addImage(
    productImage: ProductImage,
    file: File
  ): Observable<SingleResponseModel<ProductImage>> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('productImage', JSON.stringify(productImage));
    return this.httpClient.post<SingleResponseModel<ProductImage>>(
      env.apiUrl + `productImage/add`,
      formData
    );
  }
  deleteImage(productImage: ProductImage): Observable<ResponseModel> {
    const formData = new FormData();
    formData.append('productImage', JSON.stringify(productImage));
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + `productImage/remove`,
      formData
    );
  }
}
