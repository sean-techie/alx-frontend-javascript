// Define the Teacher interface
interface Teacher {
  name: string;
  subject: string;
  yearsOfExperience: number;
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
  printNumberOfReports(): void;
}

// Create a Director object
const director1: Directors = {
  name: "Alice",
  subject: "Math",
  yearsOfExperience: 10,
  numberOfReports: 5,
  printNumberOfReports() {
    console.log(`I have ${this.numberOfReports} reports.`);
  }
};

// Call the method
director1.printNumberOfReports();
