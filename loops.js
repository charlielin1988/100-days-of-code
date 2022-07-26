//  *** Intro to loops ****

// const vacationSpots = ['Morocco', 'Prague', 'Ireland'];
// console.log(vacationSpots[0]);
// console.log(vacationSpots[1]);
// console.log(vacationSpots[2]);
// A loop would make this code more efficient and easier to iterate through a larger array

// *** For Loops ***

// for (let counter = 5; counter < 11; counter++) {
//   console.log(counter);
// }

// for (let counter = 3; counter >= 0; counter--) {
//   console.log(counter);
// }

// **** Looping Through Arrays ***
// const vacationSpots = ['Morocco', 'Prague', 'Ireland'];
// for (let i = 0; i < vacationSpots.length; i++) {
//   console.log('I would like to visit ' + vacationSpots[i]);
// }

// *** Nested Loops **
// const bobsFollowers = ['rudy', 'gene', 'linda', 'louise'];
// const tinasFollowers = ['gene', 'jimmyjr', 'sara', 'linda'];
// let mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(bobsFollowers[i]);
//     }
//   }
// }
// console.log(mutualFollowers);

// *** the while loop ***
// const cards = ['diamond', 'spade', 'heart', 'club'];
// let currentCard;
// while (currentCard != 'spade') {
//   currentCard = cards[Math.floor(Math.random() * 4)];
//   console.log(currentCard);
// }
//  **** do...while statements ****
// let cupsOfSugarNeeded = 4;
// let cupsAdded = 0;

// do {
//   cupsAdded++;
//   console.log(cupsAdded);
// } while (cupsAdded < cupsOfSugarNeeded);

// *** the break keyword ***

const rapperArray = ["Lil' Kim", 'Jay-Z', 'Notorious B.I.G', 'Tupac'];
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G') {
    break;
  }
}
console.log("And if you don't know, now you know");
