const arr = [
  "speed lover",
  "save me",
  "maybe tonite",
  "speed lover",
  "crazy little love",
  "maybe tonite",
  "maybe tonite",
];

function isNumberInRange(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

const result = isNumberInRange(arr);
console.log(result);
