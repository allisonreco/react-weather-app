import React from "react";
import "./Time.css";

export default function Time() {
  return (
    <div className="Time">
      <div className="TimeContainer">
        <p>
          <strong className="TimeCity">Berlin </strong>
        </p>
        <p className="TimeAtCity">15:40</p>
        <img
          src="./day.svg"
          alt="day sun clouds weather conditions"
          width="200px"
        ></img>
      </div>
    </div>
  );
}
