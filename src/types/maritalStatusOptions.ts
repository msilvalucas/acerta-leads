import { MARITAL_STATUS } from '../types/enums';

export const maritalStatusOptions = [
  { value: MARITAL_STATUS.DEFAULT, label: 'Selecione' },
  { value: MARITAL_STATUS.SINGLE, label: 'Solteiro(a)' },
  { value: MARITAL_STATUS.MARRIED, label: 'Casado(a)' },
  { value: MARITAL_STATUS.DIVORCED, label: 'Divorciado(a)' },
  { value: MARITAL_STATUS.WIDOWER, label: 'Viúvo(a)' },
];
