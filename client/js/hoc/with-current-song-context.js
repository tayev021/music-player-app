import React from "react";

import CurrentSongContext from "../context/current-song-context";
import useCurrentSong from "../hooks/useCurrentSong";
import withContext from "./with-context";

export default withContext(CurrentSongContext, useCurrentSong);