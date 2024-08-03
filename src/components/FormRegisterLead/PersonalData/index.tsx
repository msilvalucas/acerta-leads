import React from 'react';
import { FormikProps, withFormik } from 'formik';
import * as C from './styles';
import Input from '../../Input';
import Select from '../../Select';
import { useNavigate } from 'react-router-dom';
import { MdPersonOutline } from 'react-icons/md';
import { MARITAL_STATUS } from '../../../types/enums';
import { maritalStatusOptions } from '../../../types/maritalStatusOptions';

interface FormValues {
  id?: string;
  name?: string;
  email?: string;
  suid?: string;
  maritalStatus?: MARITAL_STATUS;
  nameSpouse?: string;
}

interface Props {
  onSubmit: (data: FormValues) => void;
  values: FormValues;
  setValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

const PersonalData = (props: Props & FormikProps<FormValues>) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
  } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const handleMaritalStatusChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedMaritalStatus = event.target.value as MARITAL_STATUS;
    setFieldValue('maritalStatus', selectedMaritalStatus);

    if (selectedMaritalStatus !== MARITAL_STATUS.MARRIED) {
      setFieldValue('nameSpouse', '');
    }
  };

  const isButtonDisabled = () => {
    return (
      !values.name ||
      !values.suid ||
      !values.maritalStatus ||
      (values.maritalStatus === MARITAL_STATUS.MARRIED && !values.nameSpouse) ||
      Object.keys(errors).length > 0
    );
  };

  return (
    <C.Form onSubmit={handleSubmit}>
      <C.ContactInfo>
        <MdPersonOutline color="#FF9933" size={24} />
        <C.Title>Dados pessoais</C.Title>
      </C.ContactInfo>

      <C.Wrapper>
        <Input
          type="text"
          label="CPF"
          mask="999.999.999-99"
          placeholder="Digite o CPF do cliente"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.suid}
          name="suid"
        />
        {touched.suid && errors.suid && <span>{errors.suid}</span>}

        <Input
          type="text"
          label="Nome do cliente"
          placeholder="Digite o nome do cliente"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          name="name"
        />
        {touched.name && errors.name && <span>{errors.name}</span>}
      </C.Wrapper>

      <C.Wrapper>
        <Select
          label="Estado Civil"
          options={maritalStatusOptions}
          onChange={handleMaritalStatusChange}
          value={values.maritalStatus}
        />

        {touched.maritalStatus && errors.maritalStatus && (
          <span>{errors.maritalStatus}</span>
        )}

        <Input
          type="text"
          label="Nome do cônjuge"
          placeholder="Digite o nome do cônjuge"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.nameSpouse}
          name="nameSpouse"
          disabled={values.maritalStatus !== MARITAL_STATUS.MARRIED}
        />
        {touched.nameSpouse && errors.nameSpouse && (
          <span>{errors.nameSpouse}</span>
        )}
      </C.Wrapper>

      <C.WrapperEnd>
        <C.ButtonCancel onClick={handleClick}>Cancelar</C.ButtonCancel>
        <C.ButtonNextStep type="submit" disabled={isButtonDisabled()}>
          Avançar
        </C.ButtonNextStep>
      </C.WrapperEnd>
    </C.Form>
  );
};

const EnhancedFormPersonalData = withFormik<Props, FormValues>({
  handleSubmit: (values, { props: { onSubmit } }) => {
    onSubmit(values);
  },
  mapPropsToValues: ({ values }) => ({
    maritalStatus: values.maritalStatus,
    name: values.name,
    nameSpouse: values.nameSpouse,
    suid: values.suid,
  }),
})(PersonalData);

export default EnhancedFormPersonalData;
