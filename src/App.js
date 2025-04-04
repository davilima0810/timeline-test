import React, { useState, useEffect } from "react";
import Timeline from "./components/Timeline/Timeline";
import timelineItems from "./data/timelineItems";
import "./styles/global.css";

function App() {

  const [dayWidth, setDayWidth] = useState(() => {
    const saved = localStorage.getItem("dayWidth");
    return saved ? Number(saved) : 10;
  });

  const [items, setItems] = useState(timelineItems);
  
  useEffect(() => {
    localStorage.setItem("dayWidth", dayWidth);
  }, [dayWidth]);

  const handleZoomIn = () => {
    setDayWidth((prev) => Math.min(prev + 2, 40));
  };

  const handleZoomOut = () => {
    setDayWidth((prev) => Math.max(prev - 2, 5));
  };

  return (
    <div>
        <h2>Timeline Assignment ✨</h2>

        <Timeline
        items={items}
        dayWidth={dayWidth}
        />

        <div style={{ marginBottom: "16px" }}>
            <label>Zoom: </label>
            <button onClick={handleZoomOut}>–</button>
            <span style={{ margin: "0 10px" }}>{dayWidth}px/day</span>
            <button onClick={handleZoomIn}>+</button>
        </div>
    </div>
  );
}

export default App;
