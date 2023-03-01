numbers = [1, 6, 5, 87, 13, 16, 22, 336];

let rangeNum = [];
function isNumberInRange(numbers) {
  for (i in numbers) {
    if (0 < i && i < 10) {
      rangeNum.push(numbers[i]);
    }
  }

  return rangeNum;
  /*
  if (0 < numbers && numbers < 10) {
    return true;
  }*/
}
let result = isNumberInRange(numbers);
console.log(result);
