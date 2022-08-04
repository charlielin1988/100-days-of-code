// *** the .forEach() method ***

// const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// fruits.forEach((fruit) => console.log('I want to eat a(n) ' + fruit));

//  *** the .map() method ***
// const animals = [
//   'Hen',
//   'elephant',
//   'llama',
//   'leopard',
//   'ostrich',
//   'Whale',
//   'octopus',
//   'rabbit',
//   'lion',
//   'dog'
// ];

// const secretMessage = animals.map((animal) => {
//   return animal[0];
// });
// console.log(secretMessage.join(' '));

// const bigNumbers = [100, 200, 300, 400, 500];

// const smallNumbers = bigNumbers.map((number) => {
//   return number / 100;
// });
// console.log(smallNumbers);

// *** the .filter() method ***

// const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// const smallerNumbers = randomNumbers.filter((randomNumber) => {
//   return randomNumber < 250;
// });

// console.log(smallerNumbers);

// const favoriteWords = [
//   'nostalgia',
//   'hyperbole',
//   'fervent',
//   'esoteric',
//   'serene'
// ];
// const longFavoriteWords = favoriteWords.filter((faveWord) => {
//   return faveWord.length > 7;
// });
// console.log(longFavoriteWords);

//  *** the .findIndex() Method ***

// const animals = [
//   'hippo',
//   'tiger',
//   'lion',
//   'seal',
//   'cheetah',
//   'monkey',
//   'salamander',
//   'elephant'
// ];
// const foundAnimal = animals.findIndex((animal) => {
//   return animal === 'elephant';
// });
// console.log(foundAnimal);

// const startsWithS = animals.findIndex((animal) => {
//   return animal[0] === 's';
// });
// console.log(startsWithS);

// *** the .reduce() Method ***

// const newNumbers = [1, 3, 5, 7];
// const newSum = newNumbers.reduce((accumulator, currentValue) => {
//   console.log('The value of accumulator: ', accumulator);
//   console.log('The value of currentValue: ', currentValue);
//   return accumulator + currentValue;
// }, 10);
// console.log(newSum);
// const cities = [
//   'Orlando',
//   'Dubai',
//   'Edinburgh',
//   'Chennai',
//   'Accra',
//   'Denver',
//   'Eskisehir',
//   'Medellin',
//   'Yokohama'
// ];
// const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

// console.log(
//   words.some((word) => {
//     return word.length < 6;
//   })
// );

// Use filter to create a new array
// const interestingWords = words.filter((word) => {
//   return word.length > 5;
// });
// Make sure to uncomment the code below and fix the incorrect code before running it

// console.log(
//   interestingWords.every((word) => {
//     return word.length > 5;
//   })
// );

// const cities = [
//   'Orlando',
//   'Dubai',
//   'Edinburgh',
//   'Chennai',
//   'Accra',
//   'Denver',
//   'Eskisehir',
//   'Medellin',
//   'Yokohama'
// ];

// const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
// cities.forEach((city) => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
// const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
// const word = cities.reduce((acc, currVal) => {
//   return acc + currVal[0];
// }, 'C');

// console.log(word);

// Choose a method that will return a new array
// const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value
// nums.some((num) => num < 0);
