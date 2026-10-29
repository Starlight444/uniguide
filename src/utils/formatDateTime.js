const dateTimeFormatter = new Intl.DateTimeFormat("th-TH", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

// e.g. "30 ต.ค. 2569 14:05"
export function formatDateTime(date) {
  return dateTimeFormatter.format(date);
}
