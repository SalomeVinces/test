// console.log("hello world")
// console.log("This is a text")
// console.log('This is also a text')
// console.log(`This is a text using string interpolation backsticks`)

// console.log("2023"+ "2023")
// console.log( 2023+2023)

// console.log("Salome" + "Vinces")
// console.log("Salome", "Vinces")

// console.log(`I am ${21} years old`)

// console.log("Salome"[2])

// console.log(typeof 123)
// console.log(Number.MAX_SAFE_INTEGER)

// console.log(Boolean(1)) //returns true
// console.log(Boolean(0)) //returns false

// console.log(Boolean("")) //false

// console.log(3 == "3"); //true 

// console.log(3 === "3") //compares them as they are

// let name = "Salome"

// console.log(name == "Salome")

// console.log(23!= "23")

let myName = ""

// if (!myName) {
//     // checks if the inverse of this expression is  true
//     console.log("no name");
// } else {
//     console.log(myName);
// }

// if (myName) {
//     console.log(myName);
// } else {
//     console.log("No name");
// }

// arrays

// let empty = new Array(58).fill("item");

// // console.log(empty)
// // // ["1", "2"]

// // let list = ["", "item2", "item3"]

// // let userprofile = new Object();

// // userprofile.name = "Salome"
// // userprofile.color = "red"
// // userprofile.age = "21"

// // console.log(userprofile)

// // let character = {
// //     name: "Salome"
// //     age: 21
// //     color: "blue"
// // }

// // variables (alocate data temporary)


// // let greeting = "hello world"

// // console.log(greeting) 

// // var firstName 

// // let firstName ="Salome"
// // firstName = "Alex"

// // const firstName = ""
// // firstName = "" (const would let error)

// let name = "Salome"
// let lastName = "VV"

// console.log(`${name} ${lastName}`)

// let address = "123 Main St, Salem NJ"


let fName = "Salome";
let lName = "VincesV";
let houseNumber = "2340";
let aptNumber = "APT C";
let street = "Lark St";
let cityState = "Oak Harbor, wa";
let postalCode = "98277";
console.log(postalCode);

let stamp = `My name and address is: ${fName} ${lName} \n ${houseNumber} ${street} ${aptNumber} \n ${cityState.slice(
    0,
    11
)} ${cityState.slice(12).toUpperCase()} ${postalCode}`;

console.log(stamp)
