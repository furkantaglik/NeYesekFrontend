import { Component, OnInit } from '@angular/core';
import { env } from '../../../../environments/environment';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RestaurantService } from '../../../services/restaurant.service';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../../services/product.service';
import { RestaurantDetail } from '../../../models/restaurant';
import { MenuService } from '../../../services/menu.service';
import { Menu, MenuDetail, MenuImage } from '../../../models/menu';
import { Product, ProductDetail } from '../../../models/product';

@Component({
  selector: 'app-restaurantmenu',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LucideAngularModule],
  templateUrl: './restaurantmenu.component.html',
})
export class RestaurantmenuComponent implements OnInit {
  restaurantDetail: RestaurantDetail;
  menuDetails: MenuDetail[];
  menuDetail: MenuDetail;
  productDetails: ProductDetail[];
  menuForm: FormGroup;
  menuImage: any;
  restaurantMenu: any;
  productModal: boolean = false;
  file: File;
  menuPath: string = env.menuImagePath;
  productPath: string = env.productImagePath;

  constructor(
    private restaurantService: RestaurantService,
    private menuService: MenuService,
    private toastrService: ToastrService,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getRestaurantDetail();
    this.getMenusByRestaurant();
  }

  getRestaurantDetail() {
    this.restaurantService
      .getRestaurantDetail(parseInt(localStorage.getItem('restaurantId')))
      .subscribe((response) => {
        this.restaurantDetail = response.data;
        this.createMenuForm();
      });
  }
  getMenusByRestaurant() {
    this.menuService
      .getMenuDetailsByRestaurant(
        parseInt(localStorage.getItem('restaurantId'))
      )
      .subscribe((response) => {
        this.menuDetails = response.data;
      });
  }
  getProductsByRestaurant() {
    this.productService
      .getProductDetailsByRestaurant(
        parseInt(localStorage.getItem('restaurantId'))
      )
      .subscribe((response) => {
        this.productDetails = response.data;
      });
  }
  createMenuForm() {
    this.menuForm = this.formBuilder.group({
      name: [''],
      totalPrice: [''],
      description: [''],
    });
  }
  addProductToMenu(product: Product = null) {
    if (!product.menus) {
      product.menus = [];
    }
  }
  save() {
    let menuModel = Object.assign({}, this.menuForm.value);
    this.restaurantMenu = {
      name: menuModel.name,
      totalPrice: menuModel.totalPrice,
      description: menuModel.description,
      restaurant: this.restaurantDetail.restaurant,
    };
    this.menuService.add(this.restaurantMenu).subscribe(
      (response) => {
        this.toastrService.info(response.message);
        this.menuImage = {
          menuId: response.data.id,
          menu: response.data,
        };
        this.addImage();
      },
      (responseError) => {
        this.toastrService.error(responseError.error.message);
      }
    );
  }
  deleteMenu(menuDetail: MenuDetail) {
    if (menuDetail.menuImage) {
      this.deleteImage(menuDetail.menuImage);
      menuDetail.menuImage = null;
      menuDetail.menu.menuImage = null;
    }
    this.menuService.remove(menuDetail.menu).subscribe((response) => {
      this.toastrService.info(response.message);
    });
  }
  openProductModal() {
    this.productModal = !this.productModal;
    this.productModal && this.getProductsByRestaurant();
  }
  //image
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }
  deleteImage(menuImage: MenuImage) {
    this.menuService.deleteImage(menuImage).subscribe((response) => {
      this.menuDetail.menuImage = null;
    });
  }
  addImage() {
    this.menuService
      .addImage(this.menuImage, this.file)
      .subscribe((response) => {
        this.menuDetail.menuImage = response.data;
        this.toastrService.info(response.message);
      });
    this.menuImage = null;
  }
}
