const numbers = [1, 2, 3, 3, 2, 4, 9, 11, 4, 11];
const colors = ["red", "pink", "red", "blue", "black", "pink"];

const uniqueNumbers = [...new Set(numbers)];
const uniqueColors = [...new Set(colors)];
console.log(uniqueNumbers);
console.log(uniqueColors);

/* Set is a new data object introduced in ES6. The Set only
lets you store unique values of any type. When you
pass an array to a new Set(array), it will remove
duplicate values.
The spread syntax (...) is used to include all the items
of the Set to a new array. */
