// let nums = [2, 7, 11, 15];
// target = 9;
// function sum(nums, target) {
//   let sum = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         sum.push(i, j);
//       }
//     }
//   }
//   return sum;
// }
// console.log(sum(nums, 9));

// // Binary Search
// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80];

// function binarySearch(arr, target) {
//   let si = 0;
//   let ei = arr.length - 1;
//   while (si <= ei) {
//     let mid = Math.floor((si + ei) / 2);

//     if (arr[mid] > target) {
//       ei = mid - 1;
//     } else if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       si = mid + 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch(arr1, 20));

// Selection Sort
// let arr = [2, -8, 10, -1, 50, 7];
// for (let i = 0; i < arr.length; i++) {
//   let min = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[min]) {
//       min = j;
//     }
//   }
//   let temp = arr[min];
//   arr[min] = arr[i];
//   arr[i] = temp;
// }
// console.log(arr);

//Bubble Sort

// Using Bubble Sort
// let arr = [12, 32, 44, 2, 13, 41, 21];

// function sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(sort(arr));

// let arr = [10, -2, 0, -1, 7];

// // using two pointers approach
// function reverse(arr) {
//   let i = 0;
//   let j = arr.length - 1;

//   while (i <= j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
//   return arr;
// }
// console.log(reverse(arr));

// Kaden's Algorithm to find the maximum sum of a contiguous subarray within the array
// let arr2 = [2, -3, 1, -5, 8];

// let i = 0;
// let sum = 0;
// let max = Number.NEGATIVE_INFINITY;
// while (i < arr2.length) {
//   sum = sum + arr2[i];
//   max = Math.max(sum, max);

//   if (sum < 0) {
//     sum = 0;
//   }
//   i++;
// }

// console.log(max);

// Check Palindrome using two pointer approach

// let str = "madam";
// function palindrome(str) {
//   let i = 0;
//   let j = str.length - 1;

//   while (i <= j) {
//     if (str.charAt(i) === str.charAt(j)) {
//       i++;
//       j--;
//     } else {
//       return "Not Palindrome";
//       break;
//     }
//   }
//   return "Is Palindrome";
// }

// console.log(palindrome(str));

// checking Palindrome with checking substrings
// let str = "nitin";
// let arr = [];
// function palindrome(str) {
//   let i = 0;
//   let j = str.length - 1;

//   while (i <= j) {
//     if (str.charAt(i) === str.charAt(j)) {
//       i++;
//       j--;
//     } else {
//       return false;
//       break;
//     }
//   }
//   return true;
// }

// function palindromeSubstring(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       let ch = str.substring(i, j);
//       if (palindrome(ch)) {
//         arr.push(ch);
//       }
//     }
//   }
//   return arr;
// }

// console.log(palindromeSubstring(str));

// let arr = [2, 5, 7, 4, 8, 10];

// for (let turn = 1; turn < arr.length; turn++) {
//   for (let i = 0; i < arr.length - turn; i++) {
//     if (arr[i + 1] < arr[i]) {
//       let temp = arr[i + 1];
//       arr[i + 1] = arr[i];
//       arr[i] = temp;
//     }
//   }
//   console.log(arr);
// }

// // Naive Solution O(n^2)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }
// let arr1 = [1, 2, 3, 2];
// let arr2 = [9, 1, 4, 4];
// console.log(same(arr1, arr2));

// // Another approach O(n)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {}
//   let frequencyCounter2 = {}
//   for(let val of arr1){
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//   }
//   for(let val of arr2){
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//   }
//   for(let key in frequencyCounter1){
//     if(!(key ** 2 in frequencyCounter2)){
//         return false
//     }
//     if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//         return false
//     }
//   }
//   return true
// }

// print all substrings which only contain vowels in a string

// function vowelSubstrings(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let start = 0;

//   while (start < str.length) {
//     let end = start;
//     while (end < str.length && vowels.includes(str[end])) {
//       end++;
//     }
//     if (start !== end) {
//       console.log(str.substring(start, end));
//     }
//     start = end + 1;
//   }
// }

// const inputStr= "missiiapi";
// vowelSubstrings(inputStr);

// Substring Max length which contain only vowels
// function maxVowelLength(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let maxLength = 0;
//   let currentLength = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       currentLength++;
//       maxLength = Math.max(maxLength, currentLength);
//     } else {
//       currentLength = 0;
//     }
//   }

//   return maxLength;
// }

// const inputStr = "missiiapi";
// console.log(maxVowelLength(inputStr));

// find index of first consonant
function firstConsonant(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      return i;
    }
  }

  return -1;
}

const inputStr = "aaiiesp";
console.log(firstConsonant(inputStr));
