let input = 'if i only could id make a deal with god';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  // console.log('i is ' + i);
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      // console.log(input[i]);
      resultArray.push(input[i]);
    }
  }
}
// console.log(resultArray);
let resultString = resultArray.join('').toUpperCase();

console.log(resultString);
