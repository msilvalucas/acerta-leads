import styled from 'styled-components';

export const Card = styled.div`
  width: 1082px;
  margin: 0 auto;
  padding: 24px;
  gap: 16px;
  border-radius: 12px;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const WrapperEnd = styled.div`
  display: flex;
  justify-content: end;
  gap: 16px;
`;

export const ButtonFilter = styled.button`
  display: flex;
  width: 120px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background-color: #198cff;
  border: 1px solid #198cff;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
`;

export const ButtonClear = styled.button`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid #198cff;
  background-color: #fff;
  color: #198cff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
`;
