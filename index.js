var read = require('readline-sync');
const chalk=require("chalk");
var userInput = read.question(chalk.bold.blue("Enter your year of birth:\n\n"));
var no = "\nIt's not a leap year";
var yes = "\nIt's a leap year";
function isLeapYear(year) {
  if (year % 4 !== 0) {
    return (no);
  } else if (year % 100 !== 0) {
    return (yes);
  } else if (year % 400 !== 0) {
    return (no);
  } else {
    return (yes);
  }
}
if(isNaN(userInput)){
  console.log(chalk.bold.red("\nError: Please enter a valid year in digits.\n"));
}
else {
console.log(isLeapYear(userInput));
}
