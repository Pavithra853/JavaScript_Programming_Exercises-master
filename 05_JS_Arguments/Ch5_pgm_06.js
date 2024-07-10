// A function with two arguments

var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);

var showProduct = function (number1, number2) {
	var product = number1 * number2;
	console.log(number1 + " * " + number2 + " = " + product);
};

// Testing the showProduct function
showProduct(56, 74);
showProduct(3, -5);
showProduct(0.5, 10);

// Function to show the difference of two numbers
var showDifference = function (number1, number2) {
	var difference = number1 - number2;
	console.log(number1 + " - " + number2 + " = " + difference);
};

// Testing the showDifference function
showDifference(100, 37);
showDifference(20, 50);

// Function to show the quotient of two numbers
var showQuotient = function (number1, number2) {
	var quotient = number1 / number2;
	console.log(number1 + " / " + number2 + " = " + quotient);
};

// Testing the showQuotient function
showQuotient(10, 2);
showQuotient(-15, 3);
showQuotient(7, 0);

/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */