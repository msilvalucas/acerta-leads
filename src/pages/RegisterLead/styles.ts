import styled from 'styled-components';

export const Container = styled.div`
  width: 1082px;
  margin: 0 auto;
  padding: 24px;
  gap: 16px;
  border-radius: 12px;
`;

export const Title = styled.h1`
  color: #252433;
  font-size: 24px;
  font-weight: 600px;
  line-height: 120%;
  font-style: normal;
  margin: 24px 0;
`;

export const Card = styled.div`
  display: flex;
  max-width: 1082px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  background-color: #fff;
`;

export const WrapperEllipse = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const Divider = styled.div`
  width: 220px;
  height: 2px;
  background: #ccc;
  margin: 0 8px;
  align-self: center;
`;

interface EllipseProps {
  currentStep?: boolean;
  completed?: boolean;
}

export const Ellipse = styled.div<EllipseProps>`
  width: 32px;
  height: 32px;
  background: ${(props) =>
    props.completed ? '#29A33D' : props.currentStep ? '#FF9933' : '#FFF'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  outline: ${(props) =>
    props.currentStep
      ? '2px solid #FF9933'
      : !props.completed
      ? '2px solid #B9C2CB'
      : ''};
  outline-offset: ${(props) => (props.currentStep ? '2px' : 'none')};
`;

export const ButtonWrapper = styled.div`
  border: 1px solid;
`;

export const ButtonCancel = styled.div`
  border: 1px solid;
`;

export const ButtonNextStep = styled.div`
  border: 1px solid;
`;
