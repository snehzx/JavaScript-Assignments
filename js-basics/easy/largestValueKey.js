const obj = {
  a: 10,
  b: 50,
  c: 20,
};
const keys = Object.keys(obj);
let maxKey = keys[0];
let max = 0;
for (let key in obj) {
  if (obj[key] > max) {
    max = obj[key];
    maxKey = key;
  }
}
console.log(maxKey);
//output - b
