import React from "react";

import {MUTE, SET_VOLUME, useVolume} from "../../../hooks/useVolume";
import getTrackPCT from "../../../utils/getTrackPCT";
import getURL from "../../../utils/getURL";

const Volume = () => {
  const [state, dispatch] = useVolume();
  const {volume, icon} = state;

  const onTrackClick = (e) => {
    const pct = getTrackPCT(e) * 100;
    const volume = pct < 0 ? 0 : pct;

    dispatch({type: SET_VOLUME, payload: volume});
  };

  const trackStyle = ({
    backgroundImage: `linear-gradient(to right, #ffbd9d 0 ${volume}%, #fffaf5 ${volume}% 100%)`
  });

  return (
    <div className="volume-box">
      <img className="volume-box__icon"
           src={getURL(`img/volume/volume-${icon}.svg`)}
           alt="Volume icon"
           onClick={() => dispatch({type: MUTE})}/>

      <div className="volume-box__track"
           style={trackStyle}
           onClick={onTrackClick}>
      </div>
    </div>
  );
};

export default Volume;