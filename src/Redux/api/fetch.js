import _ from 'lodash';
import {getPostsCall, getPostsSuccess, getPostsError} from '../actions/posts';
import {
  getUserAlbumsCall,
  getUserAlbumsSuccess,
  getUserInfoCall,
  getUserInfoSuccess,
  getUserPostsCall,
  getUserPostsSuccess,
  getUserTodosCall,
  getUserTodosSuccess,
  getUserError,
} from '../actions/user';
import {
  getPostComments,
  getPostCommentsSuccess,
  getPostCommentsError,
} from '../actions/post';
import {
  getPhotosCall,
  getPhotosSuccess,
  getPhotosError,
} from '../actions/photos';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function getData(url, call, success, fail) {
  return dispatch => {
    dispatch(call());
    fetch(`https://jsonplaceholder.typicode.com/${url}`)
      .then(handleErrors)
      .then(response => response.json())
      .then(json => {
        dispatch(success(json));
        return json;
      })
      .catch(error => {
        dispatch(fail(error));
        console.log(error.message);
      });
  };
}

export function getPosts(id) {
  let url = 'posts';
  let call = getPostsCall;
  let success = getPostsSuccess;
  let error = getPostsError;
  if (id) {
    url = `posts?userId=${id}`;
    call = getUserPostsCall;
    success = getUserPostsSuccess;
    error = getUserError;
  }
  return getData(url, call, success, error);
}

export function getUser(id) {
  const url = `users/${id}`;
  const call = getUserInfoCall;
  const success = getUserInfoSuccess;
  const error = getUserError;
  return getData(url, call, success, error);
}

export function getTodos(id) {
  const url = `todos?userId=${id}`;
  const call = getUserTodosCall;
  const success = getUserTodosSuccess;
  const error = getUserError;
  return getData(url, call, success, error);
}

export function getAlbums(id) {
  const url = `albums?userId=${id}`;
  const call = getUserAlbumsCall;
  const success = getUserAlbumsSuccess;
  const error = getUserError;
  return getData(url, call, success, error);
}

export function getComments(id) {
  const url = `posts/${id}/comments`;
  const call = getPostComments;
  const success = getPostCommentsSuccess;
  const error = getPostCommentsError;
  return getData(url, call, success, error);
}

export function getPhotos(id) {
  const url = `photos?albumId=${id}`;
  const call = getPhotosCall;
  const success = getPhotosSuccess;
  const error = getPhotosError;
  return getData(url, call, success, error);
}
