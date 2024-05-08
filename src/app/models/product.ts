import { Category } from './category';
import { Menu } from './menu';
import { ProductMenu } from './productMenu';
import { Restaurant } from './restaurant';

export interface Product {
  id: number;
  name: string;
  unitPrice: number;
  unitsInStock: number;
  categories?: Category[];
  comments?: Comment[];
  restaurant: Restaurant;
  menus?: Menu[];
  productMenu: ProductMenu[];
}

export interface ProductDetail {
  product: Product;
  categories: Category[];
  restaurant: Restaurant;
}
