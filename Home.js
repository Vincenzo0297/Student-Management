const User = require("./Classes/Class");
const addEmployees = require("./Common Function/Add");
const updateEmployees = require("./Common Function/Edit");
const deleteEmployees = require("./Common Function/Delete");
const searchEmployees = require("./Common Function/Search");
const viewAllEmployees = require("./Common Function/View");

// Import the readline module (built-in Node.js module for CLI input/output)
const readline = require("readline");

// Create an interface to connect the program with the terminal
const rl = readline.createInterface({
    input: process.stdin, // process.stdin = where user types input (keyboard)
    output: process.stdout // process.stdout = where program prints output (terminal screen)
});

function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

function menu() {
    console.log("1) Add Employee");
    console.log("2) Update Employee");
    console.log("3) Delete Employee");
    console.log("4) Search Employee");
    console.log("5) View All Employee");
    console.log("6) Exit");
}

async function main() {  
    let choices;
    let employees = []; //Creates an empty space ready to store data.

    try {
        do {
            menu();

            choices = await ask("Choose: "); 

            switch (choices) { 
                case "1":
                    const name = await ask("Enter employee name: ");
                    const age = await ask("Enter employee age: ");
                    const email = await ask("Enter employee email: ");
                    const number = await ask("Enter employee number: ");

                    const queryAdd = new User(name, age, email, number);
                    addEmployees(employees, queryAdd);
                    console.log("");
                    break;
                case "2":
                    console.log("");
                    break;
                case "3":
                    const queryDelete = await ask("Delete employee name: ");
                    deleteEmployees(employees, queryDelete);
                    console.log("");
                    break;
                case "4":
                    const querySearch = await ask("Search for employee by Name: ");
                    searchEmployees(employees, querySearch);
                    console.log("");
                    break;
                case "5":
                    viewAllEmployees(employees);
                    console.log("");
                    break;
                case "6":
                    console.log("Bye");
                    rl.close();
                    break;
                default:
                    console.log("Invalid Choice");
                    console.log("");
            }
        } while (choices !== "6");
    } catch (error) {
        console.log("Error input, please try again", error);
    }
}

main();

// Async = makes a function return a promise
// Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue






//const → cannot reassign or redeclare -> most common
//const → use by default (value won’t be reassigned)

//let → can reassign, cannot redeclare -> most common
//let → use if the value will change

//var → can redeclare and reassign (can accidentally overwrite)
//var → avoid (old, can cause bugs)


// do while loop -> Always runs at least once, then repeats as long as a condition is true.
// for loop -> How many times you want to loop.
// while loop -> Don’t know how many times, but have a condition.
// for of loop -> Looping over arrays or lists.
// for in loop -> Looping over object properties.