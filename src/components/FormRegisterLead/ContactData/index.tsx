import React from 'react';
import { FormikProps, withFormik } from 'formik';
import * as Yup from 'yup';
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
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const isButtonDisabled = () => {
    return isSubmitting || !values.email || !values.phone;
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
          error={touched.email ? errors.email : undefined}
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
          error={touched.phone ? errors.phone : undefined}
        />
      </C.Wrapper>

      <C.WrapperEnd>
        <C.ButtonCancel onClick={handleClick}>Cancelar</C.ButtonCancel>
        <C.ButtonNextStep type="submit" disabled={isButtonDisabled()}>
          Cadastrar
        </C.ButtonNextStep>
      </C.WrapperEnd>
    </C.Form>
  );
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: Yup.string()
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido')
    .required('Telefone é obrigatório'),
});

const EnhancedFormContactData = withFormik<Props, FormValues>({
  validationSchema: validationSchema,
  handleSubmit: async (values, { props: { onSubmit }, setSubmitting }) => {
    try {
      await onSubmit(values);
    } finally {
      setTimeout(() => {
        setSubmitting(false);
      }, 3500);
    }
  },
  mapPropsToValues: ({ values }) => ({
    email: values.email || '',
    phone: values.phone || '',
  }),
})(ContactData);

export default EnhancedFormContactData;
