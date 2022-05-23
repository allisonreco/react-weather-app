import React from "react";
import "./DogNeeds.css";

export default function DogNeeds() {
  return (
    <div className="DogNeeds">
      <p>
        <strong>Are my needs met?</strong>
      </p>
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
    </div>
  );
}
