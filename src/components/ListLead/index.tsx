import React, { useEffect, useState } from 'react';
import LeadTable from './../LeadTable';
import { Lead, LeadFilters } from '../../types/lead';
import * as C from './styles';
import { toast } from 'react-toastify';
import { deleteLead, fetchLeads } from '../../services/leads';
import { FilterLead } from '../FilterLead';
import { useNavigate } from 'react-router-dom';

const ListLead: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<LeadFilters>({ suid: '', name: '' });

  const navigate = useNavigate();

  const loadLeads = async (filters: LeadFilters) => {
    try {
      setLoading(true);
      const leadsData = await fetchLeads(filters);
      setLeads(leadsData);
    } catch (err) {
      setError('Erro ao listar leads.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeads(filters);
  }, [filters]);

  const handleFilter = (newFilters: LeadFilters) => {
    setFilters(newFilters);
  };

  const handleEdit = (lead: Lead) => {
    navigate(`/register-lead/${lead.id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteLead(id);
      setLeads((prevLeads) => prevLeads.filter((lead) => lead.id !== id));
      toast.success('Lead excluído!');
    } catch (error) {
      toast.error('Erro ao deletar o Lead!');
    }
  };

  if (loading)
    return (
      <C.Container>
        <p>Carregando dados.</p>
      </C.Container>
    );
  if (error)
    return (
      <C.Container>
        <p>Erro ao carregar dados.</p>
      </C.Container>
    );

  return (
    <>
      <FilterLead onFilter={handleFilter} />
      <C.Container>
        {leads.length === 0 ? (
          <p>Nenhum lead cadastrado</p>
        ) : (
          <LeadTable
            leads={leads}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </C.Container>
    </>
  );
};

export default ListLead;
