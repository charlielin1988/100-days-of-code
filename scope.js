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

// let satellite = 'The Moon';
// let galaxy = 'The Milky Way';
// let stars = 'North Star';

// const callMyNightSky = () => {
//   return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
// };
// console.log(callMyNightSky());

//  **** block scope ***
// variables that are defined within a block of code can only be referenced within that block of code. they cannot be called outside of that block

// const logVisibleLightWaves = () => {
//   let lightWaves = 'Moonlight';
//   console.log(lightWaves);
// };
// logVisibleLightWaves();-----> Moonlight

// console.log(lightWaves); ----> this throws a reference error, because the variable cannot be called outside of the block scope of the function

//  *** scope pollution ***
// having too many global variables can make it difficult to keep track of different variables or can cause collisions with local variables and make for errors

// let satellite = 'The Moon';
// let galaxy = 'The Milky Way';
// let stars = 'North Star';

// const callMyNightSky = () => {
//   stars = 'Sirius';
//   return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
// };
// console.log(callMyNightSky());
// console.log(stars);
// stars was reassigned to Sirius, changing the global value, but it's not clear what exactly happened

//  *** practice good scoping ***

// if a variable doesn't need to exist outside of a block, it shouldn't

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};
logVisibleLightWaves();
