/* 
    ? Array Destructuring
        -Syntax is on the left side of the assignment operator(=)
        - Great for pulling info out of an array, and assigning data to its own variable
*/

const fullName = ["Jane", "Doe"];

const [first, last] = fullName 

console.log(first);
console.log(last);

// ? Spread Operator
/* 
    -Denoted by three consecutive periods ...
    - Pulls out all of the elements of an array and give them to you as a standalone list of elements

    const fullName = ["Rocket", "Racoon"]

    ...fullNmae // "Rocket", "Racoon"

    const element = ...fullName
*/

const marvelHero =["Captain", "America"]

console.log(...marvelHero);

const copiedFullName = [...fullName]

copiedFullName.push("Smith");

console.log({fullName});
console.log({copiedFullName});

const prices = [10.99, 5.99, 3.99, 6.59]

console.log(Math.min(...prices));


/* 
    ?Rest
        -will grab the remaining items
*/

const testArray = [
    "Jane",
    "Doe",
    "Mrs",
    {month: 3, date: 22, year: 1973},
    "testOne",
    2,
    "test3",
    44,
    true,
    false
]

const [fName, lName, , birthdate, , , ...rest ] = testArray;

console.log({fName});
console.log({lName});
console.log({birthdate});

console.log({rest});

const [, , , dob] = testArray

console.log({dob});

let arr1 = ["Salo"]

let arr2 = ["Vinces"]

let myNameArray = [...arr1, ...arr2]

console.log({myNameArray});

let myPublicInfo = ["Salo", 21]

let socialSecurity = "777-77-777";

let myPrivateInfo = [...myPublicInfo, socialSecurity]

console.log({myPublicInfo});
console.log({myPrivateInfo});



