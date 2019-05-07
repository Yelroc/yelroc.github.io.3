/* Types of operators
*
*/

// Assignment operators assign the value of the RIGHT operand to the LEFT

var x = 10;
var y = 5;
var z = '10'; 
 
console.log(x = y);  // 5
console.log(x += y); //x = x + y   addition assignment... 15
console.log(x -= y); //x = x - y   subtraction assignment... 5    
console.log(x *= y); //x = x * y   multiplication assignment... 50
console.log(x /= y); //x = x / y   division assignment... 2

/* Comparions operators compare the operands and returns a boolean based on 
* whether the comparion is true or false.
* Javascript will usually convert operands to the same datatype to compare
*/


console.log(x > y); // true... 10 > 5
console.log(x < y); // false... 10 < 5
console.log(x >= y); // true... 10 >= 5
console.log(x <= y); // false... 10 <= 5
console.log(x == z); // true... 10 == '10'    
console.log(x === z); // false... 10 === '10'     
console.log(x != y); // true... 10 != 5
console.log(x != z); // false... 10 != '10'      
console.log(x !== y); // true... 10 !== 5
console.log(x !== z); // true... 10 !== '10'    

/* Arithmethic operators are math calcutations
*/

console.log(x + y); // 10 + 5 = 15
console.log(x - y); // 10 - 5 = 5
console.log(x * y); // 10 * 5 = 50
console.log(x % y); // 10 / 5 = 2   

/* Increment operators add one to that value, but when written 
* different have different effects
*/

console.log(x++); // 10
console.log(x); // 11

/*
* When coded ' x++ '. It adds one to the original value and 
* returns the original value, but the new value is now assigned to that variable.
*/

console.log(++x); // 11
console.log(x);  // 11

/*
* When coded ' ++x ' It adds one to the original value and 
* that new value is return AND assigned to the variable. The original variable 
* is erased.
*/

/* Logical operators are typically used with boolean values. 
*  They either return a boolean value or a given expression
*/

// && = AND     || = OR

var age = 23;
var diploma = 'yes';

if (age >= 18 && diploma == 'yes') { 
  console.log("good"); // true... both conditions have to be met
}
    
if (age >=25 || diploma == 'yes') { 
    console.log("good"); // true... one of the conditions are met
}

/* Conditional operators is the only ternary operator, requiring 3 operands. 
* This operator can have one of two values based on the condition
*
* (conditional ? value1 : value2);
*
* If the condition is TRUE, then value1 is returned, however 
* if the condition is FALSE, then value2 is returned.
*/

var patDownOne = false;
var patDownTwo = false;
var access = patDownOne ? "Wait" : patDownTwo ? "Wait" : "Go and enjoy";

console.log(access); // "Go and enjoy"

/*
* Typeof operator consoles the data type of the inputted value
*
* For some (array, null, date) typeof returns Object object, therefore
* other methods must be used, to determine their type.
*/

var str = "string";
var num = 5;
var bool = false;
var arr = [5, 4, 3, 2, 1];
var obj = {one: 1, two: 2, three: 3};
var func = (x) => (x * x);
var date = Date;
var nully = null;


console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean
console.log(typeof obj); // object
console.log(typeof func); // function
console.log(typeof arr); // object
console.log(typeof date); // object
console.log(date instanceof Date); // date
console.log(typeof nully); // object
console.log(nully === null); // null

/*
* Delete operator deletes an object, an object's property, or an element at 
* a specified index in an array.
*/ 

var jurassic = {
    movie1: "Jurassic Park",
    movie2: "Jurassic Park 2",
    movei3: "Jurassic Park 3",
    movei4: "Jurassic World"
};

delete jurassic.movie3;