function viewAllStudents(Students) {
    try {
        if (Students.length === 0) {
            console.log("No student is found");
            return;
        } else {
           console.log("\n=== View All Students ===");
           Students.forEach((student, index) => {
                console.log(`${index + 1}. Name: ${student.name}, Age: ${student.age}, Email: ${student.email}, Number: ${student.number}`);
           });
        }
    } catch (error) {
        console.log("Error viewing the student", error);
    }
}

module.exports = viewAllStudents;