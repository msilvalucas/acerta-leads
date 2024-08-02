import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  label {
    display: block;
    margin-bottom: 4px;
  }

  select {
    display: block;
    border: 1px solid #dce1e5;
    width: 100%;
    padding: 0.75rem;
    border-radius: 4px;
    background-color: #fff;
    transition: 0.2s;
    outline: none;
    margin-bottom: 1em;
  }

  input[type='checkbox'] {
    display: inline-block;
    width: auto;
    margin: 0 0.5rem 0 0;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
    border-color: #198cff;
    background-color: #f5f6fa;
    box-shadow: 0 0 0 3px #198cff;
  }
`;
