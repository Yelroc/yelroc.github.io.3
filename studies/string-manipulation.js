/**
 * STRING MANIPULATION
 */ 

/**
 * String manipulation is when we are trying to access certain parts of strings
 * or modify how the strings are printed to the console
 */

// Properties

let string = 'christopher';
let str = 'CORLEY';
let fullname = 'Christopher Isaac Corley';
let regex = /[A-Z]/g;


// String.length - finds the length of the string given

console.log(string.length); // 11

// METHODS!!!!!

// String.charAt() - finds character at index given 

console.log(string.charAt(3)); // 'i'

// String.concat() - combines strings given and returns it as ONE string

console.log(string.concat(' ', str)); // 'christopher CORLEY'

// String.endsWith() - checks if string ends with given value. returns boolean

console.log(string.endsWith('r')); // true

// String.startsWith() - determines if string starts woth a given value. return boolean

console.log(string.startsWith('c')); // true

// String.slice() - extracts a part of the string and returns new string, without 
// changing the original string

console.log(string.slice(5)); // topher

console.log(string.slice(-6)); // chris

// String.split('') - splits string into an array by individual character

console.log(str.split('')); // ['C', 'O', 'R', 'L', 'E', 'Y'];

// String.split(' ') - splits string of words into an array, with each word
// being an index in the array

console.log(fullname.split(' ')); // ['Christopher', 'Isaac', 'Corley']

// String.toLowerCase() - returns string as all lower case

console.log(str.toLowerCase()); // 'corley'

// String.toUpperCase() - returns string as all upeer case

console.log(string.toUpperCase()); // 'CHRISTOPHER'

// String.substring() - returns part of string between two given indexes

console.log(string.substring(0, 6)); // 'christ'

// String.match() - paired with Regex, can be used to see if a string contains
// other characters

console.log(fullname.match(regex)); // ["C", "I", "C"]

/**
 * Strings can also be manipulated with operators
 */

console.log(string + " " + str); // christopher CORLEY

/**
 * Template Literals also can be used to turn javascript expressions into strings
 * 
 * formatted as such : `${}`
 */
 
 let obj = {
     firstName: 'chris',
     lastName: 'corley'
 };
 
 let name = `${obj.firstName} ${obj.lastName}`;
 console.log(name); // chris corley