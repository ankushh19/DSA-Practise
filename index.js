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

// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   }

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];

//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }
//   return true;
// }

// console.log(validAnagram("circus", "sucric"));

// Recursion
// Power
// function pow(n, b) {
//   if (b === 0) {
//     return 1;
//   }
//   let ans = pow(n, b - 1);
//   return n * ans;
// }
// console.log(pow(2, 5));

// Fibonnaci
// function fibo(n) {
//   if (n == 0 || n == 1) {
//     return n;
//   }
//   let f1 = fibo(n - 1);
//   let f2 = fibo(n - 2);
//   return f1 + f2;
// }
// console.log(fibo(6));

// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false

// function sameFrequency(num1, num2) {
//   let str1 = num1.toString();
//   let str2 = num2.toString();
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let countNum1 = {};
//   let countNum2 = {};

//   for (let i = 0; i < str1.length; i++) {
//     countNum1[str1[i]] = (countNum1[str1[i]] || 0) + 1;
//   }

//   for (let j = 0; j < str2.length; j++) {
//     countNum2[str2[j]] = (countNum2[str2[j]] || 0) + 1;
//   }

//   for (let key in countNum1) {
//     if (countNum1[key] !== countNum2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates("a", "b", "c", "a")); // true

// function areThereDuplicates() {
//   let collection = {};
//   for (let val in arguments) {
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//   }
//   for (let key in collection) {
//     if (collection[key] > 1) {
//       return true;
//     }
//   }
//   return false;
// }

// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

// function averagePair(arr, num) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     let avg = (arr[start] + arr[end]) / 2;
//     if (avg === num) {
//       return true;
//     } else if (avg < num) {
//       start++;
//     } else {
//       end--;
//     }
//   }
//   return false;
// }

// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) {
    return true;
  }
  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
}
