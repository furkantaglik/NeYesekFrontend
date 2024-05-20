import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-restaurantaccount',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './restaurantaccount.component.html',
})
export class RestaurantaccountComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
