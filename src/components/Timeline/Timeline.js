import React from "react";
import {assignLanes} from "../../data/assignLanes";
import { daysBetween, getDateRange } from "../../utils/date";
import styles from "./Timeline.module.css";
import TimeAxis from "../TimeAxis/TimeAxis";
import TimelineItem from "../TimelineItem/TimelineItem";

const COLORS = [
  "#42a5f5",
  "#66bb6a",
  // "#ef5350",
  "#26c6da",
];


function Timeline({ items, dayWidth }) {
  const lanes = assignLanes(items);
  const { minDate, maxDate } = getDateRange(items);

  const totalDays = daysBetween(minDate, maxDate);
  const totalWidth = (totalDays + 1) * dayWidth; 

  return (
    <div className={styles.container}>
      <div className={styles.scrollWrapper}>
        <TimeAxis
          startDate={minDate}
          endDate={maxDate}
          dayWidth={dayWidth}
          totalWidth={totalWidth}
        />

        <div className={styles.timelineContent} style={{ width: `${totalWidth}px` }}>
          {lanes.map((lane, i) => (
            <div className={styles.laneWrapper} key={i}>
              <div className={styles.laneLabel}>Faixa {i + 1}</div>
              <div className={styles.lane}>
                {lane.map((item) => {
                  const color = COLORS[item.id % COLORS.length];

                  return <TimelineItem
                    key={item.id}
                    item={item}
                    minDate={minDate}
                    dayWidth={dayWidth}
                    color={color}
                  />
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
