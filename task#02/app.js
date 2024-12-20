//            ASSIGNMENT 4
// QUESTION 1
// let str1, str2, str3;


// QUESTION 2
// LEGAL VARIABLE NAME
// let firstName;  // camelCase
// let _username;  // underscore are allowed at the beginning
// let age;  // simple and valid variable name
// let user2; // numbers are allowed, but not at the beginning
// let $price // dollar sign is allowed at the beginning

// ILLEGAL VARIABLE NAME
// let 1num;  variable must be begin with alphabets or special numbers e.g. $_
// let num-1; must not be dashed in the name
// let num 1  space isn't allowed
// let var;    name shouldn't be reserved words
// let @num;   special characters are not allowed

// QUESTION 3
// document.write(`
//     <h1>Rules for naming JS Variables</h1>
//     <ul>
//         <li>Variable must begin with a letter, $ or _. e.g. name, $name or _name</li>
//         <li>Variable names can only contain numbers, $, _</li>
//         <li>Variable names are case sensitive</li>
//         <li>Variable names should not be JS keywords</li>
//     </ul>
//     `);


//            ASSIGNMENT 5

// QUESTION 1
// let num1 = 3;
// let num2 = 5;

// let sum = num1 + num2;
// document.write(`sum of ${num1} and ${num2} is ${sum}`);


// QUESTION 2
// let num1 = 3;
// let num2 = 5;
// let sub = num1 - num2;
// let mul = num1 * num2;
// let div = num1 / num2;
// document.write(`subtraction of ${num1} and ${num2} is ${sub} <br>`);
// document.write(`multiplication of ${num1} and ${num2} is ${mul} <br>`);
// document.write(`division of ${num1} and ${num2} is ${div} <br>`);

// QUESTION 3
// let value;
// document.write(`Value after variable declaration is ${value} <br>`);
// value = 5;
// document.write(`Initial value: ${value} <br>`);
// value++
// document.write(`Value after increment: ${value} <br>`);
// value += 7;
// document.write(`Value after adding 7: ${value} <br>`);
// value--;
// document.write(`Value after decrement: ${value} <br>`);
// value %= 3;
// document.write(`The reminder is: ${value}`);

// QUESTION 4
// const TICKET_PRICE = 600;
// const TICKET_QUANTITY = 5;
// const TOTAL_COST = TICKET_PRICE * TICKET_QUANTITY;
// document.write(`Total cost of ${TICKET_QUANTITY} tickets is ${TOTAL_COST}`);


// QUESTION 5
// simple multiplication table
// let num = 4;
// document.write(`${4} X 1 = ${4 * 1} <br>`);
// document.write(`${4} X 2 = ${4 * 2} <br>`);
// document.write(`${4} X 3 = ${4 * 3} <br>`);
// document.write(`${4} X 4 = ${4 * 4} <br>`);
// document.write(`${4} X 5 = ${4 * 5} <br>`);
// document.write(`${4} X 6 = ${4 * 6} <br>`);
// document.write(`${4} X 7 = ${4 * 7} <br>`);
// document.write(`${4} X 8 = ${4 * 8} <br>`);
// document.write(`${4} X 9 = ${4 * 9} <br>`);
// document.write(`${4} X 10 = ${4 * 10} <br>`);


// using loop
// const num = +prompt("Enter a number", 2);
// if (num > 0) {
//     for (let i = 1; i <= 10; i++) {
//         document.write(`${num} X ${i} = ${num * i} <br>`);
//     }
// } else {
//     document.write("Please enter a positive number.");
// }


// QUESTION 6
// let temp = 25;
// let fahrenheit = (temp * 9 / 5) + 32;
// let celsius = (fahrenheit - 32) * 5 / 9;
// document.write(`${temp}°C is ${fahrenheit}°F and ${celsius}°C`);


// QUESTION 7
// const PRICEOFITEM1 = 600;
// const PRICEOFITEM2 = 1100;
// let quantityOfItem1 = 5;
// let quantityOfItem2 = 2;
// let DC = 200;
// let totalPrice = (PRICEOFITEM1 * quantityOfItem1) + (PRICEOFITEM2 * quantityOfItem2) + DC;
// document.write(`
//     <h1>Shopping Cart</h1>
//     <p>Price of Item 1 is ${PRICEOFITEM1}</p>
//     <p>Quantity of Item 1 is ${quantityOfItem1}</p>
//     <p>Price of Item 2 is ${PRICEOFITEM2}</p>
//    <p>Quantity of Item 2 is ${quantityOfItem2}</p>
//    <p>Shipping Charges ${DC}</br> </br>
//     Total cost of your order is <strong>${totalPrice}</strong></p>
// `);


// QUESTION 8
// const totalMarks = 550;
// const obtainedMarks = 450;
// const percentage = 450 / 550 * 100;

// document.write(`
//     <h1>Marks Sheet</h1>
//     <p>Marks obtained: ${obtainedMarks}</p>
//     <p>Total Marks: ${totalMarks}</p>
//     <p>percentage: ${percentage} </p>
//     `);



// QUESTION 9
// const dollars = 10;
// const riyals = 25;
// const dollarRate = 104.80;
// const riyalRate = 28;

// const totalPkr = 10 * 104.80 + 25 * 28;
// document.write(`
//     <h1>Currency in PKR</h1>
//     <p>Total currency in PKR: ${totalPkr}</p>
//     `);



// QUESTION 10
// let num = 876;
// num + 5;
// num * 10;
// num / 2;

// QUESTION 11
// let currentYear = 2024;
// const birthYear = 2004;

// document.write(`
//     <h1>Age Calculator</h1>
//    <p> Current Year: ${currentYear}</p>
//    <p>Birth Year: ${birthYear}</p>
//    <p> Your age is: ${currentYear - birthYear}</p>
//     `);

// QUESTION 12
// const radiusOfCircle = 20;
// const piVal = 3.142;
// const circumference = 2 * piVal * radiusOfCircle;
// const area = piVal * radiusOfCircle ** 2;
// document.write(`
//  <h1>The Geometrizer</h1>
//  <p>Radius of a circle: ${radiusOfCircle}</p>
// <p>circumference: ${circumference}</p>
// <p>Area of a circle: ${area}</p>
// `);

// QUESTION 13
// const favSnack = "Chips";
// const currentAge = 15;
// const maxAge = 65;
// const estimatedAmount = 3;
// const totalAmount = (maxAge - currentAge) * estimatedAmount;
// document.write(`
//     <h1>Snack Calculator</h1>
//     <p>Favorite snack: ${favSnack}</p>
//     <p>Current age: ${currentAge}</p>
//     <p>Maximum age: ${maxAge}</p>
//     <p>Estimated amount per day: ${estimatedAmount}</p>
//     <p>You will need ${totalAmount} ${favSnack} to last you until the ripe old age of ${maxAge}</p>
// `);