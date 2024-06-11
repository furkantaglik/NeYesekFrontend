import { Favorite } from './favorite';
import { OperationClaim } from './operationClaim';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  telNo: string;
  adress: String;
  status: boolean;
  passwordSalt: string;
  passwordHash: string;
  comments?: Comment[];
}

export interface UserDetail {
  user: User;
  comments: Comment;
  favorites: Favorite[];
}

export interface UserOperationClaim {
  id: number;
  user: User;
  operationClaim: OperationClaim;
}
