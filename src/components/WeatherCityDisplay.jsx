import React from "react";

function WeatherCityDisplay({ data }) {
  const date = new Date().toLocaleDateString();
  return (
    <div className="container">
      <div className="top">
        {data.main && (
          <div>
            <h1>{data.main.temp.toFixed()}°F</h1>
            <p>{data.weather ? data.weather[0].main : null}</p>
            <p>Feels Like {data.main.feels_like.toFixed()}°F</p>
            <p>Humidity {data.main.humidity}%</p>
            {data.wind && <p>Wind Speed {data.wind.speed.toFixed()} MPH</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherCityDisplay;
