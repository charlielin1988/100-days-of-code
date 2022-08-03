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
