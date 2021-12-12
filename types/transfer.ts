import { Account } from './account';

export interface Transfer {
  id?: number;
  to?: Account;
  from?: Account;
  amount?: number;
  date?: Date;
  label?: string;
}
