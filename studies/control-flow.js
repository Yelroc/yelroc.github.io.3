/*
* CONTROL FLOW
*/

/* A set of statements, specifically control flow, that lets you test mutiple
* conditions
*/

/* Block code - The code inside the curly brakcets for If statements.
* Condition Statements - directing your code based on conditions. 
*                         Each condition is an expression.
*
* condition 1 --- if true --- action 
*             --- if false
* condition 2 --- if true --- action
*             --- if false
*             default action
*/

/* If-Else Statments
*
* If- Else statements test a set of conditions and if they are false 
* then the else condition is executed
*
* Else if statements are used to perform different actions based on 
* the different conditions
*/

if (6 === 7) {
    console.log(`No`);
} else if (2 === 2) {
    console.log(`Good`); // Stops here and prints "Good" condition is true
} else if ('2' == 2) {
    console.log(`Good aswell`);
} else {
    console.log(`Not working`);
}

/* Switch statements
*
* They are a type of conditional statement that will evaluate an expression 
* against multiple possible cases and execute one or more blocks of 
* code based on matching cases.
*
* Use switch statements instead of if-else statements when wanting to test
* multiple conditions that might have the same return.
*
* switch (expression) {
    case x:
         execute case x code block
        break;
    case y:
         execute case y code block
        break;
    default:
         execute default code block
}
*/

var expr = 'Nikes';
switch(expr) {
    case 'Adidas':
        console.log('Adidas makes good running shoes');
        break;
    case 'Nikes':
        console.log('Nikes are perfect fro everything');
        break;
    case 'Jordans':
        console.log('Jordans makes expensive balling shoes');
        break;
    default:
        console.log("Go buy some crocs then!");
}   