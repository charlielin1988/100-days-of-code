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
// let spaceship = {
//   'Fuel Type': 'Turbo Fuel',
//   homePlanet: 'Earth',
//   color: 'silver',
//   'Secret Mission': 'Discover life outside of Earth.'
// };

// spaceship.color = 'Glorious Gold';
// spaceship.numEngines = 8;
// delete spaceship['Secret Mission'];

// console.log(spaceship);

// Methods

// let retreatMessage =
//   'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
// let alienShip = {
//   retreat() {
//     console.log(retreatMessage);
//   },
//   takeoff() {
//     console.log('Spim...Borp..Glix...Blastoff!');
//   }
// };
// alienShip.retreat();
// alienShip.takeoff();

// Nested Objects

// let spaceship = {
//   passengers: null,
//   telescope: {
//     yearBuilt: 2018,
//     model: '91031-XLT',
//     focalLength: 2032
//   },
//   crew: {
//     captain: {
//       name: 'Sandra',
//       degree: 'Computer Engineering',
//       encourageTeam() {
//         console.log('We got this!');
//       },
//       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
//     }
//   },
//   engine: {
//     model: 'Nimbus2000'
//   },
//   nanoelectronics: {
//     computer: {
//       terabytes: 100,
//       monitors: 'HD'
//     },
//     'back-up': {
//       battery: 'Lithium',
//       terabytes: 50
//     }
//   }
// };

// let capFave = spaceship.crew.captain['favorite foods'][0];
// console.log(capFave);

// spaceship.passengers = [{ firstName: 'John' }, {}];

// let firstPassenger = spaceship.passengers[0];
// console.log(firstPassenger);

// Pass By Reference
// let spaceship = {
//   'Fuel Type': 'Turbo Fuel',
//   homePlanet: 'Earth'
// };

// let greenEnergy = (spaceship) => {
//   spaceship['Fuel Type'] = 'avocado oil';
// };

// let remotelyDisable = (spaceship) => {
//   spaceship['disabled'] = true;
// };

// greenEnergy(spaceship);
// remotelyDisable(spaceship);

// console.log(spaceship);

// Looping Through Objects
