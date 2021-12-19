import React from "react";

import usePlaylistContent from "../../hooks/usePlaylistContent";

const Playlist = () => {
  const content = usePlaylistContent();

  return (
    <ul className="playlist">
      {
        content
      }
    </ul>
  );
};

export default Playlist;