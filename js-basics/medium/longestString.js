const obj = { a: "apple", b: "banana", c: "kiwi" };
const val = Object.values(obj);
let max = "";
for (let i = 0; i < val.length; i++) {
  if (val[i].length > max.length) {
    max = val[i];
  }
}
console.log(max);
//output-banana
