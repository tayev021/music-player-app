import React from "react";

import WithPlayerContext from "../../hoc/with-player-context";

import Audio from "./audio/audio";
import AudioTrack from "./audio/audio-track";
import PlayButton from "./playing/play-button";
import BackwardButton from "./playing/backward-button";
import ForwardButton from "./playing/forward-button";
import SequenceControllers from "./sequence/sequence-controllers";
import Volume from "./volume/volume";

const Player = () => {
  return (
    <WithPlayerContext>
      <footer className="player player-grid">
        <Audio/>
        <AudioTrack/>
        <BackwardButton/>
        <PlayButton/>
        <ForwardButton/>
        <SequenceControllers/>
        <Volume/>
      </footer>
    </WithPlayerContext>
  );
};

export default Player;