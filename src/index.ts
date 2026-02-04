type User = { name: string; age: number };

const users: User[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 35 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 28 },
  { name: "Clara", age: 31 },
  { name: "David", age: 27 },
  { name: "Eva", age: 24 },
  { name: "Frank", age: 29 },
  { name: "Grace", age: 33 },
  { name: "Henry", age: 26 },
  { name: "Ivy", age: 21 },
  { name: "Kevin", age: 32 },
];

console.log("Users older than 25:");
console.log(
  users
    .filter((user) => user.age > 25)
    .map((user) => `${user.name} is ${user.age}`),
);

if (users.some((user) => user.age === 42)) {
  console.log("Found a user with age 42!");
} else {
  console.log("Unfortunatly, no user with age 42 found.");
}
