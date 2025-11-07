interface Teacher {
  name: string;
  subject: string;
  yearsOfExperience: number;
}

interface Directors extends Teacher {
  numberOfReports: number;
  printNumberOfReports(): void;
}

const director1: Directors = {
  name: "Alice",
  subject: "Math",
  yearsOfExperience: 10,
  numberOfReports: 5,
  printNumberOfReports() {
    console.log(`I have ${this.numberOfReports} reports.`);
  }
};

director1.printNumberOfReports();
