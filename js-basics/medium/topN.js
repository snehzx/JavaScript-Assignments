const obj = { a: 10, b: 50, c: 30, d: 40 };
const N = 2;
const res = Object.entries(obj)
  .sort((a, b) => b[1] - a[1])
  .slice(0, N)
  .map(([key, value]) => key);
console.log(res);
//[ 'b', 'd' ]
