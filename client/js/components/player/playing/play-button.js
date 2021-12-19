import React, {useContext} from "react";

import CurrentSongContext from "../../../context/current-song-context";
import PlayerContext from "../../../context/player-context";
import {PLAY, PAUSE} from "../../../hooks/usePlayer";
import getURL from "../../../utils/getURL";

const PlayButton = () => {
  const [currentSong] = useContext(CurrentSongContext);
  const [{playing}, dispatch] = useContext(PlayerContext);

  const onClick = () => dispatch({type: `${playing ? PAUSE : PLAY}`});

  const type = playing ? "pause" : "play";
  const src = getURL(`img/player/${type}.svg`);

  return (
    <img className="player__play"
         src={src}
         alt="Play and pause"
         onClick={currentSong && onClick}
    />
  );
};

export default PlayButton;