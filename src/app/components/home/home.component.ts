import { Component, OnInit } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { FilterbarComponent } from '../filterbar/filterbar.component';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchbarComponent,
    FilterbarComponent,
    LucideAngularModule,
    CommonModule,
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
