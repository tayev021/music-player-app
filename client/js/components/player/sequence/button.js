import React, {useContext} from "react";

import PlayerContext from "../../../context/player-context";
import {SET_ON_ENDED} from "../../../hooks/usePlayer";
import getURL from "../../../utils/getURL";

const Button = ({name, handler}) => {
  const [{onEnded}, dispatch] = useContext(PlayerContext);

  const onClick = () => dispatch({type: SET_ON_ENDED, payload: handler});

  const type = name === onEnded?.name ? '-active' : '';
  const src = getURL(`img/player/${name}${type}.svg`);

  return (
    <img className={`player__${name}-button`}
         src={src}
         alt={`Play ${name}`}
         onClick={onClick}
    />
  );
};

export default Button;