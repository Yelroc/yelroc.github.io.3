/* 
*LOOPS
*
* Loops repeat a code for a set amount of times. There are various 
* types of loops for various situations.
*
* 1) For Loops
*
* For loops run until a specific condition evaluates to be false.
* ex) for (start condition; stop condition; increment){
*            console.log(var)};
*
*/

// Looping through letters array and logging every letter
var letters = ['a', 'b', 'c', 'd'];
for (var i = 0; i < letters.length; i++) {
    console.log(letters[i]); // 'a', 'b', 'c', 'd'
}


// Looping thourgh letters array and logging ever letter in reverse order
for (var i = letters.length - 1; i >= 0; i--) {
   console.log(letters[i]); //'d', 'c', 'b', 'a'
}


// Looping 0 thru 10
for (var i = 0; i <= 10; i++) {
    console.log(i); // 0,1,2,3,4,5,6,7,8,9,10
}


// Looping 10 thru 0
for (var i = 10; i >= 0; i--) {
    console.log(i); // 10,9,8,7,6,5,4,3,2,1,0
}

/* 
* 2) While loops
*
* While loops run until the specified condition evaluates to be false.
* ex) while(condition) {
    increment
    console.log(var)
}
*/

// Looping age thru 30. BEWARE OF STOP CONDITION. COULD CAUSE INFINITE LOOP
var age = 22;
while (age < 30) {
    age++;
    console.log(age); // 23,24,25,26,27,28,29
}    


// Looping thru an array
var randomStuff = ["apple", 3.14, true, false, "chris"];
var x = 0;
while (x < randomStuff.length) {
    console.log(randomStuff[x]); // apple, 3.14, true, false, chris
    x++;
}

/*
* While loops can be advantageous over for loops because they dont always have
* to be hard-coded.
*/

/*
*
*
* 3) For-In loops
*
* For in loops, loop over objects. Allows us to use the keys to extract the 
* values out of the object.
*
* ex) for (var param IN object) {
    console.log(var)
}
*/

var data = {
    name:'tia',
    race: 'black',
    female: true
};

for (var elem in data) {
    console.log(elem); // name, race, female
}
for (var elem in data) {
    console.log(data[elem]); // tia, black, true......... 
}
