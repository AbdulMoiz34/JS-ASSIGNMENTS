// CHAPTER 26-30

// QUESTION 01
// const num = +prompt("Enter any positive number");
// if (num > 0) {
//     document.write(`number: ${num} <br />`);
//     document.write(`round off value: ${Math.round(num)} <br />`);
//     document.write(`floor value: ${Math.floor(num)} <br />`);
//     document.write(`ceil value: ${Math.ceil(num)} <br />`);
// } else {
//     alert("Please Enter positive number.");
// }


// QUESTION 02
// const num = +prompt("Enter a number");
// const isFloatNum = num.toString().includes(".");
// if (isFloatNum && num < 0) {
//     document.write(`number: ${num} <br />`);
//         document.write(`round off value: ${Math.round(num)} <br />`);
//         document.write(`floor value: ${Math.floor(num)} <br />`);
//         document.write(`ceil value: ${Math.ceil(num)} <br />`);
// } else {
//     alert("Please Enter negative floating point");
// }


// QUESTION 03
// let input = parseFloat(prompt("Enter a number:"));
// document.write(`The absolute value of ${input} is ${Math.abs(input)}.`);

// QUESTION 04
// const randomNum = Math.ceil(Math.random() * 6);
// console.log(`Random dice value: ${randomNum}`);

// QUESTION 05
// const coinToss = Math.ceil(Math.random() * 2);
// document.write(coinToss + "<br />")
// document.write(`random coin value: ${coinToss == 2 ? "Heads" : "Tails"}`);


// QUESTION 06
// const randomNumberBetween1and100 = Math.floor(Math.random() * 100) + 1;
// document.write(`Random Number between 1 and 100: ${randomNumberBetween1and100}`);


// QUESTION 07
// const userWeight = prompt("Enter your weight in kilograms");
// const parsedWeight = parseFloat(userWeight);
// console.log(`The weight of user is ${parsedWeight} kilograms`);

// QUESTION 08
// const secretNum = Math.ceil(Math.random() * 10);
// const userNum = +prompt("Enter a number between 1 and 10");
// if (userNum === secretNum) {
//     alert("Congrats🎉");
// } else {
//     alert("Try again");
// }
// console.log(secretNum);
// console.log(userNum);
