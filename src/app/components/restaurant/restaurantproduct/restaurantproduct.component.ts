import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ProductcardComponent } from '../productcard/productcard.component';
import { RestaurantService } from '../../../services/restaurant.service';
import { ToastrService } from 'ngx-toastr';
import { RestaurantDetail } from '../../../models/restaurant';
import { MenuImage } from '../../../models/menu';
import { ProductDetail, ProductImage } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { env } from '../../../../environments/environment';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-restaurantproduct',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductcardComponent,
    LucideAngularModule,
  ],
  templateUrl: './restaurantproduct.component.html',
})
export class RestaurantproductComponent implements OnInit {
  restaurantDetail: RestaurantDetail;
  productDetails: ProductDetail[];
  productDetail: ProductDetail;
  restaurantProduct: any;
  productForm: FormGroup;
  productImage: any;
  file: File;
  path: string = env.productImagePath;

  constructor(
    private restaurantService: RestaurantService,
    private toastrService: ToastrService,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getRestaurantDetail();
    this.getProductsByRestaurant();
  }

  getRestaurantDetail() {
    this.restaurantService
      .getRestaurantDetail(parseInt(localStorage.getItem('restaurantId')))
      .subscribe((response) => {
        this.restaurantDetail = response.data;
        this.createProductForm();
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

  createProductForm() {
    this.productForm = this.formBuilder.group({
      name: [''],
      unitPrice: [''],
      unitsInStock: [''],
      description: [''],
    });
  }
  save() {
    let productModel = Object.assign({}, this.productForm.value);
    this.restaurantProduct = {
      name: productModel.name,
      unitPrice: productModel.unitPrice,
      unitsInStock: productModel.unitsInStock,
      description: productModel.description,
      restaurant: this.restaurantDetail.restaurant,
    };
    this.productService.add(this.restaurantProduct).subscribe(
      (response) => {
        this.toastrService.info(response.message);
        this.productImage = {
          productId: response.data.id,
          product: response.data,
        };
        this.addImage();
      },
      (responseError) => {
        this.toastrService.error(responseError.error.message);
      }
    );
  }
  deleteProduct(productDetail: ProductDetail) {
    if (productDetail.productImage) {
      this.deleteImage(productDetail.productImage);
      productDetail.productImage = null;
      productDetail.product.productImage = null;
    }
    this.productService.remove(productDetail.product).subscribe((response) => {
      this.toastrService.info(response.message);
    });
  }

  //image
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }
  deleteImage(productImage: ProductImage) {
    this.productService.deleteImage(productImage).subscribe((response) => {
      this.productDetail.productImage = null;
    });
  }
  addImage() {
    this.productService
      .addImage(this.productImage, this.file)
      .subscribe((response) => {
        this.productDetail.productImage = response.data;
        this.toastrService.info(response.message);
      });
    this.productImage = null;
  }
}
