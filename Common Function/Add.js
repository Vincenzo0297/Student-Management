function addStudents(Students, student) {
    try {
        const {name, age, email, number} = student;
        let isValid = true;

        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(name)) {
            console.log("Invalid name");
            isValid = false;
        }

        const ageRegex = /^(?:1[01][0-9]|120|[1-9]?[0-9])$/;
        if (!ageRegex.test(age)) {
            console.log("Invalid age");
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            console.log("Invalid email");
            isValid = false;
        }

        const phonePattern = /^[0-9]{8}$/;
        if (!phonePattern.test(number)) {
            console.log("Invalid number");
            isValid = false;
        }

        if (isValid) {
            Students.push(student);
            console.log("\n=== Student is Added ===");
            Students.forEach((student, Index) => {
               console.log(`${Index + 1}. Name: ${student.name}, Age: ${student.age}, Email: ${student.email}, Number: ${student.number}`);            
            });
        }
    } catch(error) {
        console.log("Error adding the student details", error);
    }
}

module.exports = addStudents;