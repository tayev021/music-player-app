import React, {useState, useContext} from "react";

import CurrentSongContext from "../../context/current-song-context";

import PlayButton from "./play-button";

const PlaylistItem = ({song}) => {
  const [hideButton, setHideButton] = useState(true);
  const [currentSong, {setCurrentSong}] = useContext(CurrentSongContext);

  const classCurrent = song.id === currentSong?.id ? 'playlist__item--current' : '';
  const className = `playlist__item ${classCurrent} list-item-grid`;

  return (
    <li className={className}
        onMouseEnter={() => setHideButton(false)}
        onMouseLeave={() => setHideButton(true)}>

      <h2 className="playlist__heading heading-2">{song.author}</h2>
      <span className="playlist__name">{song.title}</span>

      {!hideButton && <PlayButton onClick={() => setCurrentSong(song)}/>}
    </li>
  );
};

export default PlaylistItem;