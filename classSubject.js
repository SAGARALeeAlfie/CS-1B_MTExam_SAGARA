// collect user input using prompt()
let studentName = prompt("Enter your name:");
let subjectTitle = prompt("Enter the subject title:");
let classSchedule = prompt("Enter the class schedule (Time, Days):");
let classroom = prompt("Enter the classroom:");
let classInstructor = prompt("Enter the class instructor:");

// display the collected information in the required format
console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}.`);
