import axios from 'axios';

import { Lead } from '../../types/lead';
import { API_URL } from '../api';

export const fetchLeads = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar leads:', error);
    throw error;
  }
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
