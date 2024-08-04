import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface TitleProps {
  fontWeight?: string;
}

export const Title = styled.h1<TitleProps>`
  color: #252433;
  font-size: 20px;
  font-weight: ${(props) => props.fontWeight || '600px'};
  line-height: 120%;
  font-style: normal;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
`;

export const WrapperEnd = styled.div`
  display: flex;
  justify-content: end;
  gap: 16px;
  margin-bottom: 16px;
`;

export const ButtonNextStep = styled.button`
  display: flex;
  width: 120px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background-color: #198cff;
  border: 1px solid #198cff;
  cursor: pointer;
  outline: none;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;

  &:disabled {
    opacity: 0.6;
  }
`;

export const ButtonCancel = styled.button`
  display: flex;
  width: 120px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid #71727d;
  background-color: #fff;
  cursor: pointer;
  outline: none;
  color: #71727d;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
