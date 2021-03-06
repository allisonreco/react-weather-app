import React from "react";
import "./Map.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Map() {
  return (
    <div className="Map">
      <img src={"./dogprofilepic.svg"} alt="dog drawing" />
      <div className="RightText">
        <p>
          <strong>Got some extra time?</strong>
        </p>
        <p>
          <span>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          Doggy parks near me
        </p>
      </div>

      <div className="Card">
        <p>On my bark, let's go to the park!</p>
        <img
          src={"./map.png"}
          className="GoogleMap"
          alt="map of veterinarians"
        />
      </div>
    </div>
  );
}
