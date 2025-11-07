// Teacher interface from previous task
interface Teacher {
  readonly firstName: string;       // only set at initialization
  readonly lastName: string;        // only set at initialization
  fullTimeEmployee: boolean;        // always required
  yearsOfExperience?: number;       // optional
  location: string;                 // always required
  [key: string]: any;               // allow dynamic additional attributes
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;          // required property for Directors
}

// Example usage of Teacher
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Example usage of Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);

/* Output:

Teacher:
{
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false
}

Director:
{
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17
}
*/


