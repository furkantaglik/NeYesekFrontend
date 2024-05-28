import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';
import { ToastrService } from 'ngx-toastr';
import { RestaurantDetail } from '../../../models/restaurant';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  Category,
  CategoryDetail,
  CategoryImage,
} from '../../../models/category';
import { CategoryService } from '../../../services/category.service';
import { env } from '../../../../environments/environment';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-restaurantcategory',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './restaurantcategory.component.html',
})
export class RestaurantcategoryComponent implements OnInit {
  restaurantDetail!: RestaurantDetail;
  categoryDetails: CategoryDetail[];
  restaurantCategoryDetail: CategoryDetail;
  categoryForm!: FormGroup;
  restaurantCategory!: any;
  categoryImage: any;
  file: File;
  path: string = env.categoryImagePath;

  constructor(
    private restaurantService: RestaurantService,
    private toastrService: ToastrService,
    private categoryservice: CategoryService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getRestaurant();
    this.getAllCategoryDetails();
  }
  getRestaurant() {
    this.restaurantService
      .getRestaurantDetail(parseInt(localStorage.getItem('restaurantId')!))
      .subscribe((response) => {
        this.restaurantDetail = response.data;
        this.createCategoryForm();
      });
  }
  getAllCategoryDetails() {
    this.categoryservice.getAllCategoryDetail().subscribe(
      (response) => {
        this.categoryDetails = response.data;
      },
      (responseError) => {
        this.toastrService.error(responseError.error.message);
      }
    );
  }

  addCategoryToRestaurant($event, category: Category) {
    if (!category.restaurants) {
      category.restaurants = [];
    }

    category.restaurants.push(this.restaurantDetail.restaurant);
    this.categoryservice.update(category).subscribe((response) => {
      this.toastrService.info(response.message);
    });
    category.restaurants = [];
  }

  isCategorySelected(category: Category): boolean {
    return this.restaurantDetail.categories.some((c) => c.id === category.id);
  }
  createCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      name: [''],
    });
  }
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  save() {
    let categoryModel = Object.assign({}, this.categoryForm.value);
    this.restaurantCategory = {
      restaurants: [this.restaurantDetail.restaurant],
      name: categoryModel.name,
    };
    this.categoryservice.add(this.restaurantCategory).subscribe(
      (response) => {
        this.toastrService.info(response.message);
        this.categoryImage = {
          categoryId: response.data.id,
          category: response.data,
        };
        this.addImage();
      },
      (responseError) => {
        this.toastrService.error(responseError.error.message);
      }
    );
  }

  deleteCategory(categoryDetail: CategoryDetail) {
    if (categoryDetail.categoryImage) {
      this.deleteImage(categoryDetail.categoryImage);
      categoryDetail.category.categoryImage = null;
    }
    this.categoryservice
      .remove(categoryDetail.category)
      .subscribe((response) => {
        this.toastrService.info(response.message);
      });
  }

  //image
  deleteImage(categoryImage: CategoryImage) {
    this.categoryservice.deleteImage(categoryImage).subscribe((response) => {
      this.restaurantCategoryDetail.categoryImage = null;
    });
  }
  addImage() {
    this.categoryservice
      .addImage(this.categoryImage, this.file)
      .subscribe((response) => {
        this.restaurantCategoryDetail.categoryImage = response.data;
        this.toastrService.info(response.message);
      });
    this.categoryImage = null;
  }
}
