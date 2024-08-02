import React from 'react';
import InputMask from 'react-input-mask';
import * as C from './styles';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  mask?: string;
};

const Input: React.FC<InputProps> = ({ label, mask, ...props }) => {
  return (
    <C.Container>
      <label htmlFor={label}>{label}</label>
      {mask ? (
        <>
          <InputMask id={label} name={label} mask={mask} {...props} />
        </>
      ) : (
        <>
          <input id={label} name={label} {...props} />
        </>
      )}
    </C.Container>
  );
};

export default Input;
