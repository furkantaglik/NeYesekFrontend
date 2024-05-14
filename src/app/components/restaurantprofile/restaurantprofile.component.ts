import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RestaurantService } from '../../services/restaurant.service';
import { ToastrService } from 'ngx-toastr';
import { RestaurantDetail, RestaurantImage } from '../../models/restaurant';
import { LucideAngularModule } from 'lucide-angular';
import { env } from '../../../environments/environment';

@Component({
  selector: 'app-restaurantprofile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './restaurantprofile.component.html',
})
export class RestaurantprofileComponent implements OnInit {
  profileForm!: FormGroup;
  restaurantDetail!: RestaurantDetail;
  file!: File;
  restaurantImage!: any;
  path: string = env.restaurantImagepath;

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
    if (this.restaurantDetail.restaurantImage) {
      this.restaurantImage = {
        restaurantId: this.restaurantDetail.restaurant.id,
        restaurant: this.restaurantDetail.restaurant,
        id: this.restaurantDetail.restaurantImage.id,
      };
    } else {
      this.restaurantImage = {
        restaurantId: this.restaurantDetail.restaurant.id,
        restaurant: this.restaurantDetail.restaurant,
      };
    }
  }

  //image
  deleteImage() {
    this.restaurantService
      .deleteImage(this.restaurantDetail.restaurantImage!)
      .subscribe((response) => {
        this.toastrService.info(response.message);
        this.restaurantDetail.restaurantImage = null;
      });
  }
  updateImage() {
    this.restaurantService
      .updateImage(this.restaurantImage, this.file)
      .subscribe((response) => {
        this.restaurantDetail.restaurantImage = response.data;
        this.toastrService.info(response.message);
      });
    this.restaurantImage = null;
  }
  addImage() {
    this.restaurantService
      .addImage(this.restaurantImage, this.file)
      .subscribe((response) => {
        this.restaurantDetail.restaurantImage = response.data;
        this.toastrService.info(response.message);
      });
    this.restaurantImage = null;
  }

  save() {
    let restaurantModel = Object.assign({}, this.profileForm.value);
    this.restaurantService.update(restaurantModel).subscribe(
      (response) => {
        this.toastrService.info(response.message);
      },
      (responseError) => {
        this.toastrService.error(responseError.error.message);
      }
    );

    this.restaurantDetail.restaurantImage
      ? this.updateImage()
      : this.addImage();
  }
}
