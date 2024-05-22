import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Router, RouterLink } from '@angular/router';
import { Restaurant } from '../../models/restaurant';
import { CategoryService } from '../../services/category.service';
import { Category, CategoryDetail } from '../../models/category';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { env } from '../../../environments/environment';

@Component({
  selector: 'app-kitchenlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './kitchenlist.component.html',
})
export class KitchenlistComponent implements OnInit {
  path: string = env.categoryImagePath;
  categoryDetails: CategoryDetail[] = [];
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAllCategoryDetails();
  }
  getAllCategoryDetails() {
    this.categoryService.getAllCategoryDetail().subscribe(
      (response) => {
        this.categoryDetails = response.data;
      },
      (responseError) => {
        this.toastrService.error(responseError.error.message);
      }
    );
  }
}
