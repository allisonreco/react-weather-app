import { DateTime } from "luxon";
import React from "react";
import "./Time.css";

export default function Time(props) {
  const city = props.city ?? "Berlin";
  const time = props.time ?? new Date();

  return (
    <div className="Time">
      <div className="TimeContainer">
        <p>
          <strong className="TimeCity">{city}</strong>
        </p>
        <p className="TimeAtCity">
          {DateTime.fromJSDate(time).toFormat("HH:mm")}
        </p>
        <img
          src="./day.svg"
          alt="day sun clouds weather conditions"
          width="200px"
        ></img>
      </div>
    </div>
  );
}
