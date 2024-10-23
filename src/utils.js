export function formatTimestamp(isoString) {
  const date = new Date(isoString);

  const options = {
    month: "long", // e.g., 'October'
    day: "numeric", // e.g., '5'
    year: "numeric", // e.g., '2011'
    hour: "2-digit", // e.g., '02'
    minute: "2-digit", // e.g., '48'
    hour12: true, // Use 12-hour format; set to false for 24-hour format
  };

  // Convert to a human-readable format in local timezone
  return date.toLocaleString(undefined, options);
}
