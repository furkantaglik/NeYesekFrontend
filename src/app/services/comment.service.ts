import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/response/listResponseModel';
import { SingleResponseModel } from '../models/response/singleResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { env } from '../../environments/environment';
import { CommentDetail } from '../models/comment';
import { ResponseModel } from '../models/response/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Comment>> {
    return this.httpClient.get<ListResponseModel<Comment>>(
      env.apiUrl + 'comment/getall'
    );
  }

  getById(id: number): Observable<SingleResponseModel<Comment>> {
    return this.httpClient.get<SingleResponseModel<Comment>>(
      env.apiUrl + 'comment/getbyid?id=' + id
    );
  }

  getAllCommentDetail(): Observable<ListResponseModel<CommentDetail>> {
    return this.httpClient.get<ListResponseModel<CommentDetail>>(
      env.apiUrl + 'comment/getallcommentdetails'
    );
  }
  getCommentDetail(
    commentId: number
  ): Observable<SingleResponseModel<Comment>> {
    return this.httpClient.get<SingleResponseModel<Comment>>(
      env.apiUrl + 'comment/getcommentdetail?commentId=' + commentId
    );
  }
  getCommentDetailsByRestaurant(
    restaurantId: number
  ): Observable<ListResponseModel<Comment>> {
    return this.httpClient.get<ListResponseModel<Comment>>(
      env.apiUrl +
        'comment/getcommentdetailsbyrestaurant?restaurantId=' +
        restaurantId
    );
  }
  getCommentDetailsByProduct(
    productId: number
  ): Observable<ListResponseModel<Comment>> {
    return this.httpClient.get<ListResponseModel<Comment>>(
      env.apiUrl + 'comment/getcommentdetailsbyproduct?productId=' + productId
    );
  }
  add(comment: Comment): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'comment/add',
      comment
    );
  }
  update(comment: Comment): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'comment/update',
      comment
    );
  }
  remove(comment: Comment): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      env.apiUrl + 'comment/remove',
      comment
    );
  }
}
