import { Product } from './product';
import { Restaurant } from './restaurant';

export interface Category {
  Id: number;
  name: string;
  restaurants?: Restaurant[];
  products?: Product[];
}

export interface CategoryDetail {
  category: Category;
  products: Product;
  restaurant: Restaurant;
}
