function updateStudents(Students, queryUpdate, searchName) {
    try {
        const { updateAge, updateEmail, updateNumber } = queryUpdate;

        const foundStudent = Students.find(
            student => student.name.toLowerCase() === searchName.toLowerCase()
        );

        if (!foundStudent) {
            console.log("Student is not found");
            return;
        }

        foundStudent.age = updateAge;
        foundStudent.email = updateEmail;
        foundStudent.number = updateNumber;

        console.log("\n=== Student Updated ===");
        console.log(foundStudent);

    } catch (error) {
        console.log("Error updating student");
        console.error(error);
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