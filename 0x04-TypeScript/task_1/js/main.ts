// Ensure you have the Teacher interface defined as shown previously

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // This allows adding any additional properties
}

interface Directors extends Teacher {
  numberOfReports: number;
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

// Output should be:
// {
//   firstName: "John",
//   lastName: "Doe",
//   location: "London",
//   fullTimeEmployee: true,
//   numberOfReports: 17
// }

