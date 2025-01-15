/* 

    ? Scope and Hoisting
    ? Scope
        -It is used to determine how information in different code blocks are accessed

    ? Five Scope Types:
    * Global/Window
    * Block
    * Functions
    * Modules - If using external file
    * Lexical

*/

/* 

    ? Global Scope
    * Outermost scope
    * Window object when in the browser
    * JS file when in Node
    * Accessible from every other level of scope
*/

let globalScopedVariable = "This is a global scope variable";

{
console.log(globalScopedVariable); //Can acess globally scoped variable in nested scope
}

/* 
    ? Function scope
    * Accessible only inside a function
*/

function scope () {
    let fxScopeVariable = "This is a function scoped variable"
    console.log(fxScopeVariable);
    console.log(globalScopedVariable);
}

scope()
//console.log(fxScopeVariable); // !ReferrenceError: fxscopevariable is not defined
// ! Cannot accosee a locally scope variable

/* 

    ? Block scope
    * Anywhere there are {}
*/


// let placeholder; // * Can also back out variables from nested scope, by doing reassignment
{
    let blockScopedVariable = "Block scope variable"
    // placeholder = blockScopedVariable
    console.log(blockScopedVariable);
}

//console.log(blockScopedVariable);// !ReferrenceError: blockscopevariable is not defined

/* 
    ?Lexical Scope
    * Variables are accessed by their nested position
    * Inner FX scope can access outer FX scope

*/

function outerFx () {
    //Outer fx scope
    let ofxv = "Outer fx scope variable"

    function innerFx () {
        //inner fx scope
        let ifxv = "Inner fx scoped variable"
        console.log(ofxv);
        return ifxv
    }
    // innerFx() === "Inner fx scoped variable" //True

    // console.log(innerFx());
    // console.log(ifxv);

   return innerFx() 
}

// outerFx() === "Inner fx scoped variable"

console.log(outerFx());
let innerScopedString = outerFx();

/* 
    ? Hoisting 
    * JS' parsing engine reads top to bottom and left to right
    * JS' interpreter runs the code twice
        * First, it looks for VARiables and fx declarations, it will hoist them ^ (moving them to the top)
        * It allocates memory space for those declarations
        * It will then, executre the code line-by-line   
*/

let myName = "Salo";

console.log(myName);

{
    var age = 21;
    let age1 = 23;
}
consolr.log(age) //! var is able to 'trickle' outside of its respected scope {}
// consolr.log(age1)

//? Function declarations are hoisted

x() //Traditional functions is hoisted, avail for us to use before it observed declaration

function x () {
    console.log("Function declaration");
}
// x(); 

// y()//Functional expression are NOT hoisted!
let y = function () {
    console.log("Function expression");

}

z() //! NOT hoisted, ReferenceError: Cannot access 'z' before initialization
const z = () => {
    console.log("Arrow Function Expression");
}

// run() // ? Works bc trad function declaration are hoisted

function run () {
    var foo = "foo";
    let bar = "bar";
    var fxVariable = "test"
    console.log(foo,bar);

    {
        var moo = "moo";
        let baz = "baz";

        console.log (moo,baz);
    }

    // console.log(baz); //! Reference error, scoped to immidiate block
    console.log(moo) //? Works, because scoped to immidiate function block
}

run()
//console.log(moo); // moo was initialized within nested scope, it 'trickles' to the immidiate function block if nested within


{
    {
        {
         var something = "This is something";
        }
    }
}

console.log(something);// > This works bc it is not in the context of a function's scope

//! THIS IS BAD!! Don't use hoisting to your 'benefit'

