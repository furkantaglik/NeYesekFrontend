import { Component, Input } from '@angular/core';
import { ProductDetail } from '../../../models/product';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [],
  templateUrl: './productcard.component.html',
})
export class ProductcardComponent {
  @Input() productDetail: ProductDetail;
}
