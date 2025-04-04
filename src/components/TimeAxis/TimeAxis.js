import React from "react";
import styles from "./TimeAxis.module.css";
import { daysBetween, formatDate } from "../../utils/date";

function TimeAxis({ startDate, endDate, dayWidth, totalWidth }) {
  const totalDays = daysBetween(startDate, endDate);
  const ticks = [];

  for (let i = 0; i <= totalDays; i += 7) {
    const tickDate = new Date(startDate);
    tickDate.setDate(tickDate.getDate() + i);
    ticks.push(tickDate.toISOString().split("T")[0]);
  }

  return (
    <div className={styles.axisWrapper}>
      <div className={styles.axis} style={{ width: `${totalWidth}px` }}>
        {ticks.map((dateStr, i) => {
          const left = daysBetween(startDate, dateStr) * dayWidth;
          return (
            <div key={i} className={styles.tick} style={{ left: `${left}px` }}>
              {formatDate(dateStr)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TimeAxis;
