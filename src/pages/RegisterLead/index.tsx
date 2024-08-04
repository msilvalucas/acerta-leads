import React, { useEffect, useState } from 'react';
import EnhancedFormPersonalData from '../../components/FormRegisterLead/PersonalData';
import EnhancedFormContactData from '../../components/FormRegisterLead/ContactData';
import { StepperProvider, useStepper } from '../../hooks/useStepper';
import GlobalStyle from '../../styles/GlobalStyles';
import withProvider from '../../utils/withProvider';
import * as C from './styles';
import Logo from './../../assets/logo.svg';
import { Lead } from '../../types/lead';
import { createLead, updateLead, fetchLeadById } from '../../services/leads';
import { toast, ToastContainer } from 'react-toastify';

import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

const generateId = () => uuidv4();

const steps = [
  { component: EnhancedFormPersonalData, label: '1' },
  { component: EnhancedFormContactData, label: '2' },
];

function RegisterLead() {
  const { currentStep, completeStep, nextStep, isStepCompleted } = useStepper();
  const StepComponent = steps[currentStep].component;

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [values, setValues] = useState<Lead>({
    id: generateId(),
    maritalStatus: undefined,
    name: '',
    nameSpouse: '',
    suid: '',
    email: '',
    phone: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchLeadById(id)
        .then((lead) => {
          setValues(lead);
          setLoading(false);
        })
        .catch((error) => {
          toast.error('Erro ao carregar lead: ' + error.message);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleStepSubmit = async (newValues: Partial<Lead>) => {
    setValues((prevValues) => {
      const updatedValues = { ...prevValues, ...newValues };
      if (currentStep === steps.length - 1) {
        if (id) {
          updateLead(id, updatedValues)
            .then(() => {
              toast.success('Lead atualizado com sucesso!');
              setTimeout(() => navigate('/'), 3500);
            })
            .catch((error) => {
              toast.error('Erro ao atualizar lead: ' + error.message);
            });
        } else {
          createLead(updatedValues)
            .then(() => {
              toast.success('Lead cadastrado com sucesso!');
              setTimeout(() => navigate('/'), 3500);
            })
            .catch((error) => {
              toast.error('Erro ao cadastrar lead: ' + error.message);
            });
        }
      } else {
        completeStep();
        nextStep();
      }
      return updatedValues;
    });
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <C.Container>
      <GlobalStyle />
      <ToastContainer />
      <Logo />
      <C.Title>{id ? 'Editar Lead' : 'Cadastro de Leads'}</C.Title>
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
