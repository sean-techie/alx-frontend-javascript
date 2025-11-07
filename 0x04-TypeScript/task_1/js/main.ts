

// Teacher interface
interface Teacher {
  readonly firstName: string;       // set only at initialization
  readonly lastName: string;        // set only at initialization
  fullTimeEmployee: boolean;        // required
  location: string;                 // required
  yearsOfExperience?: number;       // optional
  [key: string]: any;               // allow extra attributes
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;          // required property
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17
};

console.log(director1);

