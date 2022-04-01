// 5. Write a function on calling it sum(2)(3) will give 5

const sum = (firstNumber) => {
  return (secondNumber) => firstNumber + secondNumber;
};

console.log(sum(2)(3)); //ouput: 5
