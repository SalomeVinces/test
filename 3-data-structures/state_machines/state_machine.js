let states = {
    green: ["yellow"],
    yellow: ["red"],
    red: ["green", "yield"],
    yield: ["red"]
}

let currentState = "green"

function enterState (newState) {
    // We access the states object using the currentState variable as a key
    //console.log(states[currentState]);
    let validTransitions = states [currentState]

    // check if the validTransitions array includes out newState parameter
    if (validTransitions.includes(newState)) {
        currentState = newState
        console.log("The light is now: ", currentState);
    } else {
        console.log("Invalid state transition attempted - from " + currentState +" to " + newState);
    }

}

enterState("yellow") // Curent state = "yellow"
enterState("green") // ! Invalid transition
enterState("red")