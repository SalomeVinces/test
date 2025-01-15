// &&-and, !- not, ii-or//
/* 
? Conditions and Logic Gates
   -Conditional statement checks if an expression is truthy
   - The expression must always resolve to true
   - If it is true, a code within a statement executes
   - if it is falsy, nothing happens, it gets skipped
 
   ? Expressions vs statements
   *Expression
       -Unprocessed value grouped using ()
       -Evaluated to be truthy
       -Can be empty
   * Expressions Evaluate

   *Statements
       + keyword
       + expression
       +and code block
       
   *statements evaluate and execute the codeblock when invoked
       !Conditional in an example of a statement
*/

/* 
?    If statement
     + Checks if something is true, and executes the code that follow
*/

if (true) console.log("This will log because the expression is true");


let lightSwitch = "on";

console.log("The value of the lightswitch is: ", Boolean(lightSwitch))

if (lightSwitch == "on") {
    console.log("let there be light!");
}

/* 
? Else statement
    +If all Else fails, execute the code
*/

if(false) console.log("Log if true");
else console.log("Log if false");


let temp = 50;

if (temp >=100) {
    console.log("inferno");
} else {
    console.log("some other temp")
}

/* 
? Else if statementss
    *allows us to add additional condition (s) if the prior has not been satisfied
*/

/* 
    ? Syntax:

    if (conditionalIsTrue){
        execute this block code
        } else if (other conditionIsTrue) {
             execute this block code
        } else {
            execute this block if nothing passed above
        }

*/

temp = 102;

// ? Order is important, greater condition/more specific should come at the top
// if (temp >=80) {
//     console.log("it's pretty hot out today");
// } else if (temp >=65) {
//     console.log("it is a nice day");
// } else if (temp >=100) {
//     console.log("it is scorching outside")
// }else {
//     console.log("it might be chilly outside");
// }

if (temp >=100) {
    console.log ("its scorching");
} else if (temp >=80) {
    console.log("its hot outside");
} else if (temp >=65) {
    console.log("its nice out");
} else if (temp >32) {
    console.log("it is cold")
} else {
    console.log ("it is freezing")
}

// ? Important to cover fallthrough, greater/more specific condition should always be first

let myName = "Salome";
let lenght = 1;

if (myName[0] == "S" && myName.length > lenght) {
    console.log ('Your name starts with the letter S, and it is greater than ${length} characters');
} else if (myName[0] == "S") {
    console.log("Your name starts with S");
}


/* 
?   Logical Operators NOT,AND,OR
    + OR Operator ( || )
        -True if one of the conditions is true
        ex: I will be happy if I go to the movies OR eat dinner

    + AND Operator ( && )
        -True if both of the conditions are true
        ex: I will be happy if I go to the movies AND eat dinner

    + NOT Operator ( ! or in an expression != )
        -Flips the logical epression
*/

//  ? NOT 

lightSwitch = 0 
if (!lightSwitch) {
    console.log("The light switch is off");
}

if (lightSwitch == false) {
    console.log("The light switch is off");
}

lightSwitch ="off";

if (lightSwitch != "on") {
    console.log("The light switch is off");
} 

// ? AND OR Example

let sensor = "inactive";
let alarm = true;

if (sensor === "active" || alarm){
    console.log("The alarm may be on");
} else if (sensor=== inactive && alarm){
    console.log("Your sensor is likely broken");
} else if (sensor=== "inactive" && !alarm) {
    console.log("The alarm is likely off");
}

// ? Challenge 
/* 
    Createan age variable with a number between 0-100
    Check if the age is under 16, if so, say they can't drive
    if the age is between 16 and 18 say they can drive but not vote
    If the age is between 18 and 21, say they can vote but not drink
    If the age is over 21, the can drink
*/

let age = 17 ;

if (age <16){
    console.log("cannot drive");
} else if (age < 18){
    console.log("You can drive but not vote");
} else if (age < 21){
    console.log("You can vote but not drink");
} else if (age >= 21 ){
    console.log("You can drink");
} else {
    console.log("Hey, you didn't provide me with a valid number");
}

if (age < 16){
    console.log("cannot drive");
}

if (age < 18){
    console.log("You can drive but not vote");
}

// ? Important note
//  *If you want you condition to display ANY possible match, create separste if statements
//  *If you want yours condition to display ONE possible match, create a chain of an if statement 


/* 
? Teraries
    + an expression
    + a quick way of creating if/else conditional
    + commonly used to check a quick condition

? Syntax:

    condition ? expr if true : expr if false

    ? Chaining Syntax
    condition ? expr if true     
              : else if expr ? expr if true
              : else if expr ? expr if true
              : null
*/

let ignition = true;

ignition ? console.log("Ready to start"):console.log ("Turn ignition on first");


// ? Cahining turnaries

let season = 3;

if (season ===1){
    console.log("spring");
} else if (season ===2){
    console.log("Summer");
} else if(season ===3){
    console.log("Autumn");
} else if (season ===4){
    console.log("Winter");
} 

season === 1 
    ? console.log("Spring")
    : season === 2 
    ? console.log("Summer")
    : season === 3 
    ? console.log("Autumn")
    : season === 4
    ? console.log("Winter")
    : null 


    let myAgeSentence = age === 21 ? "Salome is 21" : "Salome is not 21"

    console.log(myAgeSentence);


    age < 16 
    ? console.log("Can't drive")
    : age < 18 
    ? console.log("can drive")
    : console.log(" provide a valid number")


    /* 
    ?   Switch Statement
        + execute a blockof code dependant upon different cases
        + we can ask a question requiring specific responses determined by our answer    
    */

    let x = 10;

    switch (true) {
        case x > 5 :
            console.log("x is greater than 5");
            break;
        case x > 2 : 
            console.log("x is greater than 2");
            break;
        default :
            console.log("Something went wrong")
    }

    let uprightInstructor = "Max";

    switch (uprightInstructor) {
         // condition to be checked
        case "Daniel" :
            // run the code within the case if true
            console.log(`${uprightInstructor} is our SD teaching assistant`);
            // break is used to stop other cases from evaluating
            break;
        case "Amit":
            console.log(`${uprightInstructor} is our class SD instructor`);
            break;
        case "Max":
            console.log(`${uprightInstructor} is our Program Manager`);
            break;
        default:
            console.log(`${uprightInstructor} may not be found in our database.`);
    }