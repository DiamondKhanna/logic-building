const getSum = (a, b) => {
  return a + b;
};

function generateFibonacciSeries(limit) {
  let result = [0, 1];
  // for limit =10 ; result should be [1 1 2 3 5 8 13 21 34 55]
  for (let i = 2; i < limit; i++) {
    result.push(getSum(result[i-1], result[i - 2]));
  }
  return result;
}

module.exports = {
  generateFibonacciSeries,
};
