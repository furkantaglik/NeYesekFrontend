import { Category } from './category';
import { Favorite } from './favorite';
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
  deliveryTime: number;
  deliveryFee: number;
  minCartAmount: number;
  passwordSalt: string;
  passwordHash: string;
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
  favorites: Favorite[];
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
