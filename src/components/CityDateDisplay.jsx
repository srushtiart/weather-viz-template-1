import React from "react";


const cityName = {
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#333",
}

function CityDateDisplay({ data }) {
  // Convert the current date to a more readable format
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container">
      <div className="location">
        <p style={cityName}>{data.name}</p> {/* Display city name */}
        <p>{date}</p> {/* Display formatted date */}
      </div>
    </div>
  );
}

export default CityDateDisplay;
