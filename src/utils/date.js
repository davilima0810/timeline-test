export function daysBetween(start, end) {
  const msPerDay = 1000 * 60 * 60 * 24;
  return (new Date(end) - new Date(start)) / msPerDay;
}

export function getDateRange(items) {
  const allDates = items.flatMap((item) => [item.start, item.end]);
  const minDate = new Date(Math.min(...allDates.map((d) => new Date(d))));
  const maxDate = new Date(Math.max(...allDates.map((d) => new Date(d))));
  return { minDate, maxDate };
}
  
export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en", {
    day: "numeric",
    month: "short",
  });
}
