import { daysBetween } from "./date";

export function getLeftPosition(minDate, startDate, dayWidth) {
  return daysBetween(minDate, startDate) * dayWidth;
}

export function getItemWidth(startDate, endDate, dayWidth) {
  return (daysBetween(startDate, endDate) + 1) * dayWidth;
}
