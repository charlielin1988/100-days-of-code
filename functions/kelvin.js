const kelvin = 0;
// console.log(kelvin);
//kelvin is our temperature; it will remain constant

const celsius = kelvin - 273;
// console.log(celsius);
// to get from kelvin to celsius, we subtract 273 from kelvin

let fahrenheit = celsius * (9 / 5) + 32;
// console.log(fahrenheit);

fahrenheit = Math.floor(fahrenheit);
// console.log(fahrenheit);
// we use the Math.floor() to round the decimal answer to the nearest whole number
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33 / 100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton. `);
