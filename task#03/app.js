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



//               ASSIGNMENT 12-13
// QUESTION 1
// let input = prompt("Enter a character:");
// if (input.length !== 1) {
//     alert("Please Enter only 1 character");
// } else {
//     let ascii = input.charCodeAt(0);
//     if (ascii >= 48 && ascii <= 57) {
//         alert("The input is a number");
//     } else if (ascii >= 65 && ascii <= 90) {
//         alert("The input is an uppercase letter ");
//     } else if (ascii >= 97 && ascii <= 122) {
//         alert("The input is a lowercase letter");
//     }
// }

// QUESTION 2
// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");

// if (num1 > num2) {
//     alert(`${num1} is greater than ${num2}`);
// } else if (num2 > num1) {
//     alert(`${num2} is greater than ${num1}`);
// } else if (num1 === num2) {
//     alert(`Both Numbers are equal`);
// } else {
//     alert("Please Enter a correct number.");
// }

// QUESTION 3
// let userNum = +prompt("Enter a number.");
// if (userNum > 0) {
//     alert("The number is positive");
// } else if (userNum < 0) {
//     alert("The number is negative")
// } else if (userNum === 0) {
//     alert("The number is zero.");
// } else {
//     alert("Number will be acceptable");
// }

// QUESTION 4
// let userStr = prompt("Enter a letter");
// userStr = userStr && userStr.toLowerCase();
// console.log(userStr);

// if (userStr.length !== 1) {
//     alert("Enter only 1 letter.");
// } else {
//     if (userStr === "a" || userStr === "e" || userStr === "i" || userStr === "o" || userStr === "u") {
//         alert("Your Letter is from vowel.");
//     } else {
//         alert(false);
//     }
// }


// QUESTION 5
// let myPass = "abdulmoiz123";
// let userPass = prompt("Enter a password");
// if (!userPass) {
//     alert("Please Enter a password");
// } else if (myPass === userPass.trim()) {
//     alert("Correct! The password you entered matches the original password. ");
// } else {
//     alert("Incorrect password");
// }

// QUESTION 6
// var greeting;
// var hour = 19;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// console.log(greeting);

// QUESTION 7
let time = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):"), 10);

if (time >= 0 && time < 1200) {
    alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
} else {
    alert("Invalid time entered. Please enter a valid 24-hour format time."); // Handle invalid input
}


