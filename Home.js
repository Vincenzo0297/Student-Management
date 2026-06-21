const User = require("./Classes/Class");
const addStudents = require("./Common Function/Add");
const updateStudents = require("./Common Function/Edit");
const deleteStudents = require("./Common Function/Delete");
const searchStudents = require("./Common Function/Search");
const viewAllStudents = require("./Common Function/View");

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
    console.log("1) Add Student");
    console.log("2) Update Student");
    console.log("3) Delete Student");
    console.log("4) Search Student");
    console.log("5) View All Student");
    console.log("6) Exit");
}

async function main() {  
    let choices;
    let students = []; //Creates an empty space ready to store data.

    try {
        do {
            menu();

            choices = await ask("Choose: "); 

            switch (choices) { 
                case "1":
                    const name = await ask("Enter Student name: ");
                    const age = await ask("Enter Student age: ");
                    const email = await ask("Enter Student email: ");
                    const number = await ask("Enter Student number: ");

                    const queryAdd = new User(name, age, email, number);
                    addStudents(students, queryAdd);
                    console.log("");
                    break;
                case "2":
                    const searchName = await ask("Student name to update: ");
                    const updateAge = await ask("Update Student age: ");
                    const updateEmail = await ask("Update Student email: ");
                    const updateNumber = await ask("Update Student number: ");
                    //Update undefine
                    const queryUpdate = {
                        age: updateAge,
                        email: updateEmail,
                        number: updateNumber
                    };

                    updateStudents(students, queryUpdate, searchName);
                    console.log("");
                    break;
                case "3":
                    const queryDelete = await ask("Delete Student name: ");
                    deleteStudents(students, queryDelete);
                    console.log("");
                    break;
                case "4":
                    const querySearch = await ask("Search for Student by Name: ");
                    searchStudents(students, querySearch);
                    console.log("");
                    break;
                case "5":
                    viewAllStudents(students);
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