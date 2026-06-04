const arr = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 },
];
const obj = {};
for (let key of arr) {
  if (!(key.category in obj)) {
    obj[key.category] = key.price;
  } else {
    obj[key.category] += key.price;
  }
}
console.log(obj);
//output-{ electronics: 300, clothes: 50 }
