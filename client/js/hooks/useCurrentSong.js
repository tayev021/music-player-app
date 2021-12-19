import {useState, useContext, useMemo} from "react";

import PlaylistContext from "../context/playlist-context";

function useCurrentSong() {
  const [currentSong, setCurrentSong] = useState(null);
  const [{playlist}] = useContext(PlaylistContext);

  const _getSong = (currentSong, step, defaultIndex) => {
    if(currentSong) {
      const index = playlist.findIndex((i) => i.id === currentSong.id) + step;
      return playlist[index] ? playlist[index] : playlist[defaultIndex];
    } else if(playlist) {
      return playlist[defaultIndex];
    }
  };

  const setPreviousSong = () =>
    setCurrentSong((currentSong) => _getSong(currentSong, -1, playlist?.length - 1));

  const setNextSong = () =>
    setCurrentSong((currentSong) => _getSong(currentSong, 1, 0));

  const setRandomSong = () => setCurrentSong((currentSong) => {
    const max = playlist.length;
    const random = ~~(1 + Math.random() * max);
    const id = currentSong.id === random ? random + 1 : random;
    return id > max ? playlist[0] : playlist.find((s) => s.id === id);
  });

  const resetSong = () => setCurrentSong((currentSong) => ({...currentSong}));

  return [currentSong, {setCurrentSong, setRandomSong, setPreviousSong, setNextSong, resetSong}];
}

export default useCurrentSong;