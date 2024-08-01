import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 1082px;
  margin: 0 auto;
  padding: 32px 0 37px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  h2 {
    color: #252433;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button-newlead {
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
  }
`;
