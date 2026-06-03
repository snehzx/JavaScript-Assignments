const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
const res = {};
for (let i = 0; i < arr.length; i++) {
  if (Object.keys(res).includes(arr[i])) {
    res[arr[i]]++;
  } else {
    res[arr[i]] = 1;
  }
}
console.log(res);

// output:  { apple: 3, banana: 2, orange: 1 }

// for (let i = 0; i < arr.length; i++) {
//   if (res[arr[i]]) {
//     res[arr[i]]++;
//   } else {
//     res[arr[i]] = 1;
//   }
// }
// console.log(res);
