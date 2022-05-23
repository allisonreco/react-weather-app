import React from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast() {
  return (
    <div className="Forecast">
      <strong>Forecast for the next days...</strong>
      <div>
        <ForecastDay />
        <ForecastDay />
        <ForecastDay />
      </div>
    </div>
  );
}
