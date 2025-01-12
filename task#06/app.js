// CHAPTER 21 - 25
// const firstName = prompt("Enter first name.");
// const lastName = prompt("Enter last name");
// const fullName = firstName + " " + lastName; // first way
// const fullName = firstName.concat(" ", lastName);
// console.log(`Hello! ${fullName}`);



// QUESTION 5
// const countryName = "Pakistani";
// console.log(countryName.at(3)); // first way
// console.log(countryName.slice(3, 3 + 1)); // second way

// QUESTION 7
// const city = "Hyderabad";
// console.log(city.replace("Hyder" , "Islam"));

// QUESTION 8
// var message = `Ali and Sami are best friends.They play cricket and football together.`;

// console.log(message.replaceAll("and", "&"));


// QUESTION 9
// const str = "472";
// const num = Number(str); //first-way
// const num = +str;   // second-way
// document.write(`Value: ${str} <br />`);
// document.write(`Type: ${typeof str} <br />`);
// document.write(`Value: ${num} <br />`);
// document.write(`Type: ${typeof num} <br />`);


// QUESTION 10
// const userInp = prompt("Enter");
// document.write(`User input: ${userInp} <br />`);
// document.write(`Upper case: ${userInp.toUpperCase()}`);


// QUESTION 11
// const userInp = prompt("Enter...");
// const titlecase = userInp.at(0).toUpperCase() + userInp.slice(1);
// document.write(`User input: ${userInp} <br />`);
// document.write(`Upper case: ${titlecase}`);


// QUESTION 12
// const num = 35.36;
// const result = num.toString().replace(".", "");
// document.write(`Number: ${num} <br />`);
// document.write(`Result: ${result}`);


// QUESTION 13
// First approach
// const username = prompt("Enter your name");
// let isFound = false;
// for (let i = 0; i < username.length; i++) {
//     let match = username.charCodeAt(i);
//     if (match === 33 || match === 44 || match === 46 || match === 64) {
//         alert("User name is not correct");
//         isFound = true;
//         break;
//     }
// }

// if (!isFound) {
//     console.log("Valid username");
// }

// second approach
// const username = prompt("Enter your name");
// const validations = /[@.,!]/;
// if (validations.test(username)) {
//     alert("username is not valid");
// } else {
//     alert("username is valid.");
// }


// QUESTION 14
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// const item = prompt("Enter item").toLowerCase();
// if (!item) {
//     alert("Please enter item")
// }
// if (items.includes(item)) {
//     alert(`${item} is available at ${items.indexOf(item)} in our bakery.`);
// } else {
//     alert(`We are sorry ${item} is not available in our bakery.`);
// }


// QUESTION 15
// const password = prompt("Enter password");
// let hasAlphabets = false;
// let hasNumbers = false;

// if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//     alert("Password can not begin with numbers");
// } else {
//     for (let i = 0; i < password.length; i++) {
//         let charCode = password.charCodeAt(i);
//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             hasAlphabets = true;
//         } else if (charCode >= 48 && charCode <= 57) {
//             hasNumbers = true;
//         }
//     }

//     if (password.length >= 6 && hasNumbers && hasAlphabets) {
//         alert("Password valid!");
//     } else {
//         alert("Password is not valid!");
//     }
// }

// QUESTION 16
// const university = "University of karachi";
// const changeIntoAnArr =  university.split("");
// for(let alphabet of changeIntoAnArr) {
//     console.log(alphabet);
//     document.write(alphabet+"<br />");
// }


// QUESTION 17
// const countryName = prompt("Enter country name?");
// console.log(`User Input: ${countryName}`);
// console.log(`Last character of input: ${countryName.at(-1)}`);


// QUESTION 18
// const text = "The quick brown fox jumps over the lazy dog";
// const findWord = "the";
// let count = 0;
// let words = text.split(" ");
// for (let i = 0; i < words.length; i++) {
//     if (words[i].toLowerCase() === findWord) {
//         count++;
//     }
// }
// document.write(`Text: ${text} <br />  <br />`);
// document.write(`There are ${count} occurence(s) of word "${findWord}"`);