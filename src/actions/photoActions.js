import {
  GET_PHOTOS,
  GET_SEARCHED_PHOTO,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCHED_MORE_PHOTO
} from '../actions/types';

export const getPhotos = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      `https://api.unsplash.com/photos/random?count=9&client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ACCESS_KEY}`
    );
    const data = await res.json();

    dispatch({
      type: GET_PHOTOS,
      payload: data
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchPhoto = (text, page) => async dispatch => {
  try {
    const res = await fetch(
      `https://api.unsplash.com//search/photos?query=${text}&per_page=9&page=${page}&client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ACCESS_KEY}`
    );
    const data = await res.json();

    const collection = data.results;

    dispatch({
      type: GET_SEARCHED_PHOTO,
      payload: { collection, text }
    });
  } catch (err) {}
};

export const searchMorePhoto = (text, page) => async dispatch => {
  try {
    const res = await fetch(
      `https://api.unsplash.com//search/photos?query=${text}&per_page=9&page=${page}&client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ACCESS_KEY}`
    );
    const data = await res.json();

    const collection = data.results;

    dispatch({
      type: SEARCHED_MORE_PHOTO,
      payload: collection
    });
  } catch (err) {}
};

export const setCurrent = item => {
  return {
    type: SET_CURRENT,
    payload: item
  };
};

export const clearCurrent = item => {
  return {
    type: CLEAR_CURRENT
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
