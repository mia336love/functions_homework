numbers = [1, 6, 5, 87, 13, 16, 22, 336];

let rangeNum = [];
function isNumberInRange(numbers) {
  for (let num in numbers) {
    if (0 < numbers.includes([num]) < 10) {
      rangeNum.push(numbers[num]);
    }
  }
  return rangeNum;
}
let result = isNumberInRange(numbers);
console.log(result);
