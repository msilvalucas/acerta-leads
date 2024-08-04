import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1082px;
  margin: 0 auto;
  padding: 32px 0 37px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const Title = styled.h2`
  color: #252433;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonNewLead = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #198cff;
  background-color: #fff;
  color: #198cff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;

  &:hover {
    background-color: #214d74;
    border: 1px solid #214d74;
    transition: all 0.3s ease-out;
  }
`;
