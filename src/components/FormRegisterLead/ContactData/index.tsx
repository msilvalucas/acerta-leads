import React from 'react';
import { FormikProps, withFormik } from 'formik';
import * as C from './styles';
import Input from '../../Input';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  email: string;
  phone: string;
}

interface Props {
  onSubmit: (data: FormValues) => void;
  values: FormValues;
  setValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

const ContactData = (props: FormikProps<FormValues> & Props) => {
  const { values, handleChange, handleBlur, handleSubmit } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <C.Form onSubmit={handleSubmit}>
      <C.Wrapper>
        <Input
          type="text"
          label="Email"
          placeholder="Digite o e-mail do cliente"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email || ''}
          name="email"
        />

        <Input
          type="text"
          label="Telefone"
          placeholder="Digite o telefone do cliente"
          mask="(99) 99999-9999"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone || ''}
          name="phone"
        />
      </C.Wrapper>

      <C.WrapperEnd>
        <C.ButtonCancel onClick={handleClick}>Cancelar</C.ButtonCancel>
        <C.ButtonNextStep type="submit">Cadastrar</C.ButtonNextStep>
      </C.WrapperEnd>
    </C.Form>
  );
};

const EnhancedFormContactData = withFormik<Props, FormValues>({
  handleSubmit: (values, { props: { onSubmit } }) => {
    onSubmit(values);
  },
  mapPropsToValues: ({ values }) => ({
    email: values.email || '',
    phone: values.phone || '',
  }),
})(ContactData);

export default EnhancedFormContactData;
