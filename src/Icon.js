import React from "react";
import "./Icon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faCloud,
  faCloudMoon,
  faCloudMoonRain,
  faCloudRain,
  faCloudShowersHeavy,
  faMoon,
  faSmog,
  faSnowflake,
  faSun,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const ICON_MAP = {
  day: {
    Thunderstorm: faBoltLightning,
    Drizzle: faCloudRain,
    Rain: faCloudShowersHeavy,
    Snow: faSnowflake,
    Mist: faSmog,
    Smoke: faSmog,
    Haze: faSmog,
    Dust: faSmog,
    Fog: faSmog,
    Sand: faSmog,
    Ash: faSmog,
    Squall: faWind,
    Tornado: faWind,
    Clear: faSun,
    Clouds: faCloud,
  },
  night: {
    Thunderstorm: faBoltLightning,
    Drizzle: faCloudMoonRain,
    Rain: faCloudMoonRain,
    Snow: faSnowflake,
    Mist: faSmog,
    Smoke: faSmog,
    Haze: faSmog,
    Dust: faSmog,
    Fog: faSmog,
    Sand: faSmog,
    Ash: faSmog,
    Squall: faWind,
    Tornado: faWind,
    Clear: faMoon,
    Clouds: faCloudMoon,
  },
};

export default function Icon(props) {
  const className = props.size === "large" ? "IconLarge" : "IconSmall";
  const dayNight = props.dayNight ?? "day";
  const condition = props.condition ?? "Clear";
  const icon = ICON_MAP[dayNight][condition];

  return (
    <div className={className}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}
