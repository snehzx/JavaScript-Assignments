const obj = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] };
const res = [];
const arr = Object.values(obj);
for (let i of arr) {
  for (let j of i) {
    if (!res.includes(j)) {
      res.push(j);
    }
  }
}
console.log(res);
