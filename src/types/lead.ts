import { MARITAL_STATUS } from './enums';

export type Lead = {
  id: string;
  name: string;
  suid: string;
  maritalStatus?: MARITAL_STATUS;
  nameSpouse?: string;
  email: string;
  phone: string;
};
