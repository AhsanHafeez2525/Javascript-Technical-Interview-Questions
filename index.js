// How To find duplicate elements in array in javascript

// const array = [1, 2, 3, 4, 2, 3, 5, 6, 1, 5, 11];

// const duplicates = array.filter((item, index) => array.indexOf(item) !== index);

// console.log(duplicates); // Output: [2, 3, 1,5]

// How To find max/min in a given array in javascript

// method 1

// const array = [10, 20, 30, 5, 15, 25];

// const max = Math.max(...array);
// const min = Math.min(...array);

// console.log(`Max: ${max}`);
// console.log(`Min: ${min}`);

// method 2

// const array = [10, 20, 30, 5, 15, 25];

// const max = array.reduce((acc, val) => (val > acc ? val : acc), array[0]);

// console.log(`Max: ${max}`);

// what is the difference between '==' and '===' operaror

// var x = 9;

// var y = 9;

// console.log(x === y);

// Sort the array and find the third highest in javascript

// const array = [10, 20, 30, 5, 15, 25];

// array.sort((a, b) => b - a);

// const thirdHighest = array[2];

// console.log(`Third Highest: ${thirdHighest}`);

// find second Largest value in array and remove first element in an array in javascript
// Example array
// let arr = [5, 3, 9, 1, 6, 8];
// let largest = Math.max(...arr);
// let secondLargest = Math.max(...arr.filter((num) => num !== largest)); // Find the second largest value
// console.log("Second Largest:", secondLargest);

// arr.shift();
// console.log("Array after removing first element:", arr);

// concat ()

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = array1.concat(array2);
console.log("Merged Array:", mergedArray);

// slice

let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 4);
console.log(slicedArr);
console.log(arr);

// splice

let arrSplice = [1, 2, 3, 4, 5];
let splicedArr = arrSplice.splice(1, 2, 10, 20);
console.log(splicedArr);
console.log(arrSplice);
