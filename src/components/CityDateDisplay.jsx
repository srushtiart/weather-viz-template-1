import React from "react";
import "./CityDateDisplay.css";


const cityName = {
  textAlign: "center",
  fontSize: "30px",
  fontWeight: "bold",
  color:"#5157EB",
  // boxShadow: "rgba(0, 0, 0, 0.25)", 
  // dropshadow:"00000040",
}
const dateStyle ={
  fontsize: "16px",
    color: "#5157EB",
    
}

function CityDateDisplay({ data }) {
  // Convert the current date to a more readable format
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container city-date-display">
      <div className="location">
        <p style={cityName}>{data.name}</p> {/* Display city name */}
        <p style={dateStyle}>{date}</p> {/* Display formatted date */}
      </div>
    </div>
  );
}

export default CityDateDisplay;