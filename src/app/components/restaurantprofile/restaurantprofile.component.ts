import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RestaurantService } from '../../services/restaurant.service';
import { ToastrService } from 'ngx-toastr';
import { RestaurantDetail, RestaurantImage } from '../../models/restaurant';

@Component({
  selector: 'app-restaurantprofile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './restaurantprofile.component.html',
})
export class RestaurantprofileComponent implements OnInit {
  profileForm!: FormGroup;
  restaurantDetail!: RestaurantDetail;
  file!: File;
  restaurantImage!: RestaurantImage;

  constructor(
    private formBuilder: FormBuilder,
    private restaurantService: RestaurantService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getRestaurant();
  }
  createProfileForm() {
    this.profileForm = this.formBuilder.group({
      name: [this.restaurantDetail.restaurant.name],
      email: [this.restaurantDetail.restaurant.email],
      telNo: [this.restaurantDetail.restaurant.telNo],
      adress: [this.restaurantDetail.restaurant.adress],
      id: [this.restaurantDetail.restaurant.id],
    });
  }

  getRestaurant() {
    this.restaurantService
      .getRestaurantDetail(parseInt(localStorage.getItem('restaurantId')!))
      .subscribe((response) => {
        this.restaurantDetail = response.data;
        this.createProfileForm();
      });
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }
  save() {
    let restaurantModel = Object.assign({}, this.profileForm.value);
    let model = {
      id: this.restaurantDetail.restaurantImage.id,
      restaurantId: this.restaurantDetail.restaurant.id,
      restaurant: this.restaurantDetail.restaurant,
    };
    this.restaurantService.update(restaurantModel).subscribe(
      (response) => {
        this.toastrService.info(response.message);
      },
      (responseError) => {
        this.toastrService.error(responseError.error.message);
      }
    );

    this.restaurantService
      .updateImage(model, this.file)
      .subscribe((response) => {
        this.toastrService.info(response.message);
      });
  }
}
