import { Restaurant } from './restaurant';
import { User } from './user';

export interface Favorite {
  id: number;
  user: User;
  restaurant: Restaurant;
}

export interface FavoriteDetail {
  user: User;
  restaurant: Restaurant;
}
