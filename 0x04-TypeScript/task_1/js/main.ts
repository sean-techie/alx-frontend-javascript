
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // allows additional properties
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"


//  Task 3
// write an interface names Directors that extends Teacher
interface Director extends Teacher {
    numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"


// Define the interface for printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
function printTeacher(firstName: string, lastName: string) {
    // return `${firstName.charAt(0)}. ${lastName}`;
    return `${firstName}. ${lastName}`;
}

// const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
//     return `${firstName.charAt(0)}. ${lastName}`;
// };

// example usage
console.log(printTeacher("Vincent", "Odogwu")); // should print "V. Odogwu"


// Task 4: Writing a Class
// Interface describing the class itself
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
      return 'Currently working';
    }

    displayName(): string {
      return this.firstName;
    }
  }

// Task 3: Printing teachers

// Task 3: Printing teachers

// Define an interface for the function
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Implement the function using object destructuring
const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};


console.log(printTeacher({ firstName: "John", lastName: "Doe" }));    // J. Doe
console.log(printTeacher({ firstName: "Jane", lastName: "Smith" }));  // J. Smith
console.log(printTeacher({ firstName: "Alice", lastName: "Johnson" }));// A. Johnson
console.log(printTeacher({ firstName: "Bob", lastName: "Brown" }));    // B. Brown

// Interface for the constructor
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the class methods
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("John", "Doe");

console.log(student.displayName());       // John
console.log(student.workOnHomework());    // Currently working

