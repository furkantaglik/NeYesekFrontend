import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/response/listResponseModel';
import { env } from '../../environments/environment';
import { SingleResponseModel } from '../models/response/singleResponseModel';
import { ResponseModel } from '../models/response/responseModel';
import { Favorite, FavoriteDetail } from '../models/favorite';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Favorite>> {
    return this.httpClient.get<ListResponseModel<Favorite>>(
      env.apiUrl + 'favorite/getall'
    );
  }

  getById(id: number): Observable<SingleResponseModel<Favorite>> {
    return this.httpClient.get<SingleResponseModel<Favorite>>(
      env.apiUrl + 'favorite/getbyid?id=' + id
    );
  }

  getAllFavoriteDetail(): Observable<ListResponseModel<FavoriteDetail>> {
    return this.httpClient.get<ListResponseModel<FavoriteDetail>>(
      env.apiUrl + 'favorite/getallfavoritedetails'
    );
  }
  getFavoriteDetail(id: number): Observable<SingleResponseModel<Favorite>> {
    return this.httpClient.get<SingleResponseModel<Favorite>>(
      env.apiUrl + 'favorite/getfavoritedetail?id=' + id
    );
  }
  getFavoriteDetailsByUserId(
    userId: number
  ): Observable<ListResponseModel<FavoriteDetail>> {
    return this.httpClient.get<ListResponseModel<FavoriteDetail>>(
      env.apiUrl + 'favorite/getfavoritedetailsbyuser?userId=' + userId
    );
  }
  add(favorite: Favorite): Observable<SingleResponseModel<Favorite>> {
    return this.httpClient.post<SingleResponseModel<Favorite>>(
      env.apiUrl + 'favorite/add',
      favorite
    );
  }
  update(favorite: Favorite): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'favorite/update',
      favorite
    );
  }
  remove(favorite: Favorite): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'favorite/remove',
      favorite
    );
  }
}
