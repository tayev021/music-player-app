import React from "react";

import PlayerContext from "../context/player-context";
import {usePlayer} from "../hooks/usePlayer";

const WithPlayerContext = ({children}) => {
  const [state, dispatch] = usePlayer();

  return (
    <PlayerContext.Provider value={[state, dispatch]}>
      {children}
    </PlayerContext.Provider>
  );
};

export default WithPlayerContext;