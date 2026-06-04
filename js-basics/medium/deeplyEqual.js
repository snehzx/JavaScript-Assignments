const obj1 = { a: { x: 1, y: 2 } };
const obj2 = { a: { x: 1, y: 2 } };
function deeplyEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (const key of key1) {
    if (!key2.includes(key)) {
      return false;
    }
    if (!deeplyEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}
console.log(deeplyEqual(obj1.obj2));
//output-true
