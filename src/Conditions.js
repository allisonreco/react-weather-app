import React from "react";
import "./Conditions.css";
import Icon from "./Icon";

export default function Conditions(props) {
  return (
    <div className="Conditions">
      <div className="ConditionsContainer">
        <div className="ConditionsLeft">
          <Icon size="large" condition={props.condition} />
          <p className="MaxMinTemp">
            &#8593; {Math.round(props.maxTemp)}° &#8595;{" "}
            {Math.round(props.minTemp)}°
          </p>
        </div>
        <div className="ConditionsRight">
          <div className="ConditionsList"></div>
          <h2>{Math.round(props.temperature)}° C</h2>
          <ul>
            <li>{props.conditions}</li>
            <li>Feels like: {Math.round(props.feelslike)}°C</li>
            <li>Humidity:{props.humidity} %</li>
            <li>Wind: {Math.round(props.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
