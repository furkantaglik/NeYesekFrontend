import { OperationClaim } from './operationClaim';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  telNo: string;
  adress: String;
  status: boolean;
  comments?: Comment[];
}

export interface UserDetail {
  user: User;
  comments: Comment;
}

export interface UserOperationClaim {
  id: number;
  user: User;
  operationClaim: OperationClaim;
}
