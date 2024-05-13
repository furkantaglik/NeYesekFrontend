import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Router, RouterLink } from '@angular/router';
import { Restaurant } from '../../models/restaurant';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-kitchenlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './kitchenlist.component.html',
})
export class KitchenlistComponent implements OnInit {
  categories: Category[] = [];
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAllRestaurants();
  }
  getAllRestaurants() {
    this.categoryService.getAll().subscribe(
      (response) => {
        this.categories = response.data;
      },
      (responseError) => {
        this.toastrService.error(responseError.error.message);
      }
    );
  }
}
