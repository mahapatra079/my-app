// Filter names from array of objects

const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Ankit" }
];

// Filter names starting with 'A'
const result = users.filter(user => user.name.startsWith("A"));

console.log(result);


// Output: [ { id: 1, name: 'Amit' }, { id: 3, name: 'Ankit' } ]

// Explanation:
// I have an array of user objects, each with an id and a name.
// I use the filter() method to create a new array that includes only the users whose names start with 'A'.
// The filter() method takes a callback function that checks if the name of each user starts with 'A' using the startsWith() method.


// Filter employees with age greater than 24

const employees = [
  { name: "Amit", age: 25 },
  { name: "Rahul", age: 30 },
  { name: "Sumit", age: 22 }
];

// age greater than 24
const data = employees.filter(emp => emp.age > 24);

console.log(data);