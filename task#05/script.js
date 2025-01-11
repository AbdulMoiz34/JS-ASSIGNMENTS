// ASSIGNMENT 17-20

// QUESTION 1
// const arr = [[]];

// QUESTION 02
// const matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         document.write(matrix[i][j]+" ");
//     }
//     document.write("<br />");
// }


// QUESTION 03
// for (let i = 1; i <= 10; i++) {
//     document.write(i + "<br />");
// }


// QUESTION 04
// const table = +prompt("Enter a number to show its multiplication table");
// const length = +prompt("Enter length multiplication table");
// if (table > 0 && length > 1) {
//     document.write(`Multiplication table of ${table} <br />`);
//     document.write(`Length ${length} <br /> <br />`);
//     for (let i = 1; i <= length; i++) {
//         document.write(`${table} X ${length} = ${table * i} <br />`);
//     }
// }


// QUESTION 05
// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     document.write(`${fruits[i]} <br />`);
// }
// document.write("<br />")
// for (let i = 0; i < fruits.length; i++) {
//     document.write(`Element at index ${i} is ${fruits[i]} <br />`);
// }

// QUESTION 06
// document.write("<b>Counting: </b><br /><br />");
// for (let i = 1; i < 16; i++) {
//     document.write(`${i}, `);
// }

// document.write("<br /><br /> <b>Reverse Counting: </b><br /><br />");
// document.write("")
// for (let i = 10; i > 0; i--) {
//     document.write(`${i}, `);
// }

// document.write("<br /><br /> <b>EVEN: </b><br /><br />");
// for (let i = 0; i <= 20; i += 2) {
//     document.write(`${i}, `);
// }
// document.write("<br /><br /> <b>ODD: </b><br /><br />");

// for (let i = 1; i <= 20; i += 2) {
//     document.write(`${i}, `);
// }
// document.write("<br /><br /> <b>Series: </b><br /><br />");

// for (let i = 2; i <= 20; i += 2) {
//     document.write(`${i}k, `);
// }


// QUESTION 07
// const items = ["cakes", "apple pie", "cookie", "chips", "juice", "patties"];
// const userItem = prompt("welcome to ABC bakery. what do u wanna order?").toLowerCase();
// let isFound = false;
// for (let i = 0; i < items.length; i++) {
//     if (items[i] === userItem) {
//         isFound = true;
//         document.write(`${userItem} is available at ${i} in our bakery.`);
//     }
// }

// if (!isFound) {
//     document.write(`We are sorry. ${userItem} is not available in our bakery`);
// }

// QUESTION 08
// const arr = [1, -2, 3, 56, -102, 87, 334, 0];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);


// QUESTION 09
// const arr = [1, -2, 3, 56, -12.2, -12, 87, 334, 0];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i];
//     }
// }
// console.log(min);


// QUESTION 10
// let arr = [];
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//        arr.push(i);
//     }
// }
// console.log(arr);

