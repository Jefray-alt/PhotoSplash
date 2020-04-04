import {
  GET_PHOTOS,
  GET_SEARCHED_PHOTO,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCHED_MORE_PHOTO
} from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  photos: [],
  current: null,
  search: null,
  page: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        loading: false
      };
    case GET_SEARCHED_PHOTO:
      return {
        ...state,
        photos: action.payload.collection,
        search: action.payload.text,
        loading: false,
        page: 1
      };
    case SEARCHED_MORE_PHOTO:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        page: state.page + 1
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
