import axios from 'axios';
import { api, updateToken } from './api-helper';

const fetchComments = async (id) => {
  const resp = await api.get(`/comments/by/${id}`);
  return resp.data;
};


// const updateComment = async (data, id) => {
//   const resp = await api.put(`/${id}`, data);
//   return resp.data.comment
// }
//
// const deleteComment = async (data, id) => {
//   const resp = await api.delete(`/${id}`);
//   return resp.data;
// }

//
const createComment = async (content) => {
  const mkComment = await api.post('/comments', content);
  // await updateToken(mkComment.data.token);
  return mkComment.data;
}

export {
  fetchComments,
  // updateComment,
  // deleteComment,
  createComment
}
