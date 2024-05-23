export function formatEventDate(eventData: string): string {
  const date = new Date(eventData);

  const formattedDate = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  const [day, month, year] = formattedDate.split("/");
  const formattedMonthDayYear = `${month}.${day}.${year}`;

  return formattedMonthDayYear;
}
