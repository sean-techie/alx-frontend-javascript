// Define the Director object (interfaces disappear after compilation)
const director1 = {
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
gi
