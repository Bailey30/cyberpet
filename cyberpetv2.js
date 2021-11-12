const prompt = require('prompt-sync')();

// const petTypeClass = require("./Pet Types.js")


class Pet {
    constructor(type, name) {
        this.type = type,
            this.name = name,
            this.age = 0,
            this.totalDistance = 0
    }

    stats() {
        console.log(`\nType: ${this.type}\nName: ${this.name}\nAge: ${this.age}\nHunger: ${this.hunger}\nThirst: ${this.thirst}\nHappiness: ${this.happiness}\n`);
    }

    feed() {
        this.hunger += 10;
    }

    drink() {
        this.thirst += 10;
    }

    play() {
        this.happiness += 3;
        this.hunger -= 20;
        this.thirst -= 20;
    }

    walk() {
        this.happiness += 1;
        this.hunger -= 10;
        this.thirst -= 10;
        let distance = Math.floor(Math.random * 4 + 1);
        this.totalDistance += distance;
    }

    exercise() {
        this.happiness += 1;
        this.hunger -= 20;
        this.thirst -= 20;
    }

}

class Cat extends Pet {
    constructor(type, name) {
        super(type, name)
        this.growthrate = 1,
            this.hunger = 20,
            this.thirst = 20,
            this.happiness = 1;
    }
}

class Dog extends Pet {
    constructor(type, name) {
        super(type, name)
        this.growthrate = 1,
            this.hunger = 10,
            this.thirst = 10,
            this.happiness = 1;
    }
}

class Rabbit extends Pet {
    constructor(type, name) {
        super(type, name)
        this.growthrate = 1,
            this.hunger = 5,
            this.thirst = 5,
            this.happiness = 1;
    }
}

class Shark extends Pet {
    constructor(type, name) {
        super(type, name)
        this.growthrate = 1,
            this.hunger = 5,
            this.thirst = 100,
            this.happiness = 1;
    }
}

class Orca extends Pet {
    constructor(type, name) {
        super(type, name)
        this.growthrate = 1,
            this.hunger = 10,
            this.thirst = 100,
            this.happiness = 1;
    }
}

class Dragon extends Pet {
    constructor(type, name) {
        super(type, name)
        this.growthrate = 1,
            this.hunger = 75,
            this.thirst = 75,
            this.happiness = 1;
    }
}


function capitalize(str) {
    if (typeof str === 'string') {
        return str.replace(/^\w/, c => c.toUpperCase());
    }
    else {
        return '';
    }
}

function _type() {
    while (true) {
        let type = prompt("Enter Pet Type: ");
        if (petTypes.includes(type.toLowerCase()) == true) {
            while (true) {
                let check = prompt("Confirm (Yes/No): ");
                if (check.toLowerCase() == "yes") {
                    return capitalize(type);
                }
                else if (check.toLowerCase() == "no") {
                    console.log("\nInput Voided\n");
                    break;
                }
                else if (check == "") {
                    console.log("\nNo input detected\n");
                }
                else if (check.toLowerCase() != "yes" && check.toLowerCase() != "no") {
                    console.log("\nInvalid Check Answer\n");
                }
                else {
                    console.log("\nCongratulations! You've reached an unexpected error.\n");
                }
            }
        }
        else if (type == "") {
            console.log("\nNo Input Detected\n");
        }
        else if (petTypes.includes(type.toLowerCase()) == false) {
            console.log("\nInvalid Pet Type\n");
        }
        else {
            console.log("\nCongratulations! You reached an unknown error.\n");
        }
    }
}

function _name() {
    while (true) {
        let petName = prompt("Enter Pet Name: ");
        while (true) {
            let check = prompt("Confirm (Yes/No): ");
            if (check.toLowerCase() == "yes") {
                return capitalize(petName);
            }
            else if (check.toLowerCase() == "no") {
                console.log("\nInput Voided\n");
                break;
            }
            else if (check == "") {
                console.log("\nNo Input Detected\n");
            }
            else if (check.toLowerCase() != "yes" && check.toLowerCase() != "no") {
                console.log("\nInvalid Check Answer\n");
            }
            else {
                console.log("\nCongratulations! You reached an unknown error.\n");
            }
        }
    }
}

const petTypes = ['cat', 'dog', 'rabbit', 'shark', 'dragon'];

let type = _type();
let name = _name();

if (type == "cat") {
    let pet = new Cat(type, name);
    console.log(pet);
}



// console.log(`Pet Type: ${_type()}\nPet Name: ${_name()}`);