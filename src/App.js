import React from "react";
import "./App.css";
import Conditions from "./Conditions.js";
import Greet from "./Greet.js";
import Time from "./Time.js";
import Forecast from "./Forecast.js";
import DogNeeds from "./DogNeeds.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import RightBar from "./RightBar";

function App() {
  return (
    <div className="App">
      <div className="MainContainer">
        <div className="GreetSearch">
          <Greet />

          <div className="Search">
            <form>
              <input className="SearchBar" type="text" value="Search city..." />
              <button type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </div>

        <div className="ConditionsTime">
          <Conditions />
          <Time />
        </div>

        <div className="ForecastNeeds">
          <Forecast />
          <DogNeeds />
        </div>
      </div>
      <RightBar />
    </div>
  );
}

export default App;
