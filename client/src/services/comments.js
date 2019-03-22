import axios from 'axios';
import { api, updateToken } from './api-helper';

const fetchComments = async (id) => {
  const comments = await api.get(`/comments/to/${id}`);
  console.log(comments);
  return comments.data;
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

const createComment = async (content) => {
  const mkComment = await api.post('/comments', content);
  return mkComment.data;
}

export {
  fetchComments,
  // updateComment,
  // deleteComment,
  createComment
}
