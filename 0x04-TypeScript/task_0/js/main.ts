// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location

// Define the Student interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two student objects
const firstStudent: Student = {
	firstName: "Guillermo",
	lastName: "Maliano",
	age: 24,
	location: "Terra Nostra"
}

const secondStudent: Student = {
	firstName: "James",
	lastName: "Smith",
	age: 29,
	location: "San Francisco"
}

// Create an array of students
const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})

// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    // Index signature to allow additional properties
    [propName: string]: any;
}

// Create a teacher object
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // Additional property
};

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;  // New required property
}

// Create a director object
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

// Interface for printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Interface for the StudentClass constructor
interface StudentClassConstructor {
    firstName: string;
    lastName: string;
}

// Interface for the StudentClass methods
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    // Constructor implementation
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method that returns a string
    workOnHomework(): string {
        return "Currently working";
    }

    // Method that returns the first name
    displayName(): string {
        return this.firstName;
    }
}

// Output the teacher object
console.log(teacher3);

// Output the director object
console.log(director1);

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working
