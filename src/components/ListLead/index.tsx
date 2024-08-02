import React, { useEffect, useState } from 'react';
import LeadTable from './../LeadTable';
import { Lead } from '../../types/lead';
import * as C from './styles';
import { toast } from 'react-toastify';
import { deleteLead, fetchLeads } from '../../services/leads';

const ListLead: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLeads = async () => {
      try {
        setLoading(true);
        const leadsData = await fetchLeads();
        setLeads(leadsData);
      } catch (err) {
        setError('Failed to load leads.');
      } finally {
        setLoading(false);
      }
    };

    loadLeads();
  }, []);

  const handleEdit = (lead: Lead) => {
    console.log('Edit lead:', lead);
    // Adicione a lógica para editar o lead
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
    <C.Container>
      {leads.length === 0 ? (
        <p>Nenhum lead cadastrado</p>
      ) : (
        <LeadTable leads={leads} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </C.Container>
  );
};

export default ListLead;
