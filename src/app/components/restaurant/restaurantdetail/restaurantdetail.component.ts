import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ToastrService } from 'ngx-toastr';
import { RestaurantDetail } from '../../../models/restaurant';
import { env } from '../../../../environments/environment';
import { RestaurantService } from '../../../services/restaurant.service';
import { CommentsComponent } from '../comments/comments.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-restaurantdetail',
  standalone: true,
  imports: [
    LucideAngularModule,
    CommonModule,
    CommentsComponent,
    AboutComponent,
  ],
  templateUrl: './restaurantdetail.component.html',
})
export class RestaurantdetailComponent implements OnInit {
  restaurantDetail!: RestaurantDetail;
  path: string = env.restaurantImagepath;
  commentModal: boolean = false;
  aboutModal: boolean = false;
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
  openCommentModal() {
    this.commentModal = !this.commentModal;
  }
  openAboutModal() {
    this.aboutModal = !this.aboutModal;
  }
}
