import React from "react";
import "./Needs.css";
import NeedItem from "./NeedItem";

export default function Needs() {
  return (
    <div className="Needs">
      <h3>Are my needs met?</h3>
      <div>
        <NeedItem
          icon="waterbowl"
          title="Water"
          unit="%"
          max={100}
          increment={20}
        />

        <NeedItem
          icon="foodbowl"
          title="Food"
          unit="%"
          max={100}
          increment={30}
        />

        <NeedItem
          icon="ball"
          title="Play time"
          unit="min"
          max={30}
          increment={5}
        />
      </div>

      {/*}
      <div className="DogNeedsComponent">
        <div className="Needs">
          <div className="NeedsImg">
            <img src={"./waterbowl.svg"} alt="water bowl dogs" />
          </div>

          <div>
            <p>
              <strong>100 </strong>
              <span>%</span>
            </p>
            <p>Water</p>
          </div>
        </div>

        <div className="Needs">
          <div className="NeedsImg">
            <img src={"./foodbowl.svg"} alt="water bowl dogs" />
          </div>

          <div>
            <p>
              <strong>50 </strong>
              <span>%</span>
            </p>
            <p>Food</p>
          </div>
        </div>

        <div className="Needs">
          <div className="NeedsImg">
            <img src={"./ball.svg"} alt="water bowl dogs" />
          </div>

          <div>
            <p>
              <strong>10 </strong>
              <span>min</span>
            </p>
            <p>Play time</p>
          </div>
        </div>
      </div>

      {*/}
    </div>
  );
}
