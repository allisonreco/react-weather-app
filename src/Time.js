import { DateTime } from "luxon";
import React from "react";
import "./Time.css";

export default function Time(props) {
  const city = props.city ?? "Berlin";
  const time = props.time ?? DateTime.now();

  return (
    <div className="Time">
      <h2 className="TimeCity">{city}</h2>
      <p className="TimeAtCity">{time.toFormat("HH:mm")}</p>
      <img
        src="./day.svg"
        alt="day sun clouds weather conditions"
        width="200px"
      ></img>
    </div>
  );
}
