import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';
import { ToastrService } from 'ngx-toastr';
import { RestaurantDetail } from '../../../models/restaurant';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-restaurantcategory',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './restaurantcategory.component.html',
})
export class RestaurantcategoryComponent implements OnInit {
  restaurantDetail!: RestaurantDetail;
  categoryForm!: FormGroup;
  restaurantCategory!: any;

  constructor(
    private restaurantService: RestaurantService,
    private toastrService: ToastrService,
    private categoryservice: CategoryService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getRestaurant();
  }
  getRestaurant() {
    this.restaurantService
      .getRestaurantDetail(parseInt(localStorage.getItem('restaurantId')!))
      .subscribe((response) => {
        this.restaurantDetail = response.data;
        this.createCategoryForm();
      });
  }

  createCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      name: [''],
    });
  }

  save() {
    let categoryModel = Object.assign({}, this.categoryForm.value);
    this.restaurantCategory = {
      restaurants: [this.restaurantDetail.restaurant],
      restaurantId: this.restaurantDetail.restaurant.id,
      name: categoryModel.name,
    };
    this.categoryservice.add(this.restaurantCategory).subscribe(
      (response) => {
        this.toastrService.info(response.message);
      },
      (responseError) => {
        this.toastrService.error(responseError.error.message);
      }
    );
  }
}
