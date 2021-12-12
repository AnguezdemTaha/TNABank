import { User } from './user';

export interface Account {
  id?: number;
  accountNumber?: number;
  sold?: number;
  movementAmount?: number;
  movementDate?: Date;
  label?: string;
  user?: User;
}
