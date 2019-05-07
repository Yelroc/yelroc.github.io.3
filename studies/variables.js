/*
* VARIABLES:
*
* To hold things in memory during the life-cycle of a program, we can use 
* variables. Variables are named identifiers that can point to values 
* of a particular type, like a Number, String, Boolean, Array, Object or 
* another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
* 
* 1. To create a variable we use the keyword, var, let and const followed 
* by a name (id or alias) for our variable.
* 
* 2. There are 2 phases of using variables: declaration and initialization 
* (or assignment).
*/

// 1. declaration //

var myName;
let yourName;

//const ourName; Const MUST be assigned at declaration

/*
* At the declaration phase, the variable myName is undefined because we 
* have NOT initialized it to anything
*/

console.log(myName); // prints => undefined
console.log(yourName); // prints => undefined


// 2. initialization or assignment //
myName = 'john';
yourName = 'andy';
console.log(myName); // prints => john
console.log(yourName); // prints => andy

// 3. re-assignment //
myName = 'bob';
yourName = 'connor';
console.log(myName); // prints => bob
console.log(yourName); // prints => connor

// NOTE: We can assign and re-assign anything to a variable - we 
// cannot do this with constants 

var myVariable = 1;
myVariable = "someString";
console.log(myVariable);

let yourVariable = 2;
yourVariable = 'thisString';
console.log(yourVariable);
/* Const !!!
*
* Const variables can only be assigned once and NEVER reassigned.
*/

const paintColor = 'red';
console.log(paintColor);

// paintColor = blue... Error!! const cannot be reassigned

/*
* HOISTING
*
* Hoisting = Variable declaration taken to the top of their scope. 
* 
* Variables hoisted by name only
*
* This means variables can be declared anywhere, available anywhere, 
* but NO VALUE UNTIL ASSIGNED
*
* Var declared variables are hoisted outside of their current scope
* Let and Const declared variables are only hoisted withing their scope
*/

                            
/* Variable Declaration Scopes
*
* Var = Reassignable, Global and Local scope 
* Let = Reassignable, Block scoped
* Const = Un-changeable, Blocked scoped
*/

console.log(name);
var name = 'chris'; // undefined

/* On first run, 'var name' is hoisted to the top and without the assignment
* then the code is run.
*/
