import { Product } from './product';
import { Restaurant } from './restaurant';

export interface Category {
  id: number;
  name: string;
  restaurants?: Restaurant[];
  products?: Product[];
  categoryImage: CategoryImage;
}

export interface CategoryDetail {
  category: Category;
  products: Product;
  restaurant: Restaurant;
  categoryImage: CategoryImage;
}

export interface CategoryImage {
  id: number;
  imagePath: string;
  categoryId: number;
  category: Category;
}
