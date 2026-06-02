const obj = {
  fruits: ["apple", "banana"],
  veggies: ["carrot", "pea"],
};
let values = Object.values(obj);
let array = [];
for (let arr of values) {
  for (let value of arr) {
    array.push(value);
  }
}
console.log(array);
// output = [ 'apple', 'banana', 'carrot', 'pea' ]

//console.log(values.flat());

// const res = values.reduce((acc, curr) => {
//   return acc.concat(curr);
// }, []);
// console.log(res);
// here concat do concatination of two arrays
