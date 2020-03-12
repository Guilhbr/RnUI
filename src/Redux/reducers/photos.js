import {
  GET_PHOTOS_CALL,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_ERROR,
  RESET_PHOTOS,
} from '../api/constants';

const initialState = {
  error: null,
  loading: false,
  photos: [],
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_CALL: {
      return {
        ...state,
        photos: [],
        loading: true,
        error: null,
      };
    }
    case GET_PHOTOS_SUCCESS: {
      const {photos} = action.payload;
      return {
        ...state,
        loading: false,
        photos,
      };
    }
    case GET_PHOTOS_ERROR: {
      const {error} = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    }
    case RESET_PHOTOS: {
      return initialState;
    }
    default:
      return state;
  }
}
