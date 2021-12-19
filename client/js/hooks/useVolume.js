import {useContext, useReducer, useEffect} from "react";

import PlayerContext from "../context/player-context";

const initialState = {
  volume: 100,
  icon: 3
};

const MUTE = "MUTE";
const SET_VOLUME = "SET_VOLUME";

const _iconSwitcher = (pct) => {
  switch (true) {
    case pct > 0 && pct < 50: return 1;
    case pct >= 50 && pct < 95: return 2;
    case pct >= 95: return 3;
    default: return 0;
  }
};

const mute = (state) => {
  if(state.volume === 0 ) return {volume: 100, icon: 3};
  return {volume: 0, icon: 0};
};

const setVolume = (volume) => ({volume, icon: _iconSwitcher(volume)});

const reducer = (state, action) => {
  switch (action.type) {
    case MUTE: return mute(state);
    case SET_VOLUME: return setVolume(action.payload);
    default: return state;
  }
};

const useVolume = () => {
  const [{ref: {current}}] = useContext(PlayerContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if(current) current.volume = state.volume / 100;
  }, [state]);

  if(!current) return [{volume: 0, icon: 0}, () => {}];

  return [state, dispatch];
};

export {
  MUTE,
  SET_VOLUME,
  useVolume
};