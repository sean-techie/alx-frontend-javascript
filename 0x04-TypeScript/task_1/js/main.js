// Create a Director object
var director1 = {
    name: "Alice",
    subject: "Math",
    yearsOfExperience: 10,
    numberOfReports: 5,
    printNumberOfReports: function () {
        console.log("I have ".concat(this.numberOfReports, " reports."));
    }
};
// Call the method
director1.printNumberOfReports();
