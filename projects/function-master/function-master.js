//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // create values array
    let values = [];
    // loop through the object
    for(let key in object){
        // push values into values array
        values.push(object[key]);
    }
    // return array
    return values;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // create keys array
    let keys = [];
    // loop throught object keys
    for(let key in object){
        // push keys into keys array
        keys.push(key);
    }
    // return array join as a string
    return keys.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // create array for the values
    let values = [];
    // loop through the array
    for(let key in object){
        // check to see if the values are strings
        if(typeof object[key] === 'string'){
            // push the string values into values array
        values.push(object[key]);
        }
    }
    // return values array joined into a string
    return values.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // check if collection is array
    if(Array.isArray(collection) === true){
        return 'array';
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // use template literals to get the first letter caps and the rest of the word
    let name = string.charAt(0).toUpperCase() + string.slice(1);
    return `${name}`;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // split string into an array of strings
    let str = string.split(' ');
    // map through each array and use template literals to get first letter caps and the rest of the word for each element
    let caps = str.map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`);
    // return mapped array joined back as strings
    return caps.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // use template literals to get objects name capitalized
    let name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    return `Welcome ${name}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // use template literals to get object names capitalized and the species capitalized
    let name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    let species = object.species.charAt(0).toUpperCase() + object.species.slice(1);
    return `${name} is a ${species}`;
    
    //return `${object.name.charAt(0).toUpperCase()}${object.name.slice(1)} is a ${object.species.charAt(0).toUpperCase()}${object.species.slice(1)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // make a variable to represent object.noises
    let noises = object.noises;
    // if noises array doesn't exist or has no elements
    if(noises === undefined || noises.length === 0){
        // return there are no noises
        return 'there are no noises';
    } else {
        // return the noises array as a string
        return noises.join(' ');
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // use .include method to check to see if string contains a word
    return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // push name into friends array inside the object
    object.friends.push(name);
    // return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // make a variable to represent object.friends
    let friends = object.friends;
    // if frends array don't exist return false
    if(friends === undefined){
        return false;
    // if friends array doesn't include the input name return false;
    } if(friends.includes(name) === false){
        return false;
    } else {
        // return true after all edge cases
        return true;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // make friends array
    let friends = [];
    // map over array
    array.map(person => {
        // check to see if each persons friend is freinds with the input name and check to see if that person is not the input name
        if(person.friends.includes(name) === false && person.name !== name){
            // push that person into friends array
            friends.push(person.name);
        }
    });
    // retuern friends array
    return friends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // dynamically add key-value pair to object
    object[key] = value;
    // return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // loop through the object
    for(let key in object){
        // map through array 
        array.map(element => {
            // if object key is the same as the element, 
            if(element === key){
                // delete it from the object
                delete object[key];
            }
        });
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // create an array
    let unique = [];
    // map through array
    array.map(element => {
        // see if the index of the element is -1, means that its not in the array
       if(unique.indexOf(element) === -1){
           // push element into array
           unique.push(element);
       } 
    });
    // return array
    return unique;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}