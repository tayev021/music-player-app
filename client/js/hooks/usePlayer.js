import {useContext, useEffect, useReducer, useRef} from "react";

import CurrentSongContext from "../context/current-song-context";

const PLAY = "PLAY";
const PAUSE = "PAUSE";
const SET_ON_ENDED = "SET_ON_ENDED";

const initialState = {
  playing: false,
  onEnded: null,
  ref: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case PLAY: return {...state, playing: true};
    case PAUSE: return {...state, playing: false};
    case SET_ON_ENDED: return {...state, onEnded: action.payload};
    default: return state;
  }
};

function usePlayer() {
  const ref = useRef(null);
  const [song] = useContext(CurrentSongContext);
  const [state, dispatch] = useReducer(reducer, {...initialState, ref});

  useEffect(() => {
    song && dispatch({type: PLAY})
  }, [song]);

  return [state, dispatch];
}

export {
  PLAY,
  PAUSE,
  SET_ON_ENDED,
  usePlayer
};