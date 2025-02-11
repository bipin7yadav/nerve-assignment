import React, { useState } from "react";
import Cards from "./Components/Cards";
import "./App.css";

const dateArray = [
  "24-Apr-2024",
  "02-May-2024",
  "09-May-2024",
  "31-May-2024",
  "21-Jun-2024",
];

const strategyArray = [
  {
    View: "Bullish",
    Value: {
      "24-Apr-2024": [
        "Bull Call Spread",
        "Bull Put Spread",
        "Bull Put Spread",
        "Long Call",
        "Bull Put Spread",
      ],
      "02-May-2024": [
        "Bull Call Spread",
        "Bull Call Spread",
        "Bull Put Spread",
        "Long Call",
      ],
    },
  },
  {
    View: "Bearish",
    Value: {
      "24-Apr-2024": ["Bear Call Spread", "Bear Call Spread", "Long Put"],
      "31-May-2024": ["Long Put", "Long Put"],
    },
  },
];

const App = () => {
  const [selectedView, setSelectedView] = useState("Bullish");
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  const selectedViewStrategies =
    strategyArray.find((item) => item.View === selectedView)?.Value[selectedDate] || [];

  return (
    <div className="container">

      <div className="toggle-pannel">
        {["Bullish", "Bearish", "RangeBound", "Volatile"].map((view) => (
          <button
            key={view}
            className={view === selectedView ? "active" : ""}
            onClick={() => setSelectedView(view)}
          >
            {view}
          </button>
        ))}
      </div>
      
      <select onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate}>
        {dateArray.map((date) => (
          <option key={date} value={date}>
            {date.split("-").join(" ")}
          </option>
        ))}
      </select>

      <Cards selectedViewStrategies={selectedViewStrategies} selectedDate={selectedDate}/>
    </div>
  );
};

export default App;
