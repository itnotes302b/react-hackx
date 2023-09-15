/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { PlayCircle } from "../../icons/PlayCircle";
import "./style.css";

export const Buttons = ({ type, className, divClassName }) => {
  return (
    <div className={`buttons ${type} ${className}`}>
      {["filled", "outline"].includes(type) && <div className={`text-wrapper ${divClassName}`}>Analyse Report</div>}

      {type === "w-icon" && (
        <>
          <PlayCircle className="play-circle" />
          <div className="div">Upload your Report</div>
        </>
      )}
    </div>
  );
};

Buttons.propTypes = {
  type: PropTypes.oneOf(["filled", "outline", "w-icon"]),
};
