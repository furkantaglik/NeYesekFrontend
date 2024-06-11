import { Category } from './category';
import { Menu } from './menu';
import { ProductMenu } from './productMenu';
import { Restaurant } from './restaurant';

export interface Product {
  id: number;
  name: string;
  unitPrice: number;
  unitsInStock: number;
  description: string;
  categories?: Category[];
  comments?: Comment[];
  restaurant: Restaurant;
  menus?: Menu[];
  productMenu: ProductMenu[];
  productImage: ProductImage;
}

export interface ProductDetail {
  product: Product;
  categories: Category[];
  restaurant: Restaurant;
  productImage: ProductImage;
}

export interface ProductImage {
  id: number;
  imagePath: string;
  productId: number;
  product: Product;
}
