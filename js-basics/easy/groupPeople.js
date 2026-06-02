const arr = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" },
];
// let res = {};
// for (let person of arr) {
//   const city = person.city;
//   if (!res[city]) {
//     res[city] = [];
//   }
//   res[city].push(person.name);
//   //   console.log(obj);
// }
// console.log(res);
//output-{ Delhi: [ 'A', 'C' ], Mumbai: [ 'B' ] }

const result = arr.reduce((acc, curr) => {
  const city = curr.city;
  if (!acc[city]) {
    acc[city] = [];
  }
  acc[city].push(curr.name);
  return acc;
}, {});
console.log(result);
