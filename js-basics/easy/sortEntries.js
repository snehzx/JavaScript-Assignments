const obj = { a: 3, b: 1, c: 2 };

const entry = Object.entries(obj).sort((a, b) => a[1] - b[1]);
console.log(entry);
//output-[ [ 'b', 1 ], [ 'c', 2 ], [ 'a', 3 ] ]
