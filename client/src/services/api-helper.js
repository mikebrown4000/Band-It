import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sleepy-meadow-80774.herokuapp.com/'
});

const updateToken = (token) => {
  localStorage.setItem('authToken', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

export {
    api,
    updateToken
}
