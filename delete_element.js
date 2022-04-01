// 4. Remove an element from array at specific position

const removeElement = (arr = [], position) => {
  if (position) {
    let modifiedArray = [];

    arr.forEach((element, index) => index !== position - 1 && modifiedArray.push(element));

    return modifiedArray;
  } else return arr;
};

const initalArray = [1, 2, 3, 4, 5];

console.log(removeElement(initalArray, 3)); //output: [ 1, 2, 4, 5 ]
