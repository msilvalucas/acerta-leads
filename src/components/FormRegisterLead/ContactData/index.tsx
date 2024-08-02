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
}

function ContactData(props: FormikProps<FormValues> & Props) {
  const { values, handleChange, handleBlur, handleSubmit } = props;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <C.Form onSubmit={handleSubmit}>
      <C.ContactInfo>
        <C.Title>Dados de Contato</C.Title>
      </C.ContactInfo>

      <C.Wrapper>
        <Input
          type="email"
          label="E-mail"
          placeholder="Digite o e-mail do cliente"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          name="email"
        />
        <Input
          type="tel"
          label="Telefone"
          mask="(99) 99999-9999"
          placeholder="Digite o telefone do cliente"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone}
          name="phone"
        />
      </C.Wrapper>

      <C.WrapperEnd>
        <C.ButtonCancel type="button" onClick={handleClick}>
          Cancelar
        </C.ButtonCancel>
        <C.ButtonNextStep type="submit">Avançar</C.ButtonNextStep>
      </C.WrapperEnd>
    </C.Form>
  );
}

const EnhancedFormContactData = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({
    email: '',
    phone: '',
  }),
  handleSubmit: (values, { props: { onSubmit } }) => {
    console.log(values);
    onSubmit(values);
  },
})(ContactData);

export default EnhancedFormContactData;
