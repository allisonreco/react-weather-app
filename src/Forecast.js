import { DateTime } from "luxon";
import React from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

const DEFAULT_FORECAST = [
  {
    day: DateTime.now().plus({ days: 1 }),
    tempMin: 13,
    tempMax: 19,
    condition: "Clear",
  },
  {
    day: DateTime.now().plus({ days: 2 }),
    tempMin: 16,
    tempMax: 27,
    condition: "Clouds",
  },
  {
    day: DateTime.now().plus({ days: 3 }),
    tempMin: 19,
    tempMax: 28,
    condition: "Drizzle",
  },
];

export default function Forecast(props) {
  const forecast =
    props.forecast && props.forecast.length > 0
      ? props.forecast
      : DEFAULT_FORECAST;

  return (
    <div className="Forecast">
      <h3>Forecast for the next days...</h3>
      <div>
        {forecast.map((data, i) => {
          return (
            <ForecastDay
              key={i}
              day={data.day}
              tempMin={data.tempMin}
              tempMax={data.tempMax}
              condition={data.condition}
            />
          );
        })}
      </div>
    </div>
  );
}
