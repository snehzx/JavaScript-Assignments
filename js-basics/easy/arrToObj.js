const arr = [
  {
    id: 1,
    name: "A",
  },
  { id: 2, name: "B" },
];
const obj = arr.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});
console.log(obj);
//output-{ '1': { id: 1, name: 'A' }, '2': { id: 2, name: 'B' } }
// const obj = {};
// for (let key of arr) {
//   obj[key.id] = key;
// }
// console.log(obj);
