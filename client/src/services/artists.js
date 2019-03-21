import axios from 'axios';
import { api, updateToken } from './api-helper';

const fetchArtists = async () => {
  const resp = await api.get('/artists');
  return resp.data;
};

const fetchArtist = async (id) => {
  const resp = await api.get(`/artists/${id}`);
  return resp.data;
}

const updateArtist = async (data, id) => {
  const resp = await api.put(`/${id}`, data);
  return resp.data.artist
}

const updateArtistBand = async (bandId) => {
  const resp = await api.post(`/artists/bands/${bandId}`)
  return resp.data.id
}

const deleteArtist = async (data, id) => {
  const resp = await api.delete(`/${id}`);
  return resp.data;
}

//use update token when building login route as well
const createArtist = async (artist) => {
  const mkArtist = await api.post('/artists', artist);
  console.log(mkArtist.data);
  await updateToken(mkArtist.data.token);
  return mkArtist.data;
}

const loginArtist = async (loginData) => {
  const artist = await api.post('/artists/login', loginData);
  updateToken(artist.data.token);
  return artist.data
}

export {
  fetchArtists,
  fetchArtist,
  updateArtist,
  deleteArtist,
  createArtist,
  loginArtist,
  updateArtistBand
}
