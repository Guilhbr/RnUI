import {
  GET_POSTS_CALL,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  RESET_POSTS,
} from '../api/constants';

export const getPostsCall = () => ({
  type: GET_POSTS_CALL,
});

export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  payload: {posts},
});

export const getPostsError = error => ({
  type: GET_POSTS_ERROR,
  payload: {error},
});

export const resetPosts = () => ({
  type: RESET_POSTS,
});
