const formatTime = (value) => {
  const duration = ~~value;
  const minutes = ~~(duration / 60);
  const seconds = `${(duration % 60)}`.padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export default formatTime;