const obj = { name: "Rahul", age: 23, city: "Noida" };
const arr = ["name", "city"];
const res = {};
for (let key in obj) {
  for (let i in arr) {
    if (key === arr[i]) {
      res[arr[i]] = obj[key];
    }
  }
}
console.log(res);
//output:{ name: "Rahul", city: "Noida" }
