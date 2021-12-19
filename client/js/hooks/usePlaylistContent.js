import React, {useContext} from "react";

import PlaylistContext from "../context/playlist-context";

import Spinner from "../components/spinner/spinner";
import ErrorMessage from "../components/error/error-message";
import PlaylistItem from "../components/playlist/playlist-item";

const getList = (playlist) => {
  return playlist.map((song) => <PlaylistItem key={song.id} song={song}/>);
}

const usePlaylistContent = () => {
  const [{loading, error, playlist, hide}] = useContext(PlaylistContext);

    switch(true) {
      case loading: return <Spinner/>;
      case hide: return <></>;
      case !!error: return <ErrorMessage/>;
      case !!playlist: return getList(playlist);
    }
};

export default usePlaylistContent;