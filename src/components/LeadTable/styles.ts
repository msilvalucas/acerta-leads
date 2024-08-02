import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ddd;

  th,
  td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f4f5f7;
  }

  tr:nth-child(even) {
    background-color: #ff;
  }

  button {
    margin-right: 10px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
  }

  button:hover {
    background-color: #0056b3;
  }
`;
