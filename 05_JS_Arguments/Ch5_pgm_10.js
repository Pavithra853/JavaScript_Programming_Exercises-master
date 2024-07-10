// Displaying a player's health via object properties
var player1;
var player2;
var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth, playerHealthMultiplier) {
    var modifiedHealth = playerHealth * playerHealthMultiplier; // Step 3: Multiply health by healthMultiplier
    console.log(playerName + " has health " + modifiedHealth);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    healthMultiplier: 1.5  // Step 1: Add healthMultiplier property
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40,
    healthMultiplier: 2  // Step 1: Add healthMultiplier property
};

showPlayerHealth(player1.name, player1.health, player1.healthMultiplier);  // Step 4: Pass healthMultiplier as third argument
showPlayerHealth(player2.name, player2.health, player2.healthMultiplier);  // Step 4: Pass healthMultiplier as third argument




/* Further Adventures
 *
 * 1) Add a new property to the player objects
 *    called healthMultiplier.
 *
 * 2) Add a third parameter to the definition
 *    of the showPlayerHealth function
 *    called playerHealthMultiplier
 *
 * 3) Update the function so that the health
 *    displayed is first multiplied by
 *    the health multiplier.
 *
 * 4) Add the player's healthMultiplier property
 *    as a third argument to the two calls
 *    to the showPlayerHealth function.
 *
 */