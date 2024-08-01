import React from 'react';

import * as C from './styles';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
};

const Input = ({ label, ...props }: InputProps) => {
  return (
    <C.Container>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="text" {...props} />
    </C.Container>
  );
};

export default Input;
