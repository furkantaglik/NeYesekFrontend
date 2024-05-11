import { Component, OnInit } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { FilterbarComponent } from '../filterbar/filterbar.component';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { RestaurantcardComponent } from '../restaurantcard/restaurantcard.component';
import { RestaurantlistComponent } from '../restaurantlist/restaurantlist.component';
import { KitchenlistComponent } from '../kitchenlist/kitchenlist.component';
import { CampaignlistComponent } from '../campaignlist/campaignlist.component';

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
