interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number") {
    if (salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  } else if (typeof salary === "string") {
    // If salary is a string like "$500", always return Director
    return new Director();
  } else {
    throw new Error("Invalid salary type");
  }
}
console.log(createEmployee(200).constructor.name);  // Teacher
console.log(createEmployee(1000).constructor.name); // Director
console.log(createEmployee("$500").constructor.name); // Director// Define interfaces

// Define a string literal type allowing only "Math" or "History"
type Subjects = "Math" | "History";

// Function that takes a subject and returns the corresponding teaching string
function teachClass(todayClass: Subjects): string {
    return `Teaching ${todayClass}`;
}

// Example usage
console.log(teachClass("Math"));     // Teaching Math
console.log(teachClass("History"));  // Teaching History
