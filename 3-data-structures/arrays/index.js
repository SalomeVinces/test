/* 
    ? Arrays
        - Denoted with [] brackets
        - Index starts at 0
        - Specific methods are avail for them

*/
//             0       1         2          3
let list = ["milk", "bread", "chicken", "coffee"];


console.log(list[2]); // output: chicken

// Checking length

console.log(list.length)

// Getting last element of array
console.log(list[list.length - 1]) // output: coffee

let avengers = ["Nick", 2, false, "Steve", "Bruce", ["Tony", 8, true]]

console.log(typeof avengers) // Wont work
console.log(avengers instanceof Array); // true if array

/* 
    Using a console log
    - Target Bruce 
    - Target the true
    - Using string interpolation, log "Hello, Nick" and another "Hello, Tony"
*/

console.log(avengers[4]) // Bruce

console.log(avengers[5][2]); // true

console.log(`Hello, ${avengers[0]}` , `Hello, ${avengers[5][0]}`); // Hello, Nick Hello, Tony

/* 
    ? Reference
        - Important to note, when an array is created it is being stored in memory
        - Assigning a new variable to the initial array will reference the same array in memory
        - It can be important when working with immutable data (data that shouldn't change), that we not alter things in which or where they originate
*/

let myPublicInfo = [ "Amit", 34 ];

let myPrivateInfo = myPublicInfo

myPrivateInfo.push("555-55-5555")

console.log(myPrivateInfo)

console.log(myPublicInfo);

/// ? Array Methods
let food = ["pecan pie", " Shrimp", "Quesadilla", "Cheese Cake", "Hot dog"]
// *.push() -adds an item to the end of an array
food.push("Pizza")

console.log("Push:", food);

// *.splice(target position, how many removed, replace with items here)
food.splice(1, 1, "Tacos")

food.splice( 1, 0, "steak")

console.log("SPLICE", food);

// *.slice() - Return what is 'sliced' from the array. Starting index, and the index of the item before you end

let sliced = food.slice(1, 3)

console.log(sliced);

// *pop()- Removes the last element from the array
food.pop()

console.log("POP:", food);

/// *.shift // Removes an item from the beginning of the array

food.shift()

console.log("SHIFT:", food);

// *.unshift // Inserts new element to the start of the array
food.unshift("Hamburger", "Salad")

console.log("UNSHIFT:", food);

// *.toString()

let rgb = ["red","green", "blue"]
console.log(rgb.toString());
console.log(typeof rgb.toString());

// *.split -Transforms a string into an array

let string = "Salo Vinces Vasquez";

console.log(string.split(" "))

// *.join - Transforms an array into a string
let sentence = ["My", "name", "is", "Bob."]

console.log(sentence.join(" "))

