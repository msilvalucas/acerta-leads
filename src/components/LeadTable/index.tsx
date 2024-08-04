import React from 'react';
import * as C from './styles';

interface Lead {
  id: string;
  name: string;
  suid: string;
  email: string;
  phone: string;
}

interface LeadTableProps {
  leads: Lead[];
  onEdit: (lead: Lead) => void;
  onDelete: (leadId: string) => void;
}

const ListTable: React.FC<LeadTableProps> = ({ leads, onEdit, onDelete }) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <tr key={lead.id}>
            <td>{lead.name}</td>
            <td>{lead.suid}</td>
            <td>{lead.email}</td>
            <td>{lead.phone}</td>
            <td>
              <button onClick={() => onEdit(lead)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7156 7.51667L12.4823 8.28333L4.9323 15.8333H4.16563V15.0667L11.7156 7.51667ZM14.7156 2.5C14.5073 2.5 14.2906 2.58333 14.1323 2.74167L12.6073 4.26667L15.7323 7.39167L17.2573 5.86667C17.5823 5.54167 17.5823 5.01667 17.2573 4.69167L15.3073 2.74167C15.1406 2.575 14.9323 2.5 14.7156 2.5ZM11.7156 5.15833L2.49896 14.375V17.5H5.62396L14.8406 8.28333L11.7156 5.15833Z"
                    fill="#71727D"
                  />
                </svg>
              </button>
              <button onClick={() => onDelete(lead.id)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00002 15.8333C5.00002 16.75 5.75002 17.5 6.66669 17.5H13.3334C14.25 17.5 15 16.75 15 15.8333V5.83333H5.00002V15.8333ZM6.66669 7.5H13.3334V15.8333H6.66669V7.5ZM12.9167 3.33333L12.0834 2.5H7.91669L7.08335 3.33333H4.16669V5H15.8334V3.33333H12.9167Z"
                    fill="#71727D"
                  />
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </C.Table>
  );
};

export default ListTable;
