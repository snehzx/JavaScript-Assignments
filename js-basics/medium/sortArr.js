const arr = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 },
];
const res = arr.sort((a, b) => {
  if (a.name === b.name) {
    return a.age - b.age;
  }
  return a.name.localeCompare(b.name);
});
console.log(res);
/*

  { name: 'Alice', age: 22 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 }
]
   */
