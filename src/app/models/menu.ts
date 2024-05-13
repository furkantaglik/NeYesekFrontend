import { Product } from './product';
import { ProductMenu } from './productMenu';
import { Restaurant } from './restaurant';

export interface Menu {
  id: number;
  name: string;
  description: string;
  totalPrice: number;
  restaurant: Restaurant;
  products?: Product[];
  productMenu: ProductMenu[];
  menuImage: MenuImage;
}

export interface MenuDetail {
  products: Product[];
  restaurant: Restaurant;
  menu: Menu;
  menuImage: MenuImage;
}

export interface MenuImage {
  id: number;
  imagePath: string;
  menuId: number;
  menu: Menu;
}
