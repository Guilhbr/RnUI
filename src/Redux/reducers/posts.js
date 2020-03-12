import {
  GET_POSTS_CALL,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  RESET_POSTS,
} from '../api/constants';
import _ from 'lodash';

const initialState = {
  error: null,
  loading: false,
  posts: [],
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_CALL: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case GET_POSTS_SUCCESS: {
      const {posts} = action.payload;
      const uniqPosts = _.uniqBy(posts, 'id');
      return {
        ...state,
        loading: false,
        posts: uniqPosts,
      };
    }
    case GET_POSTS_ERROR: {
      const {error} = action.payload;
      return {
        ...state,
        loading: false,
        posts: [],
        error,
      };
    }
    case RESET_POSTS: {
      return initialState;
    }
    default:
      return state;
  }
}
