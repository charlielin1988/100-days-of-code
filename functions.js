// *****function basics******

function getReminder() {
  console.log('Water the plants.');
}
// getReminder();

function greetInSpanish() {
  console.log('Buenas Tardes.');
}
// greetInSpanish();
// function sayThanks(name) {
//   console.log(
//     'Thank you for your purchase' +
//       ' ' +
//       name +
//       '! We appreciate your business.'
//   );
// }
//

// *****parameters and arguments*****
// parameters are the variables you're passing into the function Ex: width, height
// arguments are the actual values you're plugging into the function: Ex: 10, 6

// function sayThanks(name) {
//   console.log(
//     'Thank you for your purchase' +
//       ' ' +
//       name +
//       '! We appreciate your business.'
//   );
// }
// sayThanks('Cole');

// *****default parameters*****
// default parameters are a feature of ES6 that allow for a predetermined value in case there is no argument passed into the function, or the argument is undefined when the function is called

function greeting(name = 'stranger') {
  console.log(`Hello, ${name}!`);
}
// 'stranger' is our predetermined value here for the function, our default parameter
greeting('Nick');
greeting();
// this will call a the default value of 'stranger' since there is no argument passed into the function

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
  console.log(`${item1}, ${item2}, ${item3}`);
}
