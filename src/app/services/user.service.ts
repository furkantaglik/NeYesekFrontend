import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/response/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/response/singleResponseModel';
import { env } from '../../environments/environment';
import { User, UserDetail } from '../models/user';
import { ResponseModel } from '../models/response/responseModel';
import { FavoriteDetail } from '../models/favorite';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<User>> {
    return this.httpClient.get<ListResponseModel<User>>(
      env.apiUrl + 'user/getall'
    );
  }

  getById(id: number): Observable<SingleResponseModel<User>> {
    return this.httpClient.get<SingleResponseModel<User>>(
      env.apiUrl + 'user/getbyid?id=' + id
    );
  }

  getByMail(mail: String): Observable<SingleResponseModel<User>> {
    return this.httpClient.get<SingleResponseModel<User>>(
      env.apiUrl + 'user/getbymail?mail=' + mail
    );
  }

  getAllUserDetail(): Observable<ListResponseModel<UserDetail>> {
    return this.httpClient.get<ListResponseModel<UserDetail>>(
      env.apiUrl + 'user/getalluserdetails'
    );
  }
  getUserDetail(userId: number): Observable<SingleResponseModel<UserDetail>> {
    return this.httpClient.get<SingleResponseModel<UserDetail>>(
      env.apiUrl + 'user/getuserdetail?userId=' + userId
    );
  }
  add(user: User): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(env.apiUrl + 'user/add', user);
  }
  update(user: User): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'user/update',
      user
    );
  }
  remove(user: User): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'user/remove',
      user
    );
  }
}
