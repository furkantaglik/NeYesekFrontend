import { Component, Input } from '@angular/core';
import { Product, ProductDetail } from '../../../models/product';
import { env } from '../../../../environments/environment';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [],
  templateUrl: './productcard.component.html',
})
export class ProductcardComponent {
  path: string = env.productImagePath;
  @Input() productDetail: ProductDetail;
}
