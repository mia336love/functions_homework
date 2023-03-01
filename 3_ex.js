const array = [1, 9, false, 23, "maybe tonite", null, 0];

const filtered = array.filter(function (el) {
  return el !== false && el !== undefined && el !== 0 && el !== null;
});
console.log(filtered);
