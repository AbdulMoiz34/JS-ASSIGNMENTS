// CHAPTER 35-38 (FUNCTION)

// QUESTION 01
// function displayDate() {
//     const currentDate = new Date();
//     console.log(currentDate);
// }

// displayDate();


// QUESTION 02
// function greet(firstName, lastName) {
//     console.log(`Welcome! ${firstName} ${lastName}.`);
// }

// greet("Abdul" , "Moiz");


// QUESTION 03
// function sum(num1, num2) {
//     return num1 + num2;
// }


// QUESTION 04
// const num1 = prompt("Enter a number.");
// const opt = prompt("Enter an operator. + - * / %");
// const num2 = prompt("Enter a second number.");
// function calculator(num1, num2, opt) {
//     let sum = 0;
//     switch (opt) {
//         case "+":
//             sum = num1 + num2;
//             break;
//         case "-":
//             sum = num1 - num2;
//             break;
//         case "*":
//             sum = num1 * num2;
//             break;
//         case "/":
//             sum = num1 / num2;
//             break;
//         case "%":
//             sum = num1 % num2;
//             break;
//         default:
//             alert("Please enter a valid opt");
//     }
//     return sum;
// }

// const res = calculator(num1, num2 , opt);
// console.log(res);


// QUESTION 05
// function square(num) {
//     console.log(num * num);
// }


// QUESTION 06
// function factorial(num) {
//     return (num > 1) ? num * factorial(num - 1) : 1;
// }

// const num = prompt("Enter a number for finding factorial");
// if (isNaN(num)) {
//     alert("Please Enter a valid number");
// } else {
//     factorial(num);
//     console.log(`The factorial of ${num} is: ${factorial(num)}`);
// }

// QUESTION 07
// function counting(start, end) {
//     for (let i = start; i <= end; i++) {
//         console.log(i);
//     }
// }


// QUESTION 08
// function hypotenuse(base, perp) {
//     function calculateSquare(num) {
//         return num * num;
//     }

//     let baseSquare = calculateSquare(base);
//     let perpSquare = calculateSquare(perp);

//     hypotenuse = baseSquare + perpSquare;
//     return Math.sqrt(hypotenuse);
// }


// const res = hypotenuse(3, 4);
// console.log("The hypotenuse is: " + result);


// QUESTION 09
// Arguments as value
// function calculateArea(width, height) {
//     return width * height;
// }
// let area1 = calculateArea(5, 10);
// console.log("Area of the rectangle (using values): " + area1);

// Arguments as variables
// function calculateArea(width, height) {
//     return width * height;
// }
// let rectWidth = 7;
// let rectHeight = 12;
// let area2 = calculateArea(rectWidth, rectHeight);
// console.log("Area of the rectangle (using variables): " + area2);


// QUESTION 10
// const word = prompt("Enter a word").toLowerCase();
// function isPalindrome(word) {
//     return word === word.split("").reverse().join("");
// }

// console.log(isPalindrome(word));


// QUESTION 11
// function changeTitlecase(sentence) {
//     const inArr = sentence.split(" ");
//     for (let i = 0; i < inArr.length; i++) {
//         inArr[i] = inArr[i][0].toUpperCase() + inArr[i].slice(1);
//     }
//     return inArr.join(" ");
// }
// const input = "the quick brown fox";
// const output = changeTitlecase(input);
// console.log(output);


// QUESTION 12
// function longestWord(str) {
//     const words = str.split(" ");
//     let longestWord = "";
//     for (let word of words) {
//         if (longestWord.length < word.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// console.log(longestWord("quick brown fox jump lazy in the top"));


// QUESTION 13
// function countOccurrences(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === letter.toLowerCase()) {
//             count++;
//         }
//     }
//     return count;
// }

// const res = countOccurrences("JSResourceS.com", "o")
// console.log(res);


// QUESTION 14
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log(`The circumference of a circle is: ${circumference.toFixed(2)}`);
}

function calcArea(radius) {
    const area = Math.PI * (Math.pow(radius, 2));
    console.log(`The circumference of a circle is: ${area.toFixed(2)}`);
}

calcCircumference(5);
calcArea(5);