// 3. Fibonacci series for n numbers

const generateFibonacci = (totalTerms = 1) => {
  let fibonacciSeries = [];

  for (let i = 1; i <= totalTerms; i++) {
    if (i == 1) fibonacciSeries.push(0);
    else if (i == 2) fibonacciSeries.push(1);
    else {
      const lastIndex = fibonacciSeries.length - 1;
      fibonacciSeries.push(fibonacciSeries[lastIndex] + fibonacciSeries[lastIndex - 1]);
    }
  }

  return fibonacciSeries;
};

console.log(generateFibonacci(5)); // output : [ 0, 1, 1, 2, 3 ]
