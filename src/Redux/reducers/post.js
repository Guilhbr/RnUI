import {
  GET_POST_COMMENTS_CALL,
  GET_POST_COMMENTS_SUCCESS,
  GET_POST_COMMENTS_ERROR,
  RESET_POST,
} from '../api/constants';

const initialState = {
  error: null,
  loading: false,
  comments: [],
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST_COMMENTS_CALL: {
      return {
        ...state,
        comments: [],
        loading: true,
        error: null,
      };
    }
    case GET_POST_COMMENTS_SUCCESS: {
      const {comments} = action.payload;
      return {
        ...state,
        loading: false,
        comments,
      };
    }
    case GET_POST_COMMENTS_ERROR: {
      const {error} = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    }
    case RESET_POST: {
      return initialState;
    }
    default:
      return state;
  }
}
