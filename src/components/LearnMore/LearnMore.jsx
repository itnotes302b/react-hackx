/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { PlayCircle } from "../../icons/PlayCircle";
import "./style.css";

export const LearnMore = ({ className }) => {
  return (
    <div className={`learn-more ${className}`}>
      <PlayCircle className="play-circle-2" />
      <div className="text-wrapper-2">Learn More</div>
    </div>
  );
};
