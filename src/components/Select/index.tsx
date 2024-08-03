import React from 'react';
import * as C from './styles';

type Option = {
  value: string;
  label: string;
};

type SelectProps = React.ComponentProps<'select'> & {
  label: string;
  options: Option[]; // Atualizado para ser um array de opções
  defaultValue?: string;
};

const Select = ({ label, options, ...props }: SelectProps) => {
  return (
    <C.Container>
      <label htmlFor={label}>{label}</label>
      <select id={label} name={label} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </C.Container>
  );
};

export default Select;
