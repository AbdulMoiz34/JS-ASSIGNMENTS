// ASSIGNMENT 09-11
// QUESTION 1

// const cityName = prompt("Enter your city name?");
// if (cityName.toLowerCase() === "karachi") {
//     document.write("Welcome to the city of lights");
// }

// QUESTION 2
// const gender = prompt("Enter your gender?").toLowerCase();
// if (gender === "male") {
//     alert("Good Morning Sir");
// } else if (gender === "female") {
//     alert("Good Morning Madam");
// } else {
//     alert("Invalid gender");
// }

// QUESTION 3
// const color = prompt("Enter color of traffic signal?").toLowerCase();
// if (color === "red") {
//     alert("Must stop");
// } else if (color === "yellow") {
//     alert("Ready to move");
// } else if (color === "green") {
//     alert("Move now");
// } else {
//     alert("Invalid color");
// }


// QUESTION 4
// const fuel = prompt("Enter fuel type?").toLowerCase();
// if (fuel < 0.25) {
//     document.write("Please refill the fuel in your car");
// } else {
//     document.write("You can continue your journey");
// }


// QUESTION 5
// const obtainedMarks = prompt("Enter your obtained marks?");
// const totalMarks = prompt("Enter your total marks?");
// const percentage = obtainedMarks / totalMarks * 100;
// let grade;
// let remarks;
// if (percentage >= 80) {
//     grade = "A-One";
//     remarks = "Excellent";
// } else if (percentage >= 70 && percentage < 80) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60 && percentage < 70) {
//     grade = "B";
//     remarks = "You need to improve.";
// } else {
//     grade = "Fail";
//     remarks = "sorry";
// }
// document.write(`
//     <h1>Marksheet</h1><br/>
//     <p>Obtained Marks: ${obtainedMarks}</p>
//     <p>Total Marks: ${totalMarks}</p>
//     <p>Percentage: ${percentage}</p>
//     <p>Grade: ${grade}</p>
//     <p>Remarks: ${remarks}</p>
//     `);


// QUESTION 6
// const randomNumber = Math.ceil(Math.random() * 10); // number between 1 and 10
// const userGuess = +prompt("Enter your guess between 1 and 10?");
// if (randomNumber === userGuess) {
//     alert("Bingo! You are correct " + randomNumber);
// } else if (randomNumber + 1 === userGuess || randomNumber - 1 === userGuess) {
//     alert("You are very close " + randomNumber);
// } else {
//     alert("You are wrong " + randomNumber);
// }


// QUESTION 7
// const number = +prompt("Enter a number?");
// if (number % 3 === 0) {
//     alert("Number is divisible by 3");
// } else {
//     alert("Number is not divisible by 3.");
// }


// QUESTION 8
// const num = +prompt("Enter a number:");
// if (num % 2 == 0) {
//     alert(`${num} is even number`);
// } else {
//     alert(`${num} is odd number`);
// }


// QUESTION 9
// const temp = +prompt("Enter temperature in Celsius:");
// if (temp > 40) {
//     document.write("It is too hot outside");
// } else if (temp > 30) {
//     document.write("The weather today is normal.");
// } else if (temp > 20) {
//     document.write("Today's weather is cool.");
// } else if (temp > 10) {
//     document.write("OMG! Today's weather is so cool.");
// }


// QUESTION 10
// const num1 = +prompt("Enter first number?");
// const opt = prompt("Enter operator?");
// const num2 = +prompt("Enter second number?");
// if (opt === "+") {
//     document.write(`${num1} + ${num2} = ${num1 + num2}`);
// } else if (opt === "-") {
//     document.write(`${num1} - ${num2} = ${num1 - num2}`);
// } else if (opt === "*") {
//     document.write(`${num1} * ${num2} = ${num1 * num2}`);
// } else if (opt === "/") {
//     document.write(`${num1} / ${num2} = ${num1 / num2}`);
// } else if (opt === "%") {
//     document.write(`${num1} % ${num2} = ${num1 % num2}`);
// } else {
//     document.write("Invalid operator");
// }
