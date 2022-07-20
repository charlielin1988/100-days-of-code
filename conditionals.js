// if and else coniditionals

// let sale = true;
// sale = false;
// if (sale === true) {
//   console.log('Time to buy!');
// } else {
//   console.log('Time to wait for a sale.');
// }

// comparison and multiple conditionals

// let hungerLevel = 7;
// if (hungerLevel > 7) {
//   console.log('Time to eat!');
// } else {
//   console.log('We can eat later!');
// }

// let mood = 'sleepy';
// let tirednessLevel = 8;
// if (mood === 'sleepy' && tirednessLevel === 8) {
//   console.log('time to sleep');
// } else {
//   ('not bed time yet');
// }

// truthy and falsy statements

// let wordCount = 4;
// if (wordCount) {
//   console.log(`Great! You've started your work!`);
// }

// let favoritePhrase = '';
// if (favoritePhrase) {
//   console.log('Cool cool cool');
// } else {
//   console.log('This string is definitely empty.');
// }

// let username = '';
// checks for empty string
// let defaultName;
// stores defaultName as a variable
// if (username) {
//   defaultName = username;
// } else {
//   defaultName = 'Stranger';
// }
// uses falsy and truthy conditionals to check if there is a username. If the string is empty, it will assign it the default name of 'Stranger'
// console.log(defaultName);

// we can abbreviate this code to the following

// let username = '';
// let defaultName = username || 'Stranger';
//  let the default name be the username, unless the username is empty, then assign the default name to 'Stranger'
// console.log(defaultName);

// let tool = 'marker';
// let writingUtensil = tool || 'pen';

// console.log(`The ${writingUtensil} is mightier than the sword.`);

// ternary operators

// let isNightTime = true;
// if (isNightTime) {
//   console.log('Turn on the lights!');
// } else {
//   console.log('Turn off the lights!');
// }

// we can abbreviate with ternary operators

// isNightTime
//   ? console.log('Turn on the lights!')
//   : console.log('Turn off the lights!');

// the condition if it's night time, is the first part, and the else statement is represent by the second part after the colon
// ternaries used for true/false statements

// let isLocked = false;
// if (isLocked) {
//   console.log('You will need a key to open the door.');
// } else {
//   console.log('You will not need a key to open the door.');
// }

//ternary form would look like this:
// let isLocked = false;
// isLocked
//   ? console.log('You will need a key to open the door.')
//   : console.log('You will not need a key to open the door.');

// let isCorrect = true;
// if(isCorrect) {
//   console.log('Correct!')
// } else {
// console.log('Incorrect!')
// }
// ternary form would be:

// let isCorrect = true;
// isCorrect ? console.log('Correct!') : console.log('Incorrect!');

// let favoritePhrase = 'Love That!';
// if(favoritePhrase === 'Love That!') {
//   console.log('I love that!');
// } else {
//   console.log(`I don't love that!`);
// }
//  ternary form would be:

// let favoritePhrase = 'Love That!';
// favoritePhrase === 'Love That!'
//   ? console.log('I love that!')
//   : console.log(`I don't love that!`);

let season = 'summer';

if (season === 'spring') {
  console.log(`It's spring! The trees are budding!`);
} else if (season === 'winter') {
  console.log(`It's winter! Everything is covered in snow. `);
} else if (season === 'fall') {
  console.log('Its fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log('Invalid season.');
}
