const obj = {
  a: 1,
  b: "hello",
  c: 3,
};
let isNum = true;
for (let key in obj) {
  if (obj[key] !== "number") {
    isNum = false;
    break;
  }
}
console.log(isNum);
