import { Component, OnInit } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { FilterbarComponent } from '../filterbar/filterbar.component';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { RestaurantcardComponent } from '../restaurant/restaurantcard/restaurantcard.component';
import { RestaurantlistComponent } from '../restaurant/restaurantlist/restaurantlist.component';
import { KitchenlistComponent } from '../kitchenlist/kitchenlist.component';
import { CampaignlistComponent } from '../campaignlist/campaignlist.component';
import { ProductlistComponent } from '../productlist/productlist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchbarComponent,
    FilterbarComponent,
    LucideAngularModule,
    CommonModule,
    RestaurantcardComponent,
    RestaurantlistComponent,
    KitchenlistComponent,
    CampaignlistComponent,
    ProductlistComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  filterBar: boolean = false;
  setFilterBar() {
    this.filterBar = !this.filterBar;
  }

  ngOnInit(): void {}
}
