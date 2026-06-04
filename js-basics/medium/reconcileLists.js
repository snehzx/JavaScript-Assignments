const expected = ["a", "b", "c"];
const actual = ["b", "c", "d"];
const res = { missing: [], extra: [] };
for (const i of expected) {
  if (!actual.includes(i)) {
    res.missing.push(i);
  }
}
for (const i of actual) {
  if (!expected.includes(i)) {
    res.extra.push(i);
  }
}
console.log(res);
//output-{ missing: ['a'], extra: ['d'] }
