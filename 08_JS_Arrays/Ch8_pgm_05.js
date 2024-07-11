// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481 ];

var report = getVisitorReport(visitors, 2);

console.log(report);

var reportSaturday = getVisitorReport(visitors, 6);
console.log(reportSaturday);  // Should output "There were 190 visitors on Saturday"

var reportSunday = getVisitorReport(visitors, 7);
console.log(reportSunday);  // Should output "There were 230 visitors on Sunday"

var getMonthVisitorReport = function (monthArray, week, day) {
  var weekVisitors = monthArray[week - 1];
  return getVisitorReport(weekVisitors, day);
};

var week1 = [354, 132, 210, 221, 481, 190, 230];
var week2 = [220, 153, 199, 342, 490, 201, 300];
var week3 = [310, 180, 250, 270, 320, 220, 310];
var week4 = [290, 160, 220, 210, 400, 190, 280];

var month = [week1, week2, week3, week4];

var reportWeek2Friday = getMonthVisitorReport(month, 2, 5);
console.log(reportWeek2Friday);  // Should output "There were 490 visitors on Friday"

var reportWeek3Monday = getMonthVisitorReport(month, 3, 1);
console.log(reportWeek3Monday);  // Should output "There were 310 visitors on Monday"

var reportWeek4Sunday = getMonthVisitorReport(month, 4, 7);
console.log(reportWeek4Sunday);  // Should output "There were 280 visitors on Sunday"

var getVisitorReport = function (visitorArray, dayInWeek) {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  var index = dayInWeek - 1;
  var visitorReport;

  visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
  visitorReport += "on " + days[index];

  return visitorReport;
};

var visitors = [354, 132, 210, 221, 481, 190, 230];

var report = getVisitorReport(visitors, 2);
console.log(report);

var reportFriday = getVisitorReport(visitors, 5);
console.log(reportFriday);

var reportSaturday = getVisitorReport(visitors, 6);
console.log(reportSaturday);

var reportSunday = getVisitorReport(visitors, 7);
console.log(reportSunday);

var getMonthVisitorReport = function (monthArray, week, day) {
  var weekVisitors = monthArray[week - 1];
  return getVisitorReport(weekVisitors, day);
};

var week1 = [354, 132, 210, 221, 481, 190, 230];
var week2 = [220, 153, 199, 342, 490, 201, 300];
var week3 = [310, 180, 250, 270, 320, 220, 310];
var week4 = [290, 160, 220, 210, 400, 190, 280];

var month = [week1, week2, week3, week4];

var reportWeek2Friday = getMonthVisitorReport(month, 2, 5);
console.log(reportWeek2Friday);

var reportWeek3Monday = getMonthVisitorReport(month, 3, 1);
console.log(reportWeek3Monday);

var reportWeek4Sunday = getMonthVisitorReport(month, 4, 7);
console.log(reportWeek4Sunday);

/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */