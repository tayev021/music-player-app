import React, {useState} from 'react';

import getURL from "../../utils/getURL";

const PlayButton = ({onClick}) => {
  const [hovered, setHovered] = useState(false);

  const type = hovered ? "-active" : "";
  const src = getURL(`img/playlist/play${type}.svg`);

  return (
    <img className="playlist__play-button"
         src={src}
         alt="Click to play"
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
         onClick={onClick}
    />
  );
};

export default PlayButton;