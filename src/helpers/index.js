function getMonthsList(locale) {
  const format = new Intl.DateTimeFormat(locale, { month: "long" });
  const months = [];
  for (let month = 0; month < 12; month++) {
    const testDate = new Date(Date.UTC(2000, month, 1, 0, 0, 0));
    months.push(format.format(testDate));
  }
  return months;
}

function getMonthIDByDate(date) {
  return new Date(date).getUTCMonth();
}

export { getMonthsList, getMonthIDByDate };
