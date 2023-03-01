const array = [20, 16, 17, 32, 16, 17, 20, 33, 15];

uniqArray = [];
function uniqueValues(array) {
  for (let i = 0; i < array.length; i++) {
    if (uniqArray.includes(array[i] === false)) {
      uniqArray.push(array[i]);
    }
  }
  return uniqArray;
}

const result = uniqueValues(array);
console.log(result);
