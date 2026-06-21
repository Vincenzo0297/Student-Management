function deleteStudents(Students, query) {
    try {
        if (Students.length === 0) {
            console.log("Student is not found");
            return;
        } else {
            const foundStudent = Students.findIndex(
                (student) => student.id === Number(query) || student.name.toLowerCase().includes(query.toLowerCase()
            ));

            if (foundStudent !== -1) {
                const removed = Students.splice(foundStudent, 1);
                console.log("\n=== Student Deleted ===");
                console.log(`Name: ${removed[0].name}, Age: ${removed[0].age}, Email: ${removed[0].email}, Number: ${removed[0].number}`);
            } else {
                console.log("Student is not found");
            }
        }
    } catch (error) {
        console.log("Error deleting students:", error);
    }
}

module.exports = deleteStudents;