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
  restaurantImage: RestaurantImage;
}

export interface RestaurantDetail {
  restaurant: Restaurant;
  comments: Comment[];
  menus: Menu[];
  products: Product[];
  categories: Category[];
  restaurantImage: RestaurantImage | null;
}

export interface RestaurantImage {
  id: number;
  imagePath: string;
  restaurantId: number;
  restaurant: Restaurant;
}

export interface RestaurantOperationClaim {
  id: number;
  restaurant: Restaurant;
  operationClaim: OperationClaim;
}
