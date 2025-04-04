import React from "react";
import styles from "./TimelineItem.module.css";
import { getLeftPosition, getItemWidth } from "../../utils/positioning";
import { formatDate, daysBetween } from "../../utils/date";

function TimelineItem({ item, minDate, dayWidth, color }) {

  const rawWidth = getItemWidth(item.start, item.end, dayWidth);
  const left = getLeftPosition(minDate, item.start, dayWidth);

  return (
    <div
      className={styles.item}
      style={{
        width: `${rawWidth}px`,
        left: `${left}px`,
        position: "absolute",
        backgroundColor: color,
      }}
      title={`${item.name} (${item.start} → ${item.end})`}
    >
      <div className={styles.name}>{item.name}</div>
      <div className={styles.dates}>
        {formatDate(item.start)} → {formatDate(item.end)}
      </div>
    </div>

  );
}

export default TimelineItem;
