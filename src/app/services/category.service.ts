import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/response/listResponseModel';
import { env } from '../../environments/environment';
import { SingleResponseModel } from '../models/response/singleResponseModel';
import { Category, CategoryDetail, CategoryImage } from '../models/category';
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
  ): Observable<ListResponseModel<CategoryDetail>> {
    return this.httpClient.get<ListResponseModel<CategoryDetail>>(
      env.apiUrl +
        'category/getcategorydetailsbyresturant?restaurantId=' +
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
  add(category: Category): Observable<SingleResponseModel<Category>> {
    return this.httpClient.post<SingleResponseModel<Category>>(
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
  //image
  updateImage(
    categoryImage: CategoryImage,
    file: File
  ): Observable<SingleResponseModel<CategoryImage>> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('categoryImage', JSON.stringify(categoryImage));
    return this.httpClient.post<SingleResponseModel<CategoryImage>>(
      env.apiUrl + `categoryImage/update`,
      formData
    );
  }
  addImage(
    categoryImage: CategoryImage,
    file: File
  ): Observable<SingleResponseModel<CategoryImage>> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('categoryImage', JSON.stringify(categoryImage));
    return this.httpClient.post<SingleResponseModel<CategoryImage>>(
      env.apiUrl + `categoryImage/add`,
      formData
    );
  }
  deleteImage(categoryImage: CategoryImage): Observable<ResponseModel> {
    const formData = new FormData();
    formData.append('categoryImage', JSON.stringify(categoryImage));
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + `categoryImage/remove`,
      formData
    );
  }
}
