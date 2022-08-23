// Intro To Objects

// let spaceship = {
//   'Fuel Type': 'diesel',
//   color: 'silver'
// };

// let fasterShip = {
//   'Fuel Type': 'Turbo Fuel',
//   color: 'silver'
// };

// Accessing Properties

// let spaceship = {
//   homePlanet: 'Earth',
//   color: 'silver',
//   numCrew: 5,
//   flightPath: ['Venus', 'Mars', 'Saturn']
// };

// let crewCount = spaceship.numCrew;
// let planetArray = spaceship.flightPath;

// console.log(crewCount);
// console.log(planetArray);

// Bracket Notation
// let spaceship = {
//   'Fuel Type': 'Turbo Fuel',
//   'Active Mission': true,
//   homePlanet: 'Earth',
//   numCrew: 5
// };

// let propName = 'Active Mission';

// let isActive = spaceship['Active Mission'];

// console.log(spaceship[propName]);

// Property Assignment
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  color: 'silver',
  'Secret Mission': 'Discover life outside of Earth.'
};

spaceship.color = 'Glorious Gold';
spaceship.numEngines = 8;
delete spaceship['Secret Mission'];

console.log(spaceship);
