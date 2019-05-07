// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = value => value;

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    // if value is array return array
  if(Array.isArray(value) === true){
      return 'array';
      // if value is equal to null, return null
  } else if(value === null){
      return 'null';
  } else {
      // else return typeof value
      return typeof value;
  }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
    // if array isn't an array and number undefiend is less than 0, return new array
    if(!Array.isArray(array) || number < 0){
        return [];
        // if number isn't given or not a number return first element
    } else if(number === undefined || isNaN(number) === true){
        return array[0];
    }
    // else return the array slicing off the the given number
        return array.slice(0, number);
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){
    // if array isns't array or number is less than 0 return new array
    if(!Array.isArray(array) || number < 0) {
        return [];
        // if number isn't given or isn't a number return the last element in array
    } else if(number === undefined || isNaN(number) === true) {
        return array[array.length - 1];
        // if number is bigger than array length, return the array
    } else if(number > array.length) {
        return array;
    }
    // else return array slicing from the end 
    return array.slice(array.length - number);
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    // loop throuhg array
  for(let i = 0; i < array.length; i++){
      // if element equals value return that value's index
      if(array[i] === value){
          return i;
      }
    }
    // if no matches return -1
    return - 1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    // if the index of the given value is -1, return false, otherwise return true
    return _.indexOf(array, value) === -1 ? false : true;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, action){
    // create a new array
    let array = [];
    // determine if collection is an array
    if(Array.isArray(collection)){
        // loop through array
        for(let i = 0; i < collection.length; i++){
            // apply test function to the element, index, and array
            if(action(collection[i], i, collection)){
                // push element, index, array into newly created array
                array.push(collection[i], i, collection);
            }
        }
    } else {
        // loop through object
        for(let key in collection){
            // apply action to value, key, and object
            if(action(collection[key], key, collection)){
                // push value, key, and object into newly created array
                array.push(collection[key], key, collection);
            }
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
    // create an array
  let unique = [];
  // loop through the array using each
    _.each(array, function(element){
        // use index of to see whether the element is in the unique array
        if(_.indexOf(unique, element) === -1){
            // if it isn't, push the element into it.
            unique.push(element);
        }
    });
    // return the unique array
    return unique;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, action){
    // create an array with the filter elements
    let filtered = [];
    // loop through array using filter
    _.each(array, function(e, i, a){
        // if the action applied to the element, index, and array have a return value of true push into filtered array
        if(action(e, i, a) === true){
            filtered.push(e);
        }
    });
    // return filtered array
    return filtered;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, action){
    // created a rejected elements array
    let rejected = [];
    // loop through array with each
    _.each(array, function(e, i, a){
        // if the action applied to the element, index, array has a return value of false, push into rejected array
        if(!action(e, i, a)){
            rejected.push(e);
        }
    });
    // return rejected array
    return rejected;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, action){
    // create an array to store both truthy and falsey arrays
    let parted = [];
    // create an array for the truthy values
    let truthy = [];
    // create an array for the falsey values
    let falsey = [];
    // filter through he array
    _.filter(array, function(e, i, a){
        // if action applied to the element, index, array return a truthy value push into truthy array
      if(action(e, i, a)){
        truthy.push(e);
      }
    });
    // reject through array
    _.reject(array, function(e, i, a){
        // if action applied to the element, index, array return a falsey value push into falsey array
      if(!action(e, i, a)){
        falsey.push(e);
      }
  });
  // return the parted array with the truthy and falsey arrays concatenated
  return parted.concat([truthy], [falsey]);
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, action){
    // create an array for the mapped elements
    let mapped = [];
    // loop through array using each
    _.each(collection, function(e, i, a){
        // apply action to the element, index, and array and push them into mapped array
        mapped.push(action(e, i, a));
    });
    // return mapped array
    return mapped;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop){
    // create an array for the properties
    let props = [];
    // map through the array
    _.map(array, function(e, i, a) {
        // push the properety of every element into the props array
        props.push(e[prop]);
    });
    // return the props array
    return props;
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, action){
    // create an array for the results
    let results = [];
    // loop the collection
    _.each(collection, function(e, i, a){
        // if function is not given return true or false for each element
        if(action === undefined){
            if(e){
                results.push(true);
            } else {
                results.push(false);
            }
            // if the action applied on the element, index, array equals true push true into results array
        } else if (action(e, i, a) === true) {
            results.push(true);
            // if the action applied to the element, index, array equals false push false into the results array
        } else if (!action(e, i, a)) {
            results.push(false);
        }
    });
    // using contains, see if the results array doesn't contain any falsey values. 
    return !_.contains(results, false);
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, action){
    let results = [];
    _.each(collection, function(element, index, array) {
        if (!action) {
            if (element) {
                results.push(true);
            } else {
                results.push(false);
            }
        } else if (action(element, index, array) === true) {
                results.push(true);
        } else if (action(element, index, array) === false) {
                results.push(false);
        }
    });
    return _.contains(results, true);

};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, action, seed){
    // loop through the array
    _.each(array, function(e, i, a){
        // if seed is undefiend, the seed equals the first element
        if(seed === undefined){
            seed = array[0];
            // if there is a seed, the seed equals, the action applied to the seed, element, and index
        } else if(seed){
            seed = action(seed, e, i);
        }
    });
    // return the seed
    return seed;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object){
    // loop through the arguments
    _.each(arguments, function(e, i, a){
        // using object.assign, assign each element to the object
        Object.assign(object, e);
    });
    // return the object
    return object;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
