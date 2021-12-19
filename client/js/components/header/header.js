import React, {useContext} from "react";

import PlaylistContext from "../../context/playlist-context";
import {PLAYLIST_SET_HIDE} from "../../hooks/usePlaylist";
import getURL from "../../utils/getURL";

const Header = () => {
  const [{hide}, dispatchPlaylist] = useContext(PlaylistContext)

  const onClick = () => dispatchPlaylist({type: PLAYLIST_SET_HIDE, payload: !hide});

  const hiderType = hide ? "up" : "down";
  const hiderSrc = getURL(`img/playlist/menu-${hiderType}.svg`);
  const logoSrc = getURL('img/logo.svg');

  return (
    <header className="header flex flex--between">
      <img className="header__logo icon"
           src={logoSrc}
           alt="Logo"/>

      <h1 className="heading-1">Playlist</h1>

      <img className="header__hider icon"
           src={hiderSrc}
           alt="Hider"
           onClick={onClick}/>
    </header>
  );
};

export default Header;