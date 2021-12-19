const getTrackPCT = ({target, pageX}) => {
  const {left, right} = target.getBoundingClientRect();
  const pointer = pageX - left;
  const max = right - left;
  const pct = +(pointer / max).toFixed(3);;
  return pct;
};

export default getTrackPCT;