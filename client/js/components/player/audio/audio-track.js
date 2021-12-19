import React from "react";

import {useTrack, SET_TIME} from "../../../hooks/useTrack";
import getTrackPCT from "../../../utils/getTrackPCT";
import formatTime from "../../../utils/formatTime";

const AudioTrack = () => {
  const [{currentTime, duration}, dispatch] = useTrack();

  const getStyle = () => {
    const passedPCT = +(currentTime / duration * 100).toFixed(3) || 0;
    const pointerPCT = +(passedPCT + 1).toFixed(3);

    return {
      backgroundImage:
        `linear-gradient(to right, #ffbd9d 0 ${passedPCT}%, #eb1919 ${passedPCT}%, 
        #eb1919 ${pointerPCT}%, #fffaf5 ${pointerPCT}% 100%)`
    };
  };

  const getTimePoint = (e) => duration * getTrackPCT(e);

  const onMouseMove = (e) => { e.target.textContent = formatTime(getTimePoint(e)); };

  const onMouseLeave = (e) => { e.target.textContent = ''; };

  const onClick = (e) => dispatch({type: SET_TIME, payload: getTimePoint(e)});

  return (
    <>
      <span className="player__time player__time--1">
        { formatTime(currentTime) }
      </span>

      <span className="player__track"
            style={getStyle()}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onClick={onClick}>
      </span>

      <span className="player__time player__time--2">
        { formatTime(duration) }
      </span>
    </>
  );
};

export default AudioTrack;