import React from "react";

const cityNameField = {
  borderRadius: "50px",
  width: "334px",
  height: "32px",
  backgroundColor: "#D9D9D933",
  textAlign: "center",
  color: "#4C4DDB",
  borderColor: "#4C4DDB",
}

function LocationField({ location, setLocation, searchLocation }) {
  return (
    <div className="search location-field">
      <input
        style={cityNameField}
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
      />
    </div>
  );
}

export default LocationField;