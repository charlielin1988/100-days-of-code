const myAge = 33;
//my age

let earlyYears = 2;
//how old the dog is in human years

earlyYears = 2 * 10.5;
// console.log(earlyYears);

let laterYears = myAge - 2;
// console.log(laterYears);
//age without the first two years

laterYears *= 4;
// console.log(laterYears);
// later years of human age times the rate of dog aging

// console.log(earlyYears);
// console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;
// console.log(myAgeInDogYears);
// add early dog years to later years to get human age in dog years

myName = 'Charlie'.toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears} years old in dog years.`
);
// string interpolation to display the sentence with calculated variables.
