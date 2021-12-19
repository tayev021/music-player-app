import React, {useContext} from "react";

import CurrentSongContext from "../../../context/current-song-context";
import getURL from "../../../utils/getURL";

const BackwardButton = () => {
  const [, {setPreviousSong}] = useContext(CurrentSongContext);

  return (
    <img className="player__backward"
         src={getURL("img/player/backward.svg")}
         alt="Play previous song"
         onClick={setPreviousSong}/>
  );
};

export default BackwardButton;