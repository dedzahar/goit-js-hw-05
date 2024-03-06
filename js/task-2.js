function changeEven(numbers, value) {
  const output = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      output.push(numbers[i] + value);
    } else {
      output.push(numbers[i]);
    }
  }
  return output;
}
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));