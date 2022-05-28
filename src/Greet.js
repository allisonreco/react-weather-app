import { DateTime } from "luxon";
import React from "react";
import "./Greet.css";

export default function Greet(props) {
  const time = props.time ?? new Date();
  const message = DateTime.fromJSDate(time).toFormat("EEEE LLLL d, yyyy");

  return (
    <div className="Greet">
      <h1>
        Woof Morning, <strong>Hooman!</strong>
      </h1>
      <p className="Date">Today is {message}</p>
    </div>
  );
}
