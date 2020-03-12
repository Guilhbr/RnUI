import {
  GET_PHOTOS_CALL,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_ERROR,
  RESET_PHOTOS,
} from '../api/constants';

export const getPhotosCall = () => ({
  type: GET_PHOTOS_CALL,
});

export const getPhotosSuccess = photos => ({
  type: GET_PHOTOS_SUCCESS,
  payload: {photos},
});

export const getPhotosError = error => ({
  type: GET_PHOTOS_ERROR,
  payload: {error},
});

export const resetPost = () => ({
  type: RESET_PHOTOS,
});
