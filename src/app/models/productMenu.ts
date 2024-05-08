import { Menu } from './menu';
import { Product } from './product';

export interface ProductMenu {
  menuId: number;
  productId: number;
  menu: Menu;
  product: Product;
}
