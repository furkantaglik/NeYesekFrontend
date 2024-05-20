import { Component, OnInit } from '@angular/core';
import { RestaurantcardComponent } from '../restaurantcard/restaurantcard.component';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RestaurantService } from '../../../services/restaurant.service';
import { RestaurantDetail } from '../../../models/restaurant';

@Component({
  selector: 'app-restaurantlist',
  standalone: true,
  imports: [RestaurantcardComponent, CommonModule],
  templateUrl: './restaurantlist.component.html',
})
export class RestaurantlistComponent implements OnInit {
  restaurantsDetails: RestaurantDetail[] = [];
  constructor(
    private restaurantService: RestaurantService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAllRestaurantDetail();
  }
  getAllRestaurantDetail() {
    this.restaurantService.getAllRestaurantDetail().subscribe(
      (response) => {
        this.restaurantsDetails = response.data;
      },
      (responseError) => {
        this.toastrService.error(responseError.error.message);
      }
    );
  }
}
