// src/pages/RegisterLead/index.tsx
import React, { useState } from 'react';
import EnhancedFormPersonalData from '../../components/FormRegisterLead/PersonalData';
import EnhancedFormContactData from '../../components/FormRegisterLead/ContactData';
import { StepperProvider, useStepper } from '../../hooks/useStepper';
import GlobalStyle from '../../styles/GlobalStyles';
import withProvider from '../../utils/withProvider';
import * as C from './styles';
import { Lead } from '../../types/lead';
import { createLead } from '../../services/leads';
import { toast, ToastContainer } from 'react-toastify';

import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const generateId = () => uuidv4();

const steps = [
  { component: EnhancedFormPersonalData, label: '1' },
  { component: EnhancedFormContactData, label: '2' },
];

function RegisterLead() {
  const { currentStep, completeStep, nextStep, isStepCompleted } = useStepper();
  const StepComponent = steps[currentStep].component;

  const navigate = useNavigate();

  const [values, setValues] = useState<Lead>({
    id: generateId(),
    maritalStatus: undefined,
    name: '',
    nameSpouse: '',
    suid: '',
    email: '',
    phone: '',
  });

  const handleStepSubmit = async (newValues: Partial<Lead>) => {
    setValues((prevValues) => {
      const updatedValues = { ...prevValues, ...newValues };
      if (currentStep === steps.length - 1) {
        createLead(updatedValues)
          .then(() => {
            toast.success('Lead cadastrado com sucesso!');
            navigate('/');
          })
          .catch((error) => {
            toast.error('Erro ao cadastrar lead: ' + error.message);
          });
      } else {
        completeStep();
        nextStep();
      }
      return updatedValues;
    });
  };

  return (
    <C.Container>
      <GlobalStyle />
      <ToastContainer />
      <C.Title>Cadastro de Leads</C.Title>
      <C.Card>
        <C.WrapperEllipse>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <C.Ellipse
                completed={isStepCompleted(index)}
                currentStep={currentStep === index}
              >
                {step.label}
              </C.Ellipse>
              {index < steps.length - 1 && <C.Divider />}
            </React.Fragment>
          ))}
        </C.WrapperEllipse>

        <StepComponent
          values={values}
          setValues={(newValues) =>
            setValues((prev) => ({ ...prev, ...newValues }))
          }
          onSubmit={handleStepSubmit}
        />
      </C.Card>
    </C.Container>
  );
}

export default withProvider(RegisterLead, StepperProvider);
