// An array of constructed objects

var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;

    planet.showPlanet = function () {
        var info = planet.name;
        info += ": planet " + planet.position;
        info += " - " + planet.type;
        console.log(info);
      };

    return planet;
};

var planets = [
    buildPlanet( "Jupiter", 5, "Gas Giant" ),
    buildPlanet( "Neptune", 8, "Ice Giant" ),
    buildPlanet( "Mercury", 1, "Terrestrial" )
];

planets.forEach(function (planet) {
    planet.showPlanet();
});

planets.forEach(function (planet, index) {
    planet.showPlanet();
    if (index < planets.length - 1) {
        console.log("--------------------");
    }
});


/* Further Adventures
 *
 * 1) Add two more planets to the planets array.
 *
 * 2) Run the program to display them.
 *
 * 3) Add code to visually separate each planet
 *    from the next.
 *
 */