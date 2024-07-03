interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // This allows adding any additional properties
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Output should be:
// {
//   firstName: "John",
//   fullTimeEmployee: false,
//   lastName: "Doe",
//   location: "London",
//   contract: false
// }

