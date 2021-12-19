import {useContext, useEffect, useReducer} from "react";
import PlayerContext from "../context/player-context";
import CurrentSongContext from "../context/current-song-context";

const SET_TIME = "SET_TIME";
const UPDATE_TIME = "UPDATE_TIME";
const _SET_LOOP = "SET_LOOP";
const _CLEAR_LOOP = "CLEAR_LOOP";

const initialState = {
  currentTime: 0,
  duration: 0,
  _intervalID: null
};

const setTime = (state, {current}, payload) => {
  current.currentTime = payload;

  return {...state, currentTime: payload};
}

const updateTime = (state, {current}) => {
  if(current) {
    const currentTime = ~~current?.currentTime;
    const duration = ~~current?.duration;

    return {...state, currentTime, duration};
  }

  return state;
};

const setLoop = (state, payload) => ({...state, _intervalID: payload});

const clearLoop = (state) => {
  if(state._intervalID) clearInterval(state._intervalID);

  return {...state, _intervalID: null};
};

const getReducer = (ref) => {
  return (state, action) => {
    switch(action.type) {
      case SET_TIME: return setTime(state, ref, action.payload);
      case UPDATE_TIME: return updateTime(state, ref);
      case _SET_LOOP: return setLoop(state, action.payload);
      case _CLEAR_LOOP: return clearLoop(state);
      default: return state;
    }
  }
};

const useTrack = () => {
  const [song] = useContext(CurrentSongContext);
  const [{playing, ref}] = useContext(PlayerContext);
  const [state, dispatch] = useReducer(getReducer(ref), initialState);

  useEffect(() => {
    if (playing) {
      ref?.current?.play();
      const intervalID = setInterval(() => dispatch({type: UPDATE_TIME}), 1000);
      dispatch({type: _SET_LOOP, payload: intervalID});
    } else {
      ref?.current?.pause();
      state._intervalID && dispatch({type: _CLEAR_LOOP});
    }

    return () => dispatch({type: _CLEAR_LOOP});
  }, [song, playing]);

  return [state, dispatch];
};

export {
  SET_TIME,
  UPDATE_TIME,
  useTrack
}