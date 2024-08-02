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
              <button onClick={() => onEdit(lead)}>Edit</button>
              <button onClick={() => onDelete(lead.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </C.Table>
  );
};

export default ListTable;
