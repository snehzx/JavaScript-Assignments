const obj = { A: [80, 90], B: [70, 75, 85] };
let max = 0;
let maxKey = "";
for (let key in obj) {
  let high = obj[key].reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
  high /= obj[key].length;
  if (high > max) {
    max = high;
    maxKey = key;
  }
}
console.log(maxKey);
//output-A

// let maxAvg = 0;
// let maxKey = 0;
// const highest = Object.entries(obj).reduce(
//   (acc, [key, arr]) => {
//     const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
//     if (avg > acc.maxAvg) {
//       acc.maxAvg = avg;
//       acc.maxKey = key;
//     }
//     return acc;
//   },
//   { maxAvg: 0, maxKey: "" },
// );
// console.log(highest.maxKey);
