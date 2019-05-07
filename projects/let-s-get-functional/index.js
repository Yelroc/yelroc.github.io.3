// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-yelroc');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    // create a counter 
    let counter = 0;
    // filter through array
    array.filter(person => {
        // if persons gender is male then increment counter
        if(person.gender === 'male'){
            counter ++;
        }
    });
    // return counter
    return counter;
};

var femaleCount = function(array){
    // create a count variable to use reduce on the array
    let count = array.reduce((total, person) => {
        // if the persons gender is female increment the total
        if(person.gender === 'female'){
            total += 1;
        }
        return total;
    }, 0);
    // return count
    return count;
};

var oldestCustomer = function(array){
    // create an oldest name variable to empty string
    let oldestName = '';
    // create an oldent age variable to 0
    let oldestAge = 0;
    // filter thorugh array
    array.filter(person => {
        // if the persons age is greater than the oldest age, set persons name and age to oldesnt name and age
        if(person.age > oldestAge){
            oldestName = person.name;
            oldestAge = person.age;
        }
    });
    // return the oldest name
    return oldestName;
};

var youngestCustomer = function(array){
    // create a youngestName variable to empty string
    let youngestName = '';
    // create a youngestAge variabel to 9999
    let youngestAge = 9999;
    // filter through array
    array.filter(person => {
        // if persons age is smaller than youngestAge, then set that persons age and name to youngest name and age
        if(person.age < youngestAge){
            youngestName = person.name;
            youngestAge = person.age;
        }
    });
    // return youngestName
    return youngestName;
};

var averageBalance = function(array){
    // create a average variable to reduce array
    let average = array.reduce((seed,person,array) => {
        // return the seed. the seed will be added to each persons balance with non numbers replaced;
        return seed + parseFloat(person.balance.replace('$', '').replace(',', ''));
    }, 0);
    // return the average and divide by the array.length
    return average / array.length;
};

var firstLetterCount = function(array, letter){
    // create a count variable
    // filter through array
    // let count = array.filter(person => {
    //     // if the persons first letter of their name === given letter return that person
    //   if(person.name.charAt(0).toUpperCase() === letter.toUpperCase()){
    //       return person;
    //   } 
    // });
    // // return the count as a number
    // return count.length;
    let count = array.reduce((a, b) => {
        let name = b.name.charAt(0).toUpperCase();
        let check = letter.toUpperCase();
        if(name === check){
            a++;
        }
        return a;
    }, 0);
    return count;
};

var friendFirstLetterCount = function(array, customer, letter){
    // create a counter variable
    let count = 0;
    // loop through array
    array.forEach(person => {
        // if the persons name is equal to the customers, loop through that persons friends
        if(person.name === customer){
            person.friends.filter(friend => {
                // if the friends first letter is equal to the letter, increment count
                if(friend.name.charAt(0).toUpperCase() === letter.toUpperCase()){
                    count += 1;
                }
            });
        }
    });
    // return count
    return count;
};

var friendsCount = function(array, name){
    // create a count array
    let count = [];
    // filter through array
    array.filter(person => {
        // loop thorugh each persons.friends
        person.friends.forEach(friend => {
            // if the friends name === the name, push the friends name into the count array
            if(name === friend.name){
                count.push(person.name);
            }
        });
    });
    // return count array
    return count;
};

var topThreeTags = function(array){
    let topThree = [];
    let tagCounter = {};
    for(let j = 0; j < array.length; j++){
        for(let i = 0; i < array[j].tags.length; i++){
            if(!tagCounter.hasOwnProperty(array[j].tags[i])){
                tagCounter[array[j].tags[i]] = 1;
            } if(tagCounter.hasOwnProperty(array[j].tags[i])){
                tagCounter[array[j].tags[i]] += 1;
            }
        }
    }
    let sorting = [];
    for(let key in tagCounter){
        sorting.push([key, tagCounter[key]]);
    }
    let sortedTags = sorting.sort((a, b) => a[1] - b[1]);
    let topThreeTagsArray = sortedTags.slice(sortedTags.length - 3);
    topThree.push(topThreeTagsArray[0][0], topThreeTagsArray[1][0], topThreeTagsArray[2][0]);
    return topThree;
};

var genderCount = function(array){
    let genders = array.reduce((count, person) => {
        if(person.gender === 'male'){
            count.male = (count.male || 0) + 1;
        } if(person.gender === 'female'){
            count.female = (count.female || 0) + 1;
        } if(person.gender === 'transgender'){
            count.transgender = (count.transgender || 0) + 1;
        }
        return count;
    }, {});
    return genders;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
