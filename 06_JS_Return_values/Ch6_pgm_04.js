// Returning the sum of two numbers

var add;
var addThreeNumbers;

add = function (number1, number2) {
    var total = number1 + number2;
    return total;
};

addThreeNumbers = function (number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
};

// Task 1: Sum of a different pair of numbers
var newSum = add(10, 15);
console.log(newSum);

// Task 2: Displaying the sum with a message
var sum = add(50, 23);
console.log("The sum of 50 and 23 is " + sum);

// Task 3: Adding more than two numbers using nested calls
var sum1 = add(10, 15);
var sum2 = add(sum1, 20);
console.log("The sum of 10, 15, and 20 is " + sum2);

// Task 4: Sum of three numbers
var sumOfThree = addThreeNumbers(10, 20, 30);
console.log("The sum of 10, 20, and 30 is " + sumOfThree);



/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */