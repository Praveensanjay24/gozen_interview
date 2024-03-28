

/* 1: Find Missing Number
Question: Given an array of integers from 1 to n with one missing number, find the missing number.
Explanation:
One approach is to calculate the sum of integers from 1 to n using the formula (n * (n + 1)) / 2.
Then, iterate through the given array and calculate the sum of all elements.
The missing number can be found by subtracting the sum of array elements from the sum of integers
from 1 to n.
Example Input:
Input Array: [1, 2, 3, 4, 6, 7, 8]
Answer:
Missing Number: 5
Test Input:
Input Array: [1, 3, 4, 5, 6, 7, 8, 9, 10] */


function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    const arrSum = arr.reduce((acc, num) => acc + num, 0);
    return totalSum - arrSum;
}


const inputArray = [1, 3, 4, 5, 6, 7, 8, 9, 10];
const missingNumber = findMissingNumber(inputArray);
console.log("Missing Number:", missingNumber);

//Missing Number: 2


/* 2: Remove Duplicates
Question: Given a sorted array, remove the duplicates in-place such that each element appears only
once and returns the new length.
Explanation:
Start with two pointers, i and j, initially pointing to the first two elements of the array.
Iterate through the array with the pointer j, comparing each element with the element at index i.
If the element at index j is different from the element at index i, increment i and update the element at
index i with the element at index j.
Continue this process until j reaches the end of the array. The length of the array up to index i will be
the new length without duplicates.
Example Input:
Input Array: [1, 1, 2, 2, 3, 4, 4, 5]
Answer:
New Length: 5
Test Input:
Input Array: [1, 1, 1, 2, 2, 3, 3, 3, 4, 5] */


function removeDuplicates(nums) {
    if (nums.length === 0) return 0; 

    let i = 0; 
    for (let j = 1; j < nums.length; j++) { 
        if (nums[j] !== nums[i]) { 
            i++; 
            nums[i] = nums[j]; 
        }
    }
    return i + 1; 
}


const inputArray = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5];
const newLength = removeDuplicates(inputArray);
console.log("New Length:", newLength);

// New Length: 4




/* 3. Recursion Question: Factorial
Question: Write a recursive function to find the factorial of a non-negative integer n.
Explanation:
The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
Base case: If n is 0 or 1, return 1 (the factorial of 0 and 1 is 1).
Recursive step: Multiply n by the factorial of n - 1 (i.e., n * factorial(n - 1)).
Example Input:
n = 5
Answer:
Factorial of 5: 120
Test Input:
n = 10 */


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const n = 10;
const result = factorial(n);
console.log("Factorial of", n + ":", result);

// Factorial of 10: 3628800




/* 4. Rotate Array
Question: Given an array and an integer k, rotate the array to the right by k steps.
Explanation:
Given an array and an integer k, we want to move the last k elements of the array to the front.
We can achieve this by performing the following steps:
● Reverse the entire array.
● Reverse the first k elements.
● Reverse the remaining elements.
Example Input:
Input Array: [1, 2, 3, 4, 5, 6, 7]
k = 3
Answer:
Rotated Array: [5, 6, 7, 1, 2, 3, 4]
Test Input:
Input Array: [3, 8, 9, 2, 5]
k = 2 */

function rotateArray(nums, k) {
    const reverseArray = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };

    const n = nums.length;
    k %= n; 
    reverseArray(nums, 0, n - 1); 
    reverseArray(nums, 0, k - 1); 
    reverseArray(nums, k, n - 1);
    return nums;
}


const inputArray = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const rotatedArray = rotateArray(inputArray, k);
console.log("Rotated Array:", rotatedArray);

// Rotated Array: [5, 6, 7, 1, 2, 3, 4]
