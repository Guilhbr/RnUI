import {
  GET_POST_COMMENTS_CALL,
  GET_POST_COMMENTS_SUCCESS,
  GET_POST_COMMENTS_ERROR,
  RESET_POST,
} from '../api/constants';

export const getPostComments = () => ({
  type: GET_POST_COMMENTS_CALL,
});

export const getPostCommentsSuccess = comments => ({
  type: GET_POST_COMMENTS_SUCCESS,
  payload: {comments},
});

export const getPostCommentsError = error => ({
  type: GET_POST_COMMENTS_ERROR,
  payload: {error},
});

export const resetPost = () => ({
  type: RESET_POST,
});
