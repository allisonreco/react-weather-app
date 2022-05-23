import React from "react";
import "./Conditions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

export default function Conditions() {
  return (
    <div className="Conditions">
      <div className="ConditionsContainer">
        <div className="ConditionsLeft">
          <div className="ConditionsIcon">
            
            <FontAwesomeIcon icon={faCloud} />
          </div>
          <p className="MaxMinTemp"> &#8593; 23° &#8595; 21° </p>
        </div>
        <div className="ConditionsRight">
          <div className="ConditionsList"></div>
          <h2>16° C</h2>
          <ul>
            <li>Scattered Clouds</li>
            <li>Feels like:  15°C</li>
            <li>Humidity:45 %</li>
            <li>Wind: 2 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
