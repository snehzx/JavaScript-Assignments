const obj = {
  food: [10, 20, 30],
  travel: [5, 15],
  bills: [40, 60],
};
const res = {};
for (let key in obj) {
  res[key] = obj[key].reduce((acc, curr) => acc + curr, 0);
}
console.log(res);

//output = {food:60, travel:20 , bills:100}
