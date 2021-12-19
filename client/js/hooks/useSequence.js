import {useContext, useEffect} from "react";

import CurrentSongContext from "../context/current-song-context";
import PlayerContext from "../context/player-context";
import PlaylistContext from "../context/playlist-context";
import {PAUSE, SET_ON_ENDED} from "./usePlayer";

function useSequence() {
  const [, {setRandomSong, setNextSong, resetSong}] = useContext(CurrentSongContext);
  const [, dispatch] = useContext(PlayerContext);
  const [{playlist}] = useContext(PlaylistContext);

  const all = () => setNextSong();
  const once = () => dispatch({type: PAUSE});
  const loop = () => resetSong();
  const shuffle = () => setRandomSong();

  useEffect(() => {
    dispatch({type: SET_ON_ENDED, payload: all})
  }, [playlist?.length]);

  return {all, once, loop, shuffle};
}

export default useSequence;