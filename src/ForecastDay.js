import { DateTime } from "luxon";
import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  const day = props.day
    ? DateTime.fromJSDate(props.day).toFormat("cccc")
    : "---";

  return (
    <div className="ForecastDay">
      <div className="ForecastDayContainer">
        <div>
          <p>{day}</p>
        </div>

        <div>☀️</div>

        <div>
          <p>
            {Math.round(props.tempMin)}°C | {Math.round(props.tempMax)}° C
          </p>
        </div>

        <div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
