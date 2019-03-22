import axios from 'axios';
import { api, updateToken } from './api-helper';

const verifyToken = async () => {
  const token = localStorage.getItem('authToken');
  if (token == null) {
    return false;
  } else {
    try {
      const res = await api.get('/artists/verify', {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      updateToken(token);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}

const verifyOwnership = async (id) => {
  const token = localStorage.getItem('authToken');
  if (token == null) {
    return false;
  } else {
    try {
      const res = await api.get('/artists/verify', {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      if (res.data.artist.id === id) {
        updateToken(token);
        return true
      }
      return false;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}

const verifyMembership = async (id) => {
  const token = localStorage.getItem('authToken');
  if (token == null) {
    return false;
  } else {
    try {
      const res = await api.get('/artists/verify', {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      if (res.data.artist.bandId === id) {
        return true
      }
      return false;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}

const fetchArtists = async () => {
  const resp = await api.get('/artists');
  return resp.data;
};

const fetchArtist = async (id) => {
  const resp = await api.get(`/artists/${id}`);
  return resp.data;
}

const fetchMembers = async (id) => {
  const resp = await api.get(`/artists/bands/members/${id}`);
  return resp.data;
}

const updateArtist = async (data, id) => {
  const resp = await api.put(`/artists/${id}`, data);
  return resp.data
}

const updateArtistBand = async (bandId) => {
  const resp = await api.post(`/artists/bands/${bandId}`)
  return resp.data.id
}

//use update token when building login route as well
const createArtist = async (artist) => {
  const mkArtist = await api.post('/artists', artist);
  await updateToken(mkArtist.data.token);
  return mkArtist.data;
}

const deleteArtist = async (id) => {
  const delArtist = await api.delete(`/artists/${id}`);
  return delArtist.data
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
  verifyToken,
  verifyOwnership,
  verifyMembership,
  updateArtistBand,
  fetchMembers,
}
