const User = require("./Classes/Class");
const addEmployees = require("./Common Function/Add");
const updateEmployees = require("./Common Function/Edit");
const deleteEmployees = require("./Common Function/Delete");
const searchEmployees = require("./Common Function/Search");
const viewAllEmployees = require("./Common Function/View");

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
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
    let employees = [];

    do {
        menu();

        choices = await ask("Choose: "); 

        switch (choices) { 
            case "1":
                const addEmployee = await ask("Add employee details: ");
                addEmployee(employees,addEmployee);
                console.log("");
                break;
            case "2":
                const updateEmployee = await ask("Update employee details: ");
                updateEmployee(employees, updateEmployee);
                console.log("");
                break;
            case "3":
                const deleteEmployee = await ask("Delete employee name: ");
                deleteEmployees(employees, deleteEmployee);
                console.log("");
                break;
            case "4":
                const search = await ask("Search for employee by Name: ");
                searchEmployees(employees, search);
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
        }

    } while (choices !== "6");
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