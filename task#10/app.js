// CHAP 39--42

// QUESTION 01
// function power(a, b) {
//     return a ** b;
// }
// const res = power(2, 10);
// console.log(res);


// QUESTION 02
// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 == 0) {
//             if (year % 400 == 0) {
//                 return true;
//             }
//             return false;
//         }
//         return true;
//     } else {
//         return false;
//     }
// }
// const res = isLeapYear("2032");
// console.log(res);

// QUESTION 03
// function area(a, b, c) {
//     const s = (a + b + c) / 2;

//     function triangleArea() {
//         return s(s - a)(s - b)(s - c);
//     }
//     const area = triangleArea();
//     return area;
// }

// QUESTION 04
// function mainFunc(marks) {
//     function average() {
//         return marks / 3;
//     }
//     function percentage() {
//         return (marks / 3) * 100;
//     }

//     console.log(`Average: ${average()}`);
//     console.log(`Percentage: ${percentage()}`);
// }

// mainFunc(200);


// QUESTION 05
// function findIdx(str, char, startIdx = 0) {
//     let idx;
//     for (let i = startIdx; i < str.length; i++) {
//         if (str[i] === char) {
//             idx = i;
//             break;
//         }
//     }
//     console.log(idx);
// }

// findIdx("Hello world", "o", 5);


// QUESTION 06
// function delVowels(sentence) {
//     let updatedSentence = "";
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] == "i" || sentence[i] == "a" || sentence[i] == "e" || sentence[i] == "o" || sentence[i] == "u") {
//             updatedSentence += sentence[i].slice(0, i) + sentence[i].slice(i + 1);
//         }
//     }
//     console.log(updatedSentence);
// }

// delVowels("Hello world");


// QUESTION 07
// function occurrences(sentence) {
//     const isVowels = /[aeiou]/;
//     const arr = [];
//     for (let i = 0; i < sentence.length - 1; i++) {
//         // console.log(sentence[i]);
//         if (isVowels.test(sentence[i]) && isVowels.test(sentence[i + 1])) {
//             let temp = sentence[i] + sentence[i + 1];
//             arr.push(temp);
//         }
//     }
//     return arr;
// }

// console.log(occurrences("Pleases read this application and give me gratuity"));


// QUESTION 08
// const distance = prompt("Please Enter distance in km.");
// function inMeter() {
//     return parseFloat(distance) * 1000;
// }

// function inFeet() {
//     return parseFloat(distance) * 3280.84;
// }

// function inches() {
//     return parseFloat(distance) * 39370.1;
// }

// function centimeter() {
//     return parseFloat(distance) * 100000;
// }
// const meter = inMeter();
// const feet = inFeet();
// const inch = inches();
// const cm = centimeter();
// console.log(`Distance in meter: ${meter} m.`);
// console.log(`Distance in feet: ${feet} ft.`);
// console.log(`Distance in inch: ${inch} in.`);
// console.log(`Distance in cm: ${cm} cm.`);


// QUESTION 09
// const employeeHour = parseInt(prompt("Enter hours?"));
// if (employeeHour > 40) {
//     const overtime = employeeHour - 40;
//     console.log(`Overtime pay: ${overtime * 12}`);
// } else {
//     alert("No over time pay.")
// }


// QUESTION 10
const input = +prompt("Enter amount to withdraw.");
let hundreds = 0;
let fifties = 0;
let twenties = 0;
let tens = 0;
let amount = Number(input.toFixed(2));
console.log(amount);

while (amount >= 100) {
    amount -= 100;
    hundreds++;
}

while (amount >= 50 && amount < 100) {
    fifties++;
    amount -= 50;
}

while (amount >= 10 && amount < 50) {
    amount -= 10;
    tens++;
}

console.log(`you'll have ${hundreds} hundred notes ${fifties} fifty notes and ${tens} ten notes.`);