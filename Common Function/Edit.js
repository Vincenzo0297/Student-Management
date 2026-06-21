function updateStudents(Students, searchName, updateAge, updateEmail, updateNumber) {
    try {
        if(Students.length === 0) {
            console.log("Student is not found");
            return;
        } else {
            const foundStudent = Students.find(
                (student) => student.name.toLowerCase().includes(searchName.toLowerCase())
            );

            if (foundStudent) {
                if (updateAge) foundStudent.age = updateAge;
                if (updateEmail) foundStudent.email = updateEmail;
                if (updateNumber) foundStudent.number = updateNumber;
                console.log("\n=== Student Updated ===");
                console.log(`Name: ${foundStudent.name}, Age: ${foundStudent.age}, Email: ${foundStudent.email}, Number: ${foundStudent.number}`);
            } else {
                console.log("Student is not found");
            }
        }
    } catch (error) {
        console.log("Error updating student", error);
    }
}

module.exports = updateStudents;




//         if (newName) employee.setName(newName);
//         if (newAge) employee.setAge(newAge);
//         if (newEmail) employee.setEmail(newEmail);
//         if (newNumber) employee.setNumber(newNumber);

//         console.log("\n=== Employee Updated ===");
//         employee.printInfo();
//     } catch(error) {
//         console.log("Error updating employee", error);
//     }
// }

// module.exports = updateEmployee;