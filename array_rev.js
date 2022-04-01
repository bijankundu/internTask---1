// 1. Reverse an Array.

const reverseArray = (arr = []) => {
  let statingIndex = 0;
  let endingIndex = arr.length - 1;

  while (statingIndex < endingIndex) {
    const temp = arr[statingIndex];
    arr[statingIndex] = arr[endingIndex];
    arr[endingIndex] = temp;
    statingIndex++;
    endingIndex--;
  }

  return arr;
};

const initalArray = [1, 2, 3, 4, 5, 6];

console.log(reverseArray(initalArray)); //output : [ 6, 5, 4, 3, 2, 1 ]
