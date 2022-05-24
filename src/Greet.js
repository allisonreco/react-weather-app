import { DateTime } from "luxon";
import React from "react";
import "./Greet.css";

export default function Greet(props) {
  const time = props.time ?? new Date();
  const message = DateTime.fromJSDate(time).toFormat("EEEE LLLL d, yyyy");

  return (
    <div className="Greet">
      <p>
        <span>Woof Morning, </span> <strong>Hooman!</strong>
      </p>
      <p className="Date">Today is {message}</p>
    </div>
  );
}
