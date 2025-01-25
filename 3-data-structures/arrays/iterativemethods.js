/* 
    ? Iterative Methods
        - Do not destroy the initial array
        - Take in a callback function
        - Loop through arrays for us
        - Must have a return, except forEach
*/

let fruits = ["apple", "pear", "mango", "orange", "pineapple"];

let filteredFruits = fruits.filter(function (fruit) {
  if (fruit === "mango" || fruit === "pineapple") {
    return true;
  } else {
    return false;
  }
});

let filteredFruitsConcise = fruits.filter(
  (fruit) => fruit === "mango" || fruit === "pineapple"
);

console.log(fruits); // Unmodified
console.log(filteredFruitsConcise); // New Array containing filtered items

// Using function reference as a callback provided to the .filter
function removeMango(fruit) {
  let result = fruit !== "mango";
  return result;
}

let filteredFruit = fruits.filter(removeMango);

console.log(filteredFruit);

// console.log(fruits.filter((fruit) => !fruit.includes("apple"))) // New array with items that don't contain the substring "apple"

/* 
*       Challenge
        - How do you remove the 5s from an array
        - Store the result in new variable and console.log that variable
*/
let myNumberArray = [3, 5, 7, 5, 5, 5, 2, 7, 12, 5];

let removedFives = myNumberArray.filter(function (num) {
  if (num !== 5) {
    return true;
  }
});

console.log(removedFives);
console.log(myNumberArray.filter((num) => num !== 5));

let movies = [
  { name: "Top Gun 2", category: "Action" },
  { name: "Scary Movie 5", category: "Comedy/Horror" },
];

movies.push({ name: "It", category: "Horror" });
movies.push({ name: "Get Out", category: "Horror" });
movies.push({ name: "Transformers", category: "Action" });

let actionMovies = movies.filter((movie) => movie.category === "Action");
// console.log(actionMovies);
let horrorMovies = movies.filter((movie) => movie.category.includes("Horror")); // Using includes it will check for this substring

console.log(horrorMovies);

// ? .find() - Gets the value if it exists in the array, undefined if not

let tmnt = [
  "Mikey",
  "Donnie",
  "Leo",
  "Ralph",
  "Splinter",
  "Shredder",
  "Baxter",
];

let character = "April";

// console.log(tmnt.find((c) => c === character));

tmnt.find((c, index) => {
  console.log("Character:", c);
  console.log("Index:", index);
});

// ? .at() - Will find a value that sits at the given index, can use negative numbers to reach the end of the array and work towards the start

console.log(tmnt.at(2)); // Will grab item at 2nd index
console.log(tmnt.at(-1)); // Will grab last value of the array

// ? .indexOf() - Will provide the index of a value, or -1 if it was not found

console.log(tmnt.indexOf("Amit")); // Output index of a value

// tmnt[1] = "Donatelo"

// console.log(tmnt);

// ? .map() - Will return back a brand new array, which cans any modifications

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let newNumArray = numbers.map((num) => {
  return num + 2;
});

console.log(newNumArray);

let cats = ["shorthair", "maine coon", "tabby"];

console.log(cats.map((cat) => cat[0].toUpperCase() + cat.slice(1)));

/*
    - First check if you are working with an array
    - Using a method, flip the values within the array 
    (what was in index 4 is now be in index 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
    
    hint: 
    - search something like "arrays", "javascript", "reverse"
    - look in your notes to see how we can check if something is an array
*/

let numberArray = [1, 4, 6, 743, 3, 2, 6, 87, 4343, 14];


if (numberArray instanceof Array) {
    numberArray.reverse().forEach((num) => {
        console.log(num)
    })
}

// Method Chaining 
// ? Palindrome checker 

let word = "racecar" 


console.log(word.split("").reverse().join("").toLowerCase() === word.toLowerCase());

let learners = [
    "Jamere",
    "Kevin",
    "Salo",
    "Camren",
    "Amy",
    "Noel",
    "Mohamadou",
];

/* 
    ! Challenge 🟢
    ?   .forEach() - Apply a task multiple times
          Given the list of learners...
            - Use the forEach loop to iterate through the array
            - Inside of the loop, log to the output window an interpolated string which prints out: "{learner}'s name is {X} letters long." 
              - Substituting {X} for the actual length of the learner's name
    !       [SPICY MODE]:🌶️🌶️🌶️
            - Create a variable to store your own name.
            - Within the loop, when it reaches your name print "Hey, I'm {learner} 🙌😄! And my name is {X} letters long!"
            - For all the other learners, keep the format the same as what it was above 
*/
  
let myName = "Amit";

learners.forEach((learner) => {
    let learnersLetters = learner.length
    if(myName === learner){
      console.log(`Hey, I'm ${learner}🙌😄! And my name ${learnersLetters} letters long!`);
    }else {
      console.log(`${learner}'s name is ${learnersLetters} letters long.`);
    }
})


/*
    ! Challenge 🟡 
    ?   .filter() - Apply conditional check to store values in a new array. 
          Given the list of learners...
            - Create a traditional function that will take in an array as an argument, and a letter.
            - Inside the function, use .filter to traverse through the array that was received.
            - The return should be a filtered array that has each learner whose name begins with the letter that was passed in.
              ex.) the letter "T" as input should return an array that contains all of the learners whose name begins with the letter "T":
                ["Tiffany","Tim","Tom"]
            - Call the function. Be sure to log the invocation, so the desired result can be seen in the output window.
  */

function myFilterFunc (array, letter) {
  return array.filter((learner) => {
      if (learner[0].toLowerCase() === letter.toLowerCase() ){
        return true
      } else {
        return false
      }
  })
}

const myArrowFilterFunc = (array, letter) => array.filter(l => l[0].toLowerCase() === letter.toLowerCase()) 

console.log(myFilterFunc(learners, "J"))
// console.log(myArrowFilterFunc(learners, "J"))

  /*
    ! Challenge 🔴
    ?   .map() - Apply action to store modified values in a new array
          Given the list of learners...
            - Create an arrow function that will take in the array of learners, and a message. ex) " is awesome! 😀"
            - Inside the function use the .map method on the array of learners to return back a new array.
              - Using the .map method, the returned array should store the value "{learner} ${message}" on each iteration`.
                ex) Final Output:
                  [
                    "Amit is awesome! 😀",
                    "Ben is awesome! 😀",
                  ]
            - Call the function. Be sure to log the invocation, so the desired result/return can be seen in the output window.
  */
  

const myMapperFunc = (array, message) => {
    return array.map(l => {
      return `${l} ${message}`
    })
}

console.log(myMapperFunc(learners, "is awesome! 😀"))


/*
    ! Challenge 🌶️🥵🔥
    ?   .reduce()  - Apply action for each value, resulting in a single valued outcome
          Given the list of learners...
            - Create an arrow function called allLetters that will take in the array of learners.
            - Using the reduce method within the function, gather the sum of the all letters from each learner's name.
            - Have the allLetters function return the value
            - Log the output, "Total letters: X letters" , where X represents the sum of all the letters from each learners name.
*/

const allLetters = (array) => {
  return array.reduce((letters, learner) => {
         letters += learner.length
         return letters
  }, 0)
}

// let sumOfAllLetters = allLetters(learners)

console.log(`Total letters: ${allLetters(learners)} letters`)
