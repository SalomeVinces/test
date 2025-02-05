let dog = {
    name : "Pepe",
    color: "Brown",
    speak: function () {
        console.log(`The ${this.color} dog named ${this.name} goes Bark`);
    } 
}

dog.speak()

let rectangle = {
    height: 10,
    width: 8,
    // Create a method called area
    area: function () {
        return this.height * this.width
    }
}

// console.log(rectangle.height); // 10
// console.log(rectangle.area()); //80

// not using arrow functions

let fruitTranslator = {
    apple: "manzana",
    banana: "platano",
    cherry: "cereza"
}

console.log(fruitTranslator.apple); // 
// let someKey = "banana"  console.log([someKey]); using [] notation, allows us to provide a dynamic variable to be passed as a key, in order to get the value
console.log(fruitTranslator["banana"]);


function getPoemTitle (authorUserSelected) {
    let poemTitleByAuthor = {
        "Robert Frost" : "Stopping by Woods on a snowy evening",


    }

    return poemTitleByAuthor[authorUserSelected]
}

console.log(getPoemTitle("Robert Frost"));

