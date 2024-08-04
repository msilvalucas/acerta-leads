import React, { useState } from 'react';
import * as C from './styles';
import Input from '../Input';
import { LeadFilters } from './../../types/lead';

interface FilterLeadProps {
  onFilter: (filters: LeadFilters) => void;
}

export const FilterLead: React.FC<FilterLeadProps> = ({ onFilter }) => {
  const [suid, setSuid] = useState('');
  const [name, setName] = useState('');

  const handleFilter = () => {
    onFilter({ suid, name });
  };

  const handleClear = () => {
    setSuid('');
    setName('');
    onFilter({ suid: '', name: '' });
  };

  return (
    <C.Card>
      <C.Wrapper>
        <Input
          label="CPF"
          type="text"
          mask="999.999.999-99"
          placeholder="Digite o CPF do cliente"
          value={suid}
          onChange={(e) => setSuid(e.target.value)}
        />
        <Input
          label="Nome do cliente"
          type="text"
          placeholder="Digite o nome do cliente"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </C.Wrapper>

      <C.WrapperEnd>
        <C.ButtonClear onClick={handleClear}>Limpar tudo</C.ButtonClear>
        <C.ButtonFilter onClick={handleFilter}>Filtrar</C.ButtonFilter>
      </C.WrapperEnd>
    </C.Card>
  );
};
