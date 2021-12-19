import React from "react";

import useSequence from "../../../hooks/useSequence";

import Button from "./button";

const SequenceControllers = () => {
  const {all, once, loop, shuffle} = useSequence();

  return (
    <>
      <Button name="all" handler={all}/>
      <Button name="once" handler={once}/>
      <Button name="loop" handler={loop}/>
      <Button name="shuffle" handler={shuffle}/>
    </>
  );
};

export default SequenceControllers;