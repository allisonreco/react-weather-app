import React from "react";
import "./Greet.css";

export default function Greet() {
  return (
    <div className="Greet">
      <p>
        <span>Woof Morning, </span> <strong>Hooman!</strong>{" "}
      </p>
      <p className="Date">Today is Monday May 16, 2022</p>
    </div>
  );
}
