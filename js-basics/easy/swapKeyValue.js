const obj = { a: "x", b: "y", c: "z" };
let res = {};
const keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
  let temp = keys[i];
  keys[i] = obj[keys[i]];
  res[keys[i]] = temp;
}
console.log(res);

//output = { x: 'a', y: 'b', z: 'c' }
