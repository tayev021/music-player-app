import React from "react";

import PlaylistContext from "../context/playlist-context";
import {usePlaylist} from "../hooks/usePlaylist";
import withContext from "./with-context";

export default withContext(PlaylistContext, usePlaylist);