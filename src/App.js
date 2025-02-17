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
  // {
  //   View: "Bullish",
  //   Value: {
  //     "24-Apr-2024": [
  //       "Bull Call Spread",
  //       "Bull Put Spread",
  //       "Bull Put Spread",
  //       "Long Call",
  //       "Bull Put Spread",
  //     ],
  //     "02-May-2024": [
  //       "Bull Call Spread",
  //       "Bull Call Spread",
  //       "Bull Put Spread",
  //       "Long Call",
  //     ],
  //   },
  // },
  // {
  //   View: "Bearish",
  //   Value: {
  //     "24-Apr-2024": ["Bear Call Spread", "Bear Call Spread", "Long Put"],
  //     "31-May-2024": ["Long Put", "Long Put"],
  //   },
  // },
  {
    'View': 'Bullish',
    'Value': {
      '24-Apr-2024': ['Bull Call Spread', 'Bull Put Spread', 'Bull Put Spread', 'Long Call', 'Bull PutSpread', 'Bull Call Spread', 'Strategy1', 'Bull CallSpread', 'Strategy1', 'Strategy1', 'SpreadStrategy', 'Bull Call Spread'],
      '02-May-2024': ['Bull Call Spread', 'Bull Call Spread', 'Bull Put Spread', 'Long Call', 'LongCall', 'Long Call', 'Bull Put Spread', 'Bull Call Spread', 'Strategy1', 'Bull CallSpread', 'Strategy2', 'Strategy1', 'Strategy2', 'Bull Call Spread'],
      '09-May-2024': ['Strategy Put', 'Strategy Call', 'Strategy Call', 'Strategy Call', 'Strategy Put'],
    }
  },
  {
    'View': 'Bearish',
    'Value': {
      '24-Apr-2024': ['Bear Call Spread', 'Bear Call Spread', 'Bear Call Spread', 'Long Put', 'LongPut', 'Long Put', 'Bear Call Spread',],
      '31-May-2024': ['Long Put', 'Long Put', 'Long Put', 'Long Put', 'Long Put'],
      '21-Jun-2024': ['Strategy3', 'Strategy3', 'Bear Put Spread', 'Strategy3', 'Long Put', 'LongPut'],
    }
  },
  {
    'View': 'RangeBound',
    'Value': {
      '24-Apr-2024': ['Short Straddle', 'Short Strangle', 'Short Strangle', 'Iron Butterfly', 'ShortStrangle', 'Short Straddle', 'Strategy1', 'Short  Straddle', 'Strategy1', 'Strategy1', 'SpreadStrategy', 'Short Straddle'],
      '02-May-2024': ['Short Straddle', 'Short Straddle', 'Short Strangle', 'Iron Butterfly', 'IronButterfly','Iron Butterfly','Short Strangle','Short Straddle','Strategy1','ShortStraddle','Strategy2','Strategy1','Strategy2','Short Straddle'],
    '21-Jun-2024': ['Iron Condor', 'Iron Butterfly', 'Iron Butterfly', 'Iron Butterfly', 'IronCondor'],
    }
  },
  {
    'View': 'Volatile',
    'Value': {
      '02-May-2024': ['Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Strangle', 'LongStraddle', 'Strategy1', 'Long Straddle', 'Strategy1', 'Strategy1', 'Spread-Strategy', 'Long Straddle'],
      '09-May-2024': ['Long Straddle', 'Long Straddle', 'Long Strangle', 'Long Strangle', 'LongStraddle', 'Strategy1', 'Long Straddle', 'Strategy2', 'Strategy1', 'Strategy2', 'Long Straddle'],
      '31-May-2024': ['Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Strangle', 'Long Straddle'],
    }
  }
];

const App = () => {
  const [selectedView, setSelectedView] = useState("Bullish");
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  const selectedViewStrategies =
    strategyArray.find((item) => item.View === selectedView)?.Value[selectedDate] || [];


    const handleCheckboxChange = (e, date) => {
      if (e.target.checked) {
        setSelectedDate(date);
      } else {
        setSelectedDate(null);  // Clear selection if unchecked
      }
    };


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
            <input type="checkbox" checked={selectedDate==date}/>
            {date.split("-").join(" ")}
          </option>
        ))}
      </select>

      <div className="custom-dropdown">
        {dateArray.map((date) => (
          <div key={date} className="date-item">
            <input
              type="checkbox"
              checked={selectedDate === date}
              onChange={(e) => handleCheckboxChange(e, date)}
            />
            <label>{date.split('-').join(' ')}</label>
          </div>
        ))}
      </div>

      <Cards selectedViewStrategies={selectedViewStrategies} view={selectedView} selectedDate={selectedDate} />
    </div>
  );
};

export default App;
