const obj = {
  a: 20,
  b: 60,
  c: 40,
  d: 90,
};
const newObj = {};
for (let key in obj) {
  if (obj[key] > 50) {
    newObj[key] = obj[key];
  }
}
console.log(newObj);
//output-{ b: 60, d: 90 }
