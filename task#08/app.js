// CHAPTER 31-34

// QUESTION 01
// const currentDate = new Date();
// console.log(currentDate)

// QUESTION 02
// const monthNames = ["January", "february", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let currentMonth = new Date().getMonth();
// alert("Current Month: " + monthNames[currentMonth]);

// QUESTION 03
// const currentDate = new Date();
// const days = ["Sun", "Mon", "Tue", "Wed", "Thu" , "Fri", "Sat"];
// alert(days[currentDate.getDay()]);


// QUESTION 04
// const currentDate = new Date();
// switch (currentDate.getDay()) {
//     case 0:
//     case 6:
//         alert("It's fun day");
//         break;
// }


// QUESTION 05
// const today = new Date();
// const date = today.getDate();
// if (date < 16) {
//     console.log("First fifteen days of the month.");
// } else {
//     console.log("Last days of the month");
// }


// QUESTION 06
// const currentDate = new Date();
// document.write(`Current Date: ${currentDate}<br /> `);
// document.write(`Elapsed ms since january 1, 1970: `, currentDate.getTime());
// document.write(`<br /> Elapsed minutes since january 1, 1970: `, currentDate.getTime() / (1000 * 60));

// QUESTION 07
// const date = new Date();
// const time = date.getHours();
// alert(time >= 12 ? "It's PM" : "It's AM");


// QUESTION 08
// const laterDay = new Date("12 31 2020");
// console.log(`Later Day: ${laterDay}`);


// QUESTION 09
// const ramadanDate = new Date("april 18, 2024");
// const currentDate = new Date();
// const totalDays = (currentDate.getTime() - ramadanDate.getTime()) / (1000 * 60 * 60 * 24);
// console.log(`${Math.floor(totalDays)} days have passed since 1st Ramadan, 2024`);


// QUESTION 10
// const startOf2015 = new Date("01 jan 2025");
// const currentDate = new Date();
// const diffMs = currentDate - startOf2015;
// const secondsElapsed = diffMs / 1000;
// document.write("Seconds since the start of 2015: " + Math.floor(secondsElapsed));


// QUESTION 11
// const currentDate = new Date();
// const h = currentDate.getHours().toString() - 1;
// document.write(`Current Date: ${currentDate} <br />`);
// currentDate.setHours(h)
// document.write(`01 hour age, It was ${currentDate}`);


// QUESTION 12
// const currentDate = new Date();
// document.write(`Current Date: ${currentDate} <br />`);
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// document.write(`100 years back, It was ${currentDate}`);


// QUESTION 13
// const currentDate = new Date();
// const age = prompt("Enter your age?");
// const birthYear = currentDate.getFullYear() - age;
// console.log(birthYear);


// QUESTION 14
// const customerName = "ABC Customer";
// const currentMonth = "February";
// const numberOfUnits = 410;
// const chargesPerUnit = 16;
// const netAmount = numberOfUnits * chargesPerUnit;
// let latePaymentSurcharge = 350;
// const grossAmount = netAmount + latePaymentSurcharge;

// document.write(`<h1>K-Electric Bill</h1> <br />`);
// document.write(`Month: <b>${currentMonth} </b> <br />`);
// document.write(`Number of Units: <b>${numberOfUnits} </b> <br />`);
// document.write(`Charges per Units: <b>${chargesPerUnit} </b> <br />`);
// document.write(`Charges per Units: <b>${chargesPerUnit} </b> <br />`);
// document.write("<br />");
// document.write(`Net amount payable(within Due Date): <b>${netAmount} </b>`);
// document.write(`<br />Late Payment surcharge: <b>${latePaymentSurcharge} </b> <br />`);
// document.write(`Gross Amount Payable(after due date): <b>${grossAmount} </b>`);