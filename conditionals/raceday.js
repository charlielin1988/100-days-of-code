let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;
if (early && age > 18) {
  raceNumber += 1000;
} else {
  raceNumber;
}
// console.log(raceNumber);

if (early && age > 18) {
  console.log(`Runner ${raceNumber} will run at 9:30 am.`);
} else if (!early && age > 18) {
  console.log(`Runner ${raceNumber} will run at 11:00 am.`);
} else if (age < 18) {
  console.log(`Runner ${raceNumber} will run at 12:30 pm.`);
} else {
  console.log(`Please see registration desk.`);
}
