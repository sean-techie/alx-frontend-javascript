class Teacher {
  // firstName and lastName can only be set once during initialization
  readonly firstName: string;
  readonly lastName: string;

  // Required attributes
  fullTimeEmployee: boolean;
  location: string;

  // Optional attribute
  yearsOfExperience?: number;

  // Allow any additional dynamic attributes
  [key: string]: any;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    if (yearsOfExperience !== undefined) {
      this.yearsOfExperience = yearsOfExperience;
    }
  }
}

// Example usage:

const teacher1 = new Teacher("John", "Doe", true, "New York", 5);
const teacher2 = new Teacher("Jane", "Smith", false, "Los Angeles");

// Adding dynamic attributes
teacher1.contract = true;
teacher2.subject = "Mathematics";

console.log(teacher1);
console.log(teacher2);

/*
Output:

{
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
  yearsOfExperience: 5,
  contract: true
}

{
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "Los Angeles",
  subject: "Mathematics"
}
*/
