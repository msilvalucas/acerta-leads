import axios from 'axios';
import { API_URL } from '../api';
import { Lead } from '../../types/lead';

export interface LeadFilters {
  cpf?: string;
  name?: string;
}

export const fetchLeads = async (filters: LeadFilters) => {
  const response = await axios.get<Lead[]>(API_URL, {
    params: filters,
  });
  return response.data;
};

export const fetchLeadById = async (id: string) => {
  const response = await axios.get<Lead>(`${API_URL}/${id}`);
  return response.data;
};

export const createLead = async (lead: Lead) => {
  const response = await axios.post<Lead>(API_URL, lead);
  return response.data;
};

export const updateLead = async (id: string, lead: Lead) => {
  const response = await axios.put<Lead>(`${API_URL}/${id}`, lead);
  return response.data;
};

export const deleteLead = async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
};
