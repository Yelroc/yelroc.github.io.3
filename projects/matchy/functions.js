/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name){
    // for(let i = 0; i < animals.length; i++){
    //     if(animals[i].name === name){
    //         return animals[i];
    //     }
    // }
    // return null;
    
    return animals.reduce((match, animal) => {
        if(animal.name === name){
            return animal;
        } else {
            return match;
        }
    }, null);
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
    // for(let i = 0; i < animals.length; i++){
    //     if(animals[i].name === name){
    //         animals[i] = replacement;
    //     }
    // }
    
    animals.filter(animal => {
        if(animal.name === name){
            animals.splice(1, 1, replacement);
        }
    });
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){
    // for(let i = 0; i < animals.length; i++){
    //     if(animals[i].name === name){
    //         animals.splice(i, 1);
    //     }
    // }
    
    animals.filter(animal => {
        if(animal.name === name){
            animals.splice(animal, 1);
        }
    });
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === animal.name){
            return;
        } else if(animal.name.length < 0){
            return;
        } else if(animal.species < 0){
            return;
        } else {
            return animals.push(animal);
        }
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
