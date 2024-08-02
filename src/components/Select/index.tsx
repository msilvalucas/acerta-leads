import React from 'react';

import * as C from './styles';
import { MARITAL_STATUS } from '../../models';

type SelectProps = React.ComponentProps<'select'> & {
  label: string;
  options: typeof MARITAL_STATUS;
  defaultValue?: string;
};

const Select = ({ label, options, ...props }: SelectProps) => {
  return (
    <C.Container>
      <label htmlFor={label}>{label}</label>
      <select id={label} name={label} {...props}>
        {Object.values(options).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </C.Container>
  );
};

export default Select;
