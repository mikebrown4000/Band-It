import axios from 'axios';
import { api } from './api-helper';

const fetchArtists = async () => {
  const resp = await api.get(`${BASE_URL}`);
  return resp.data;
};

// const updateArtist = async (data, id) => {
//   const resp = await api.put(`${BASE_URL}/${id}`, data);
//   return resp.data.artist
// }
//
// const deleteArtist = async (data, id) => {
//   const resp = await api.delete(`${BASE_URL}/${id}`);
//   return resp.data;
// }

export {
  fetchArtists,
  updateArtist,
  deleteArtist
}
