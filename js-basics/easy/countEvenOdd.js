const arr = [1, 2, 3, 4, 5, 6];
const obj = { even: 0, odd: 0 };
for (let num of arr) {
  if (num % 2 == 0) {
    obj.even += 1;
  } else {
    obj.odd += 1;
  }
}
console.log(obj);
