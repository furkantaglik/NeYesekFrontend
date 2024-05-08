import { Product } from './product';
import { Restaurant } from './restaurant';
import { User } from './user';

export interface Comment {
  id: number;
  content: string;
  restaurant?: Restaurant;
  product?: Product;
  user: User;
}

export interface CommentDetail {
  comment: Comment;
  restaurant: Restaurant;
  user: User;
}
