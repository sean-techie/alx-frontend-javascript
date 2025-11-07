interface Teacher {
  readonly firstName: string;       // only set at initialization
  readonly lastName: string;        // only set at initialization
  fullTimeEmployee: boolean;        // always required
  yearsOfExperience?: number;       // optional
  location: string;                 // always required
  [key: string]: any;               // allow dynamic additional attributes
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,      // dynamic property
};

console.log(teacher3);

/* Output:
{
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false
}
*/

