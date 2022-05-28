import React, { useState } from "react";
import "./NeedItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

export default function NeedItem(props) {
  let [value, setValue] = useState(0);

  const imagePath = `./${props.icon}.svg`;

  const handleIncrement = () => {
    setValue(Math.min(props.max, value + props.increment));
  };

  const handleDecrement = () => {
    setValue(Math.max(0, value - props.increment));
  };

  return (
    <div className="NeedItem">
      <img src={imagePath} alt="bowl dog" />

      <div>
        <span className="NeedValue">{value} </span>
        <span className="NeedUnit">{props.unit}</span>

        <p>{props.title}</p>
      </div>

      <div className="PlusMinusButtons">
        <FontAwesomeIcon icon={faCirclePlus} onClick={handleIncrement} />

        <FontAwesomeIcon icon={faCircleMinus} onClick={handleDecrement} />
      </div>
    </div>
  );
}
