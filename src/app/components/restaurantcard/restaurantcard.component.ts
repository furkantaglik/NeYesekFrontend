import { Component, Input, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Restaurant, RestaurantDetail } from '../../models/restaurant';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { env } from '../../../environments/environment';

@Component({
  selector: 'app-restaurantcard',
  standalone: true,
  imports: [LucideAngularModule, CommonModule, RouterLink],
  templateUrl: './restaurantcard.component.html',
})
export class RestaurantcardComponent implements OnInit {
  path: string = env.restaurantImagepath;
  @Input() restaurantDetail!: RestaurantDetail;
  constructor() {}
  ngOnInit(): void {}
}
