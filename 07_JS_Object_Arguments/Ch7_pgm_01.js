// Passing a function an object as an argument

var planet1, planet2;
var getPlanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

// Creating a second planet object
planet2 = {
    name: "Saturn",
    position: 6,
    type: "Gas Giant",
    radius: 58232,
    sizeRank: 2
};

// Updated getPlanetInfo function to include more information
getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position +
           "\nType: " + planet.type +
           "\nRadius: " + planet.radius + " km" +
           "\nSize Rank: " + planet.sizeRank + "\n";
};

// Log details of the first planet
console.log(getPlanetInfo(planet1));

// Log details of the second planet
console.log(getPlanetInfo(planet2));



/* Further Adventures
 *
 * 1) Create a second planet object.
 *
 * 2) Use getPlanetInfo to log details of
 *    the second planet.
 *
 * 3) Update the getPlanetInfo function to
 *    include more information about
 *    each planet.
 *
 */