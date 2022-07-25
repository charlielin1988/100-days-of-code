// **** intro to arrays ****
// example 1:

// let newYearsResolutions = [
//   'Keep a journal',
//   'Take a falconry class',
//   'Learn to juggle'
// ];
// console.log(newYearsResolutions);

// const hobbies = ['reading', 'baking', 'witchcraft'];
// console.log(hobbies);

// **** accessing items in an array ****

// const famousSayings = [
//   'Fortune favors the brave.',
//   'A joke is a very serious thing.',
//   'Where there is love there is life.'
// ];

// let listItem = famousSayings[0];
// console.log(famousSayings[0]);
// console.log(famousSayings[2]);

// **** update elements ****

// let groceryList = ['bread', 'tomatoes', 'milk'];
// groceryList[1] = 'avocados';
// console.log(groceryList);

// **** arrays with let and const ****

// let condiments = ['ketchup', 'mustard', 'soy sauce', 'Sriracha'];
// condiments[0] = 'mayo';
// console.log(condiments);
// condiments = ['mayo'];
// console.log(condiments);

// const utensils = ['fork', 'knife', 'chopsticks', 'spork'];
// utensils[3] = 'spoon';
// console.log(utensils);

// *** the .length property ***

// const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
// console.log(objectives.length);

// *** the .push() Method ***

// const chores = ['wash dishes', 'do laundry', 'take out trash'];
// chores.push('press tofu', 'wash fruit');
// console.log(chores);
// **** the .pop() Method ***

// const chores = [
//   'wash dishes',
//   'do laundry',
//   'take out trash',
//   'mop floors',
//   'cook dinner'
// ];
// chores.pop();
// console.log(chores);

// *** more array methods ***

// const groceryList = [
//   'orange juice',
//   'bananas',
//   'coffee beans',
//   'brown rice',
//   'pasta',
//   'coconut oil',
//   'plantains'
// ];
// groceryList.shift();
// console.log(groceryList);
// groceryList.unshift('popcorn');
// console.log(groceryList);

// console.log(groceryList.slice(1, 4));

// groceryList.indexOf('pasta');
// const pastaIndex = groceryList.indexOf('pasta');
// console.log(pastaIndex);

// *** arrays and functions ***

// const concept = ['arrays', 'can', 'be', 'mutated'];
// function changeArr(arr) {
//   arr[3] = 'MUTATED';
// }
// changeArr(concept);
// console.log(concept);

// function removeElement(newArr) {
//   newArr.pop();
// }
// removeElement(concept);
// console.log(concept);
