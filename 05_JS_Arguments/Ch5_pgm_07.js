// Displaying a player's name

var showPlayerName;

showPlayerName = function (playerName) {
    console.log(playerName);
};

showPlayerName("Kandra");
showPlayerName("Dax");

var showNameLength = function (playerName) {
    var length = playerName.length;
    console.log("The player's name '" + playerName + "' has " + length + " letters.");
};

// Testing the showNameLength function
showNameLength("Kandra");
showNameLength("Dax");
showNameLength("John");
showNameLength("Alice Johnson");

/* Further Adventures
 *
 * 1) Update the text logged so that it is
 *    of the form:
 *    The player's name is Kandra
 *
 * Strings have a length property that gives
 * the number of characters in the string.
 * e.g. playerName.length.
 *
 * 2) Make the function show the number
 *    of letters in the player's name.
 *
 */