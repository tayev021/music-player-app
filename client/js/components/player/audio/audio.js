import React, {useContext} from "react";

import CurrentSongContext from "../../../context/current-song-context";
import PlayerContext from "../../../context/player-context";
import getURL from "../../../utils/getURL";

const Audio = () => {
  const [song] = useContext(CurrentSongContext);
  const [{onEnded, ref}] = useContext(PlayerContext);

  if (!song) return null;

  return (
    <audio className="player__audio"
           src={getURL(`songs/${song.src}`)}
           ref={ref}
           onEnded={onEnded}/>
  );
};

export default Audio;