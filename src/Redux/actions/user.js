import {
  GET_USER_INFO_CALL,
  GET_USER_INFO_SUCCESS,
  GET_USER_POSTS_CALL,
  GET_USER_POSTS_SUCCESS,
  GET_USER_TODOS_CALL,
  GET_USER_TODOS_SUCCESS,
  GET_USER_ALBUMS_CALL,
  GET_USER_ALBUMS_SUCCESS,
  GET_USER_ERROR,
  RESET_USER,
} from '../api/constants';

export const getUserInfoCall = () => ({
  type: GET_USER_INFO_CALL,
});

export const getUserInfoSuccess = user => ({
  type: GET_USER_INFO_SUCCESS,
  payload: {user},
});

export const getUserPostsCall = () => ({
  type: GET_USER_POSTS_CALL,
});

export const getUserPostsSuccess = posts => ({
  type: GET_USER_POSTS_SUCCESS,
  payload: {posts},
});

export const getUserTodosCall = () => ({
  type: GET_USER_TODOS_CALL,
});

export const getUserTodosSuccess = todos => ({
  type: GET_USER_TODOS_SUCCESS,
  payload: {todos},
});

export const getUserAlbumsCall = () => ({
  type: GET_USER_ALBUMS_CALL,
});

export const getUserAlbumsSuccess = albums => ({
  type: GET_USER_ALBUMS_SUCCESS,
  payload: {albums},
});

export const getUserError = error => ({
  type: GET_USER_ERROR,
  payload: {error},
});

export const resetUser = () => ({
  type: RESET_USER,
});
