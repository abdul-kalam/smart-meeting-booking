export const getDateString = (dateVal: string) => {
  const date = dateVal ? new Date(dateVal) : new Date();
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  let dpad = "";
  let mpad = "";
  if (dd < 10) dpad = "0";
  if (mm < 10) mpad = "0";
  const today = `${dpad}${dd}/${mpad}${mm}/${yyyy}`;
  return today;
};

export const convertToDateTime = (
  dateStr: string,
  hours: number,
  minuntes: number,
): Date => {
  if (!dateStr) throw new Error("Provide date string");
  var dateParts = dateStr.split("/");
  let date = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
  if (hours) {
    date.setHours(hours);
  }
  if (minuntes) {
    date.setMinutes(hours, minuntes);
  }

  return date;
};

export const isToday = (date: Date) => {
  const today = new Date();
  return (
    date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
  );
};

export const formatDate = (date: Date): string => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};
