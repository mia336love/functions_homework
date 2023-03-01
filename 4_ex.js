const array = [20, 16, 17, 32, 16, 17, 20, 33, 15];

uniqArray = [];
function uniqueValues(array) {
  uniqArray = new set(array);
}
const result = uniqueValues(array);
console.log(result);
