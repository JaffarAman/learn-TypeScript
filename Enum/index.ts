// Enum set of values

// enum Days {
//   mon,
//   tue,
//   wed,
//   thu,
//   fri,
//   sat,
//   sun,
// }

// let whichDays: Days;
// whichDays = Days.mon;
// console.log(whichDays);

// enum Days {
//   mon = "mon",
//   tues = "tues",
//   //   wed,
//   //   thu,
//   //   fri,
//   //   sat,
//   //   sun,
// }

// let whichDays: Days;
// whichDays = Days.tues;
// console.log(whichDays);

enum Days {
  mon = 10,
  tue,
  wed,
  thu,
  fri,
  sat,
  sun,
}

let whichDays: Days;
whichDays = Days.mon;
console.log(whichDays);

function getDay(day: Days) {
  return day;
}
console.log(getDay(Days.sun));

export {};
