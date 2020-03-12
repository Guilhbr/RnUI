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
import _ from 'lodash';

const initialState = {
  user: [],
  albums: [],
  todos: [],
  posts: [],
  loading: false,
  tabLoading: true,
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO_CALL: {
      return {
        ...state,
        user: {},
        loading: true,
        error: null,
      };
    }
    case GET_USER_INFO_SUCCESS: {
      const {user} = action.payload;
      return {
        ...state,
        loading: false,
        user: user,
      };
    }
    case GET_USER_POSTS_CALL: {
      return {
        ...state,
        tabLoading: true,
        error: null,
      };
    }
    case GET_USER_POSTS_SUCCESS: {
      const {posts} = action.payload;
      const uniqPosts = _.uniqBy(posts, 'id');
      return {
        ...state,
        tabLoading: false,
        posts: uniqPosts,
      };
    }
    case GET_USER_TODOS_CALL: {
      return {
        ...state,
        tabLoading: true,
        error: null,
      };
    }
    case GET_USER_TODOS_SUCCESS: {
      const {todos} = action.payload;
      const uniqTodos = _.uniqBy(todos, 'id');
      return {
        ...state,
        tabLoading: false,
        todos: uniqTodos,
      };
    }
    case GET_USER_ALBUMS_CALL: {
      return {
        ...state,
        tabLoading: true,
        error: null,
      };
    }
    case GET_USER_ALBUMS_SUCCESS: {
      const {albums} = action.payload;
      const uniqAlbums = _.uniqBy(albums, 'id');
      return {
        ...state,
        loading: false,
        albums: uniqAlbums,
      };
    }
    case GET_USER_ERROR: {
      const {error} = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    }
    case RESET_USER: {
      return initialState;
    }
    default:
      return state;
  }
}
