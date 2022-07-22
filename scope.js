// **** intro to scope ****

// the body of a function is a block

// const logSkyColor = () => {
//   let color = 'blue';
//   console.log(color);
// }

// the body of an if statement is a block
// if(dusk) {
//   let color = 'pink';
//   console.log(color);
// }

// const city = 'New York City';
// logCitySkyline = () => {
//   let skyscraper = 'Empire State Building';
//   return 'The stars over the ' + skyscraper + ' in ' + city;
// };
// console.log(logCitySkyline());

// the function logCitySkyline can access both city variable and the skyscraper variable

// *** global scope***

// const color = 'blue';
// const returnSkyColor = () => {
//   return color;
// };
// console.log(returnSkyColor());
// the variable color exists outside of the function block, but can be accessed by the function because it has global scope

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};
console.log(callMyNightSky());
