/*
	[0-2] - сірий
	[3-6] - синій
	[7-10] - зелений
	[11+] - червоний
*/

const isInRange = (value, from, to) => value >= from && value <= to;

const useCustomColor = usersByMonthLength => {
  let color = "white";
  if (isInRange(usersByMonthLength, 0, 2)) {
    color = "#9e9e9e";
  } else if (isInRange(usersByMonthLength, 3, 6)) {
    color = "#039be5";
  } else if (isInRange(usersByMonthLength, 7, 10)) {
    color = "#43a047";
  } else if (usersByMonthLength >= 11) {
    color = "#f44336";
  }

  return color;
};

export { useCustomColor };
