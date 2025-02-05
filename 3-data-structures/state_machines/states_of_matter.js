let stateMachine = {
    state: "liquid",
    emoji: "💧",
    transitions: {
        liquid: {
            vaporize() {
                this.state = "gas",
                this.emoji = "☁️";
            },
            freeze () {
                this.state = "solid",
                this.emoji = "🪨"
            }
        },
        solid : {
            melt () {
                this.state = "Liquid",
                this.emoji = "💧"
            }
        },
        gas : {
            condense () {
                this.state = "Liquid",
                this.emoji = "💧"
            }
        }
    },
    dispatcher (actionName) {
        let action = this.transitions[this.state][actionName]
         
        if (action) {
            let previous = this.state

            console.log(`${actionName} on ${this.state}`);

            action.call (this) // calls the nested function/method

            console.log(`Changed ${previous} to ${this.state}`);
        } else {
            console.log("Invalid action or method name on the given state");
            console.log(`You cannot ${actionName} a ${this.state}`);
        }
    }
}

console.log(stateMachine.state, stateMachine.emoji); // liquid

stateMachine.dispatcher("melt")// ! Invalid
stateMachine.dispatcher("freeze")// works out changed liwuid to solid

stateMachine.dispatcher("melt")


