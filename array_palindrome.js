// 2. Check if an array is palindrome.

const isArrayPalindrome = (arr = []) => {
  let isPalindrome = true;

  for (let i = 0; i <= arr.length / 2; i++) {
    if (arr[i] != arr[arr.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};

const initialArray1 = [1, 2, 3, 3, 2, 1];
console.log(isArrayPalindrome(initialArray1)); // ouput: true

const initialArray2 = [1, 2, 3, 4, 5];
console.log(isArrayPalindrome(initialArray2)); // ouput: false
