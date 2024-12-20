import React from "react";

function WeatherDisplay({ weather }) {
  // Inline styles for the component
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f4f4f8",
      height: "350px",
      padding: "20px",
      fontFamily: "'Arial', sans-serif",
      borderRadius: "50px",
    },
    temperature: {
      fontSize: "96px",
      color: "#6a64c9",
      fontWeight: "bold",
      margin: "0",
      display: "flex",
      alignItems: "center",
    },
    degreeSymbol: {
      fontSize: "24px",
      color: "#6a64c9",
      marginLeft: "5px",
    },
    condition: {
      fontSize: "20px",
      color: "#8b89bf",
      marginTop: "-10px",
    },
    detailsContainer: {
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "#d3c4f5",
      borderRadius: "25px",
      padding: "15px",
      marginTop: "20px",
      width: "80%",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    detail: {
      textAlign: "center",
      color: "#5c5b79",
      fontSize: "14px",
    },
    detailIcon: {
      fontSize: "20px",
      color: "#6a64c9",
      marginBottom: "5px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Temperature Display */}
      <div style={styles.temperature}>
        19<span style={styles.degreeSymbol}>°</span>
      </div>
      {/* Weather Condition */}
      <p style={styles.condition}>Cloudy</p>

      {/* Weather Details */}
      <div style={styles.detailsContainer}>
        <div style={styles.detail}>
          <div style={styles.detailIcon}>☂️</div>
          <p>30%</p>
          <p>Precipitation</p>
        </div>
        <div style={styles.detail}>
          <div style={styles.detailIcon}>💧</div>
          <p>20%</p>
          <p>Humidity</p>
        </div>
        <div style={styles.detail}>
          <div style={styles.detailIcon}>🌬️</div>
          <p>12km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
