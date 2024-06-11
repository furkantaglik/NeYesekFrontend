import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ToastrService } from 'ngx-toastr';
import { RestaurantDetail } from '../../../models/restaurant';
import { env } from '../../../../environments/environment';
import { RestaurantService } from '../../../services/restaurant.service';
import { CommentsComponent } from '../comments/comments.component';
import { AboutComponent } from '../about/about.component';
import { FavoriteService } from '../../../services/favorite.service';
import { UserService } from '../../../services/user.service';
import { User, UserDetail } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';
import { Favorite, FavoriteDetail } from '../../../models/favorite';
import { MenuService } from '../../../services/menu.service';
import { ProductService } from '../../../services/product.service';
import { MenuDetail } from '../../../models/menu';
import { ProductDetail } from '../../../models/product';

@Component({
  selector: 'app-restaurantdetail',
  standalone: true,
  imports: [
    LucideAngularModule,
    CommonModule,
    CommentsComponent,
    RouterLink,
    AboutComponent,
  ],
  templateUrl: './restaurantdetail.component.html',
})
export class RestaurantdetailComponent implements OnInit {
  restaurantDetail!: RestaurantDetail;
  restaurantPath: string = env.restaurantImagepath;
  menuPath:string=env.menuImagePath;
  productPath:string=env.productImagePath;
  favorites:FavoriteDetail[];
  menuDetails:MenuDetail[];
  productDetails:ProductDetail[];
  commentModal: boolean = false;
  aboutModal: boolean = false;
  favoriteModel: any;
  userDetail: UserDetail;
  constructor(
    private route: ActivatedRoute,
    private restaurantservice: RestaurantService,
    private menuService:MenuService,
    private productService:ProductService,
    private userService: UserService,
    private toastrService: ToastrService,
    private favoriteService: FavoriteService,
    private authService: AuthService,
    private viewportScroller:ViewportScroller
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getRestaurantDetail(id!);
    this.getUser();
    this.getMenuDetailsByRestaurant();
    this.getProductDetailsByRestaurant();

  }
  getRestaurantDetail(id: string) {
    this.restaurantservice.getRestaurantDetail(parseInt(id)).subscribe(
      (response) => {
        this.restaurantDetail = response.data;
      },
      (responseError) => {
        this.toastrService.error(responseError.error.message);
      }
    );
  }
  getMenuDetailsByRestaurant(){
    this.menuService.getMenuDetailsByRestaurant(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(response=>{
      this.menuDetails=response.data;
    })
  }
  getProductDetailsByRestaurant(){
    this.productService.getProductDetailsByRestaurant(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(response=>{
      this.productDetails=response.data;
    })
  }
  getUser() {
    if(this.isUser()){
      this.userService
      .getUserDetail(parseInt(localStorage.getItem('userId')))
      .subscribe((response) => {
        this.userDetail = response.data;
      });
      this.favoriteService.getFavoriteDetailsByUserId(parseInt(localStorage.getItem('userId'))).subscribe(response=>{
        this.favorites=response.data
      })
    }
  }
  isUser(): boolean {
    return this.authService.isUser();
  }
  openCommentModal() {
    this.commentModal = !this.commentModal;
  }
  openAboutModal() {
    this.aboutModal = !this.aboutModal;
  }
  scrollToElement(elementId:string):void{
    this.viewportScroller.scrollToAnchor(elementId);
  }

  addFavorite() {
    this.favoriteModel = {
      user: this.userDetail.user,
      restaurant: this.restaurantDetail.restaurant,
    };
    this.favoriteService.add(this.favoriteModel).subscribe(
      (response) => {
        this.toastrService.info(response.message);
      },
      (responseError) => {
        this.toastrService.error(responseError.error.message);
      }
    );
    
    
  }
  isFavorite() {
   return this.favorites?.find(f=>f.restaurant.id===this.restaurantDetail?.restaurant.id && f.user.id === parseInt(localStorage.getItem('userId')))
  }
}
