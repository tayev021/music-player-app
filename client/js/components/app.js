import React from "react";

import WithPlaylistContext from "../hoc/with-playlist-context";
import WithCurrentSongContext from "../hoc/with-current-song-context";

import Header from "./header/header";
import Playlist from "./playlist/playlist";
import Player from "./player/player";

const App = () => {
  return (
    <WithPlaylistContext>
      <WithCurrentSongContext>
        <Header/>
        <Playlist/>
        <Player/>
      </WithCurrentSongContext>
    </WithPlaylistContext>
  );
};

export default App;