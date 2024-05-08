import { Category } from './category';
import { Menu } from './menu';
import { OperationClaim } from './operationClaim';
import { Product } from './product';

export interface Restaurant {
  id: number;
  name: string;
  email: string;
  adress: string;
  telNo: string;
  status: boolean;
  comments?: Comment[];
  categories?: Category[];
  products?: Product[];
  menus?: Menu[];
}

export interface RestaurantDetail {
  restaurant: Restaurant;
  comments: Comment[];
  menus: Menu[];
  products: Product[];
  categories: Category[];
}

export interface RestaurantOperationClaim {
  id: number;
  restaurant: Restaurant;
  operationClaim: OperationClaim;
}
