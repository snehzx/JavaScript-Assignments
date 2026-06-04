const obj = { a: [1, 2, 3], b: [2, 3, 4], c: [3, 4, 5] };
const values = Object.values(obj);
const res = values.reduce((acc, curr) =>
  acc.filter((item) => curr.includes(item)),
);
console.log(res);
//output - [3];
