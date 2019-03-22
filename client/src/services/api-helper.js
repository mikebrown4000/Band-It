import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:6969'
});

const updateToken = (token) => {
  localStorage.setItem('authToken', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

export {
    api,
    updateToken
}
