/*
DATATYPES
*/

/**The two types of data are simple/primitive and complex
*
* Simple datatpes: Fixed in size
*                  Copied by value
*                  Inmutable
*
* Complex dataypes: Infinite in size
*                   Copied by reference
*                   Mutable
*/

/**
 * Copy by Value = Does not modify the original copy
 */

var a = 5;
var b = a;          // b = 5
b = 7;              // b = 7
console.log(a);     // a = 5

/**
 * Copy by Reference = Does modify the original copy
 */

let c = [1, 2, 3, 4, 5];
let d = c;          // d = [1, 2, 3, 4, 5]
d.push(6);          // d = [1, 2, 3, 4, 5, 6]
console.log(c);     // c = [1, 2, 3, 4, 5, 6]

// String Data Type - string of characters paired with ""

console.log('Datatype Stuudies Page'); // "Dataype Studies Page"

// Number Data Type - numerical value

console.log(25); // 25

// Boolean Data Type - truhty or falsey value

console.log(true); // true

// Null Data Type - represents an intentional abscense

let empty = null;
console.log(empty); // null

// Undefinded Data Type - when a something is not defined

let undie;
console.log(undie); // undefined

// NaN Data Type - property value representing Not a Number

let fruit = 'pear';
if (isNaN(fruit)) {
    console.log('This aint a number');  // true
}                                           

// Infinity - initial value of Number.POSITIVE_INFINITY.

console.log(Infinity); // Infinity
console.log(Infinity * 1); // Infinity

// -Infinity - initial value of Number.NEGATIVE_INFINITY.

let neg = (-1 / 0);
console.log(neg); // -Infinty

// Arrays - zero-indexed ordered list

let teamNumbers = [9, 41, 7, 13, 19, 1];
console.log(teamNumbers); // [9, 41, 7, 13, 19, 1]

// Objects - collection of data stored in key-value pairs

let teamPositions = {
    
    qb: 'brees',
    rb: 'kamara',
    fb: 'hill',
    wr1: 'thomas',
    wr2: 'ginn',
    coach: 'payton'
};

console.log(teamPositions); //object Object { qb: 'brees'.... }

// Functions - a set code that we can call and run at any point

function nameOfFunction(paramter){ 
    return paramter * paramter; // body of function  
}

nameOfFunction(5); // prints the result of the argument ran thru the body

// OR!!

let squared = (parameter) => {return parameter * parameter};
console.log(squared(5)); // 25


// Functions expressions are functions that are set to variables

let volume = function(length, width, height) {
    return length * width * height;
};

console.log(volume(3, 4, 4));  // 48