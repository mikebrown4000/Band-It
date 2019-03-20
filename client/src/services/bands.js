import axios from 'axios';
import { api } from './api-helper';

const fetchBands = async () => {
  const resp = await api.get('/bands');
  return resp.data;
  console.log(resp.data);
};

const fetchBand = async (id) => {
  const resp = await api.get(`/bands/${id}`);
  return resp.data;
}

const updateBand = async (data, id) => {
  const resp = await api.put(`/${id}`, data);
  return resp.data.band
}

const deleteBand = async (data, id) => {
  const resp = await api.delete(`/${id}`);
  return resp.data;
}

const createBand = async (band) => {
  const mkBand = await api.post('/bands', band);
  return mkBand;
}

export {
  fetchBands,
  fetchBand,
  // updateBand,
  // deleteBand,
  createBand
}
