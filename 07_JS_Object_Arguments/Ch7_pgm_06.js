// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
  };
  
  console.log(line(30));
  console.log(line(40));
  console.log(line(50));
  
  for (var i = -20; i <= 60; i += 10) {
    console.log("Line length: " + i);
    console.log(line(i));
}

var spaces = function (spaceLength) {
  spaceLength = Math.max(0, spaceLength);
  spaceLength = Math.min(40, spaceLength);
  return " ".repeat(spaceLength);
};

console.log(spaces(10));   // Output: "          "
console.log(spaces(0));    // Output: ""
console.log(spaces(50));   // Output: "                                        "

var emptyBox = function (boxWidth) {
  boxWidth = Math.max(1, boxWidth);  // Ensure boxWidth is at least 1
  boxWidth = Math.min(40, boxWidth); // Ensure boxWidth is at most 40

  var topBottomLine = line(boxWidth);  // Top and bottom line of the box
  var middleLine = "= " + spaces(boxWidth - 4) + " =";  // Middle lines with spaces

  console.log(topBottomLine);
  for (var i = 0; i < 3; i++) {
      console.log(middleLine);
  }
  console.log(topBottomLine);
};

emptyBox(12);

  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */