import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { env } from '../../../environments/environment';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, NgTemplateOutlet],
  templateUrl: './basket.component.html',
})
export class BasketComponent implements OnInit {
  productPath: string = env.productImagePath;
  menuPath: string = env.menuImagePath;
  @Input() basketInThings: any;

  constructor() {}

  ngOnInit(): void {
    this.loadBasket();
  }

  loadBasket() {
    this.basketInThings = JSON.parse(localStorage.getItem('basket')) || [];
  }

  saveBasket() {
    localStorage.setItem('basket', JSON.stringify(this.basketInThings));
  }
  removeFromBasket(item: any) {
    this.basketInThings = this.basketInThings.filter((basketItem) => {
      return (
        basketItem.menu?.id !== item.menu?.id ||
        basketItem.product?.id !== item.product?.id
      );
    });
    this.saveBasket();
  }

  incrementQuantity(basket: any) {
    basket.quantity += 1;
    this.saveBasket();
  }

  decrementQuantity(basket: any) {
    if (basket.quantity > 1) {
      basket.quantity -= 1;
    } else {
      this.removeFromBasket(basket);
    }
    this.saveBasket();
  }
}
