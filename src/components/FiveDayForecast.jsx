// import React from "react";



// const cityDisplay = {
  
//   fontSize: "12px",
//   // fontWeight: "light",
//   color: "#4C4DDB",
//   display: "flex",
//   // flexdirection: "column",
//   textAlign: "center",
  
  
// };

// function FiveDayForecast({ forecast }) {
//   if (!forecast || forecast.length === 0) {
//     return <div>Loading forecast...</div>;
//   }

//   return (
//     <div class="container city-date-display" style={cityDisplay}>
//       {forecast.map((day, index) => (
//         <div key={index}>
//           <p>
//             {" "}
//             {new Date(day.dt_txt).toLocaleDateString("en-US", {
//               weekday: "short",
//             })}
//           </p>
//           <p>{day.main.temp.toFixed()}°F</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FiveDayForecast;/



import React from "react";

function FiveDayForecast({ forecast }) {
  if (!forecast || forecast.length === 0) {
    return <div>Loading forecast...</div>;
  }

  // Define styles as a constant
  const styles = {
    container: {
      marginTop: "20px",
      textAlign: "center",
    },
    heading: {
      fontSize: "18px",
      color: "#5c5b79",
      marginBottom: "15px",
    },
    forecastDays: {
      display: "flex", // Makes items align in one line
      justifyContent: "center", // Centers the items
      gap: "10px", // Adds spacing between cards
      margin: "0 auto",
    },
    forecastDay: {
      backgroundColor: "#d3c4f5", // Light purple for all cards
      color: "#fff",
      borderRadius: "15px",
      width: "60px", // Adjust width
      height: "90px", // Adjust height
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
      padding: "10px",
    },
    activeDay: {
      backgroundColor: "#6a64c9", // Dark purple for active day
    },
    day: {
      fontSize: "14px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    icon: {
      fontSize: "18px",
      marginBottom: "5px",
    },
    temp: {
      fontSize: "12px",
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>5 Day Forecast</h3>
      <div style={styles.forecastDays}>
        {forecast.map((day, index) => (
          <div
            key={index}
            style={{
              ...styles.forecastDay,
              ...(index === 0 ? styles.activeDay : {}), // Apply active style for the first day
            }}
          >
            <p style={styles.day}>
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <div style={styles.icon}>🌦️</div>
            <p style={styles.temp}>{day.main.temp.toFixed()}°F</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FiveDayForecast;
