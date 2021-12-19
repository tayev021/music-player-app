import React, {useContext} from "react";

import CurrentSongContext from "../../../context/current-song-context";
import getURL from "../../../utils/getURL";

const ForwardButton = () => {
  const [, {setNextSong}] = useContext(CurrentSongContext);

  return (
    <img className="player__forward"
         src={getURL("img/player/forward.svg")}
         alt="Play next song"
         onClick={setNextSong}/>
  );
};

export default ForwardButton;