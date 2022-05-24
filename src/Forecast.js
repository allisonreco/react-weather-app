import { DateTime } from "luxon";
import React from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

const DEFAULT_FORECAST = [
  {
    day: DateTime.now().plus({ days: 1 }).toJSDate(),
    tempMin: 8,
    tempMax: 9,
    description: "sunny",
  },
  {
    day: DateTime.now().plus({ days: 2 }).toJSDate(),
    tempMin: 8,
    tempMax: 9,
    description: "sunny",
  },
  {
    day: DateTime.now().plus({ days: 3 }).toJSDate(),
    tempMin: 8,
    tempMax: 9,
    description: "sunny",
  },
];

export default function Forecast(props) {
  const forecast =
    props.forecast && props.forecast.length > 0
      ? props.forecast
      : DEFAULT_FORECAST;

  return (
    <div className="Forecast">
      <strong>Forecast for the next days...</strong>
      <div>
        {forecast.map((data, i) => {
          return (
            <ForecastDay
              key={i}
              day={data.day}
              tempMin={data.tempMin}
              tempMax={data.tempMax}
              description={data.description}
            />
          );
        })}
      </div>
    </div>
  );
}
