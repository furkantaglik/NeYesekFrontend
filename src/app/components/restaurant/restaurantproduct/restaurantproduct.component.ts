import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductcardComponent } from '../productcard/productcard.component';

@Component({
  selector: 'app-restaurantproduct',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ProductcardComponent],
  templateUrl: './restaurantproduct.component.html',
})
export class RestaurantproductComponent {}
