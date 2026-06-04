const obj1 = { a: 10, b: 20 };
const obj2 = { a: 5, c: 15 };
const obj = {};
for (const key in obj1) {
  obj[key] = obj1[key];
}
for (const key in obj2) {
  obj[key] = obj2[key];
}
console.log(obj);
//console.log(...obj1 , ...obj2);
