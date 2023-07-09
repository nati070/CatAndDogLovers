import React, { Suspense } from "react";
import useWeatherData from "../../hooks/useWeatherData";
import ErrorBoundary from "../ErrorBoundary";
import Loading from "./Loading";
import Error from "./Error";

const Weather = () => {
  const weatherData = useWeatherData();
  if (weatherData) {
    return (
      <>
        <div id="wrap-icon">
          <img src={`https:${weatherData.conditionIcon}`} />
        </div>
        <div id="wrap-degree-and-city">
          <div id="temperature">
            {weatherData.temperature}
            <label id="fahrenheit">&deg;F</label>
          </div>
          <div id="city">{weatherData.location}</div>
        </div>
      </>
    );
  }
};

const Wrap = () => {
  return (
    <div className="weather">
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <Weather/>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Wrap;
