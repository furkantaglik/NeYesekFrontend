import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant, RestaurantDetail } from '../../models/restaurant';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-restaurantdetail',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './restaurantdetail.component.html',
})
export class RestaurantdetailComponent implements OnInit {
  restaurantDetail!: RestaurantDetail;
  constructor(
    private route: ActivatedRoute,
    private restaurantservice: RestaurantService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getRestaurantDetail(id!);
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
}
