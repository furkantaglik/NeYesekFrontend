import { Component, OnInit } from '@angular/core';
import { ProductcardComponent } from '../restaurant/productcard/productcard.component';
import { ProductService } from '../../services/product.service';
import { ProductDetail } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [ProductcardComponent, CommonModule],
  templateUrl: './productlist.component.html',
})
export class ProductlistComponent implements OnInit {
  productsDetails: ProductDetail[];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProductDetail().subscribe((response) => {
      this.productsDetails = response.data;
    });
  }
}
