"use strict";
// Enum set of values
exports.__esModule = true;
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
var Days;
(function (Days) {
    Days[Days["mon"] = 10] = "mon";
    Days[Days["tue"] = 11] = "tue";
    Days[Days["wed"] = 12] = "wed";
    Days[Days["thu"] = 13] = "thu";
    Days[Days["fri"] = 14] = "fri";
    Days[Days["sat"] = 15] = "sat";
    Days[Days["sun"] = 16] = "sun";
})(Days || (Days = {}));
var whichDays;
whichDays = Days.mon;
console.log(whichDays);
function getDay(day) {
    return day;
}
console.log(getDay(Days.sun));
