import React from "react";
import "./ForecastDay.css";
import Icon from "./Icon";

export default function ForecastDay(props) {
  const day = props.day ? props.day.toFormat("cccc") : "---";

  return (
    <div className="ForecastDay">
      <div>
        <p>{day}</p>
      </div>

      <Icon condition={props.condition} size="small" />

      <div>
        <p>
          {Math.round(props.tempMin)}°C | {Math.round(props.tempMax)}° C
        </p>
      </div>

      <div>
        <p>{props.condition}</p>
      </div>
    </div>
  );
}
