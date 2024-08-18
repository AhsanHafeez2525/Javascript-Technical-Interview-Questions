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

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let mergedArray = array1.concat(array2);
// console.log("Merged Array:", mergedArray);

// slice

// let arr = [1, 2, 3, 4, 5];
// let slicedArr = arr.slice(1, 4);
// console.log(slicedArr);
// console.log(arr);

// splice

// let arrSplice = [1, 2, 3, 4, 5];
// let splicedArr = arrSplice.splice(1, 2, 10, 20);
// console.log(splicedArr);
// console.log(arrSplice);

// filter

// const users = [
//   { name: "Alice", isActive: true },
//   { name: "Bob", isActive: false },
//   { name: "Charlie", isActive: true },
// ];

// const activeUsers = users.filter((user) => user.isActive);
// console.log(activeUsers);

// find

// eg 1
// const usersData = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// const user = usersData.find((user) => user.id === 2);
// console.log(user);

// eg 2

// const usersAuth = [
//   { id: 1, username: "john_doe", email: "john@example.com" },
//   { id: 2, username: "jane_doe", email: "jane@example.com" },
// ];

// const userRegister = usersAuth.find(
//   (user) => user.email === "john@example.com"
// );
// if (user) {
//   console.log("User found:", userRegister);
// } else {
//   console.log("User not found");
// }

// findIndex

// const tasks = [
//   { id: 1, title: "Task 1", completed: false },
//   { id: 2, title: "Task 2", completed: false },
//   { id: 3, title: "Task 3", completed: false },
// ];

// const taskIndex = tasks.findIndex((task) => task.id === 2);
// if (taskIndex !== -1) {
//   tasks[taskIndex].completed = true;
//   console.log("Task updated:", tasks[taskIndex]);
// } else {
//   console.log("Task not found");
// }

// objects

const usersData = {
  name: "ahsan",
  age: 25,
  address: "islamabad",
  // space between act as a key
  "Like this property": true,
};

// modify the property
// usersData.name = "satti";
// delete the property
// delete usersData.address;
// console.log(usersData);
// access the property
// console.log(usersData.name);
// console.log(usersData.age);

// access space property

// console.log(usersData["Like this property"]);

// delete space property

// delete usersData["Like this property"];

// interview question on delete keyword

// const func = (function (a) {
//   delete a;
//   return a;
// })(5);

// console.log(func);

// output : 5 b/c delete keyword only use when we want to delete properties from an object not a local variable

// add a dynamic key value pairs an object

// const property = "firstName";

// const lastname = "bilal";

// const detail = {
//   [property]: lastname,
// };
// console.log(detail);

// we want to loop throught each of its keys and print the values or even the name of the keys

// for in loop

for (key in usersData) {
  console.log(key);
  // access values
  console.log(usersData[key]);
}

// 1
// what's the output?

const obj = {
  a: "one",
  b: "two",
  a: "three",
};
console.log(obj);
// if you have two keys with same name, the frist key will be replaced and it still in the first position with the last specified value

// 2

// create a function multiplyByTwo(obj) that multiplies all numerice property values of nums by 2

// let nums = {
//   a: 100,
//   b: 200,
//   title: "My nums",
// };

// multiplyByTwo(nums);

// function multiplyByTwo(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] = obj[key] *= 2;
//     }
//   }
// }
// console.log(nums);

// 3

//  output

// important

const a = {};

const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;

console.log(a[b]);

// json.stringify and json.parse

const userName = {
  name: "ahsan",
  age: 25,
};

// convert to string
const jsonString = JSON.stringify(userName);
// local storage
// localStorage.setItem("userName", jsonString);
// console.log(JSON.parse(localStorage.getItem("userName")));
console.log(jsonString);
// convert to object
console.log(JSON.parse(jsonString));

// when to use these?

// most common use case storing in local storage like setItem

//  we can't directly store objects in local storage

// 4

// what's the output
// spread the characters inside an array
console.log([..."ahsan"]);

// 5

// output

const user = { name: "John", age: 20 };
const admin = { admin: true, ...user };
console.log(admin);

// 6

// output

const settings = {
  userlastname: "sayyam",
  level: 40,
  health: 90,
};
const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

// 7

// output this keyword

const shape = {
  radius: 10,
  diameter() {
    // call this function reference to shape object
    return this.radius * 2;
  },
  // call this arrow function reference to window object
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // nan

//  8
// destructuring

let userAdmin = {
  name: "mohsin",
  age: 29,
  fullName: {
    first: "naseer",
    last: "ahmed",
  },
};
// rename
const name = "noman";
const { name: myName } = userAdmin;
const {
  fullName: { first },
} = userAdmin;

console.log(name);

console.log(first);

// 9

// output

// rest parameters

function getItems(fruitList, favouriteFruit, ...args) {
  return [...fruitList, ...args, favouriteFruit];
}
console.log(getItems(["banana", "apple"], "pear", "orange"));
