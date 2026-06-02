const obj = {
  name: "alice",
  city: "delhi",
};
const res = {};
for (let key in obj) {
  const value = obj[key];
  res[key] = value[0].toUpperCase() + value.slice(1);
}
console.log(res);
//output={ name: 'Alice', city: 'Delhi' }
