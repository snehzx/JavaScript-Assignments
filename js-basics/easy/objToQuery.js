const obj = {
  name: "Alice",
  age: 25,
};
const query = Object.entries(obj)
  .map(([key, value]) => `${key}=${value}`)
  .join("&");
console.log(query);
// Object.entries(obj)- converts obj to arr [
//   ["name", "Sneha"],
//   ["age", 21]
// ] to use arr prop like map filter 
//output-name=Alice&age=25