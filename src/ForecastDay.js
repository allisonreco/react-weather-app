import React from "react";
import "./ForecastDay.css";

export default function ForecastDay() {
  return (
    <div className="ForecastDay">
      <div className="ForecastDayContainer">
        <div>
          <p>Tuesday</p>
        </div>

        <div>☀️</div>

        <div>
          <p> 20°C | 30° C</p>
        </div>

        <div>
          <p> Sunny</p>
        </div>
      </div>
    </div>
  );
}
