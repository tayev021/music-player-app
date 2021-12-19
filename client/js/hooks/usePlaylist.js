import {useReducer, useEffect} from "react";

import playlistService from "../service/playlistService";

const PLAYLIST_REQUEST = "PLAYLIST_REQUEST";
const PLAYLIST_REQUEST_SUCCESS = "PLAYLIST_REQUEST_SUCCESS";
const PLAYLIST_REQUEST_ERROR = "PLAYLIST_REQUEST_ERROR";
const PLAYLIST_SET_HIDE = "PLAYLIST_SET_HIDE";

const initialState = {
  loading: false,
  error: false,
  hide: false,
  playlist: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case PLAYLIST_REQUEST: return {...state, loading: true};
    case PLAYLIST_REQUEST_SUCCESS: return {...state, loading: false, playlist: action.payload};
    case PLAYLIST_REQUEST_ERROR: return {...state, loading: false, error: action.payload};
    case PLAYLIST_SET_HIDE:
      return {...state, playlist: state.playlist && [...state.playlist], hide: action.payload};
    default: return state;
  }
};

const usePlaylist = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: PLAYLIST_REQUEST});

    playlistService
      .getPlaylist()
      .then((playlist) => dispatch({type: PLAYLIST_REQUEST_SUCCESS, payload: playlist}))
      .catch((err) => dispatch({type: PLAYLIST_REQUEST_ERROR, payload: err}))
  }, []);

  useEffect(() => {
    const app = document.getElementById('app');

    if(state.hide) app.classList.add('app-grid--shrink');
    else app.classList.remove('app-grid--shrink');
  }, [state.hide]);

  return [state, dispatch];
};

export {
  PLAYLIST_SET_HIDE,
  usePlaylist
};