const arr = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" },
];
let res = {};
for (let obj of arr) {
  if (!(obj.category in res)) {
    res[obj.category] = [obj.id];
  } else {
    res[obj.category].push(obj.id);
  }
}
console.log(res);
//output-{ fruit: [ 1, 3 ], veggie: [ 2 ] }
