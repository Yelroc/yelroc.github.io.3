/*
* FUNCTIONS
*
* Functions are a set of statements that perform an action. To use a 
* function you must define it in the scope you are calling it in.
*/

function greeter(name) {
    console.log("Wazzam"); // Defining a function***NAME IS A PARAMETER
}

greeter(); // Calling a function

function nolaGreeter(name) {
    console.log("Wazzam " + name + ", whats poppin")
}

nolaGreeter('chris'); // When calling a function you must replace the 
                      // parameter, with an argument.

/*
* Functions consist of 4 parts
*
* The function keyword = similar to var
* The function name = what we are calling the particular function
* The parameters = placeholders in the function name and function body that we
*                  will later replace with arguments when calling the function
* The body = enclosed in { }, this is where the action of the function is coded. 
*/

/* Closures are a function with access to the parent scope even after the 
* parent function has closed.
*/

var globalVar = 1;

function closure(nested) {
    var blockVar = 2 + globalVar;
    return blockVar;
}
/* Utilized also to return functions from functions. It keeps nested variables 
* accessible.
*/

function closureMaker() {
    var outerVar = 5;
    return function() {
        return outerVar * 2; // Variable doesn't get modified outside the scope
    };
}

/*
* Function Scope
*
* Function scope is what is accessbile inside the function. 
*/

/*
* Function Expressions
* 
* Function expressions are functions set to variables.
*/

var multiply = function (x, y) {
  return x * y;  
};
console.log(multiply(4, 6)); // 24

/*
* Arrow Functions
*
* ES6 shorthand for writing functions. Removes the function keyword and curly brackets
*/

let multiplyByFive = x => x * 5;
console.log(multiplyByFive(5)); // 25;