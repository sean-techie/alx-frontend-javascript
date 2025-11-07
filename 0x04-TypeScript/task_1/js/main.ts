// Teacher interface
interface Teacher {
  readonly firstName: string;       // set only at initialization
  readonly lastName: string;        // set only at initialization
  fullTimeEmployee: boolean;        // required
  location: string;                 // required
  yearsOfExperience?: number;       // optional
  [key: string]: any;               // allow additional properties
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;          // required for Directors
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

/* Expected output:

{
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17
}
*/


