//                ASSIGNMENT 14-16
// QUESTION 1
// const studentNames = [];

// QUESTION 2
// const studentNames = new Array();

// QUESTION 3
// const stringArray = ["Ali", "Ahmed", "Asad"];

// QUESTION 4
// const numberArray = [2, 3, 4, 5, 6];

// QUESTION 5
// const booleanArray = [true, false];

// QUESTION 6
// const mixedArray = [1, 2, 3, 4, true, "Abdul", "ghous ahmed"];

// QUESTION 7
// const qualifications = ["SSC", "HSC", "BSCS", "AI","BCOM"];
// document.write("<h1>Qualifications</h1>");
// for (let i = 0; i < qualifications.length; i++) {
//     document.write(`${qualifications[i]} </br>`);
// }

// QUESTION 8
// const studentNames = ["Abdul", "Hamza", "Ahmed"];
// const studentsScores = [320, 200, 250];
// const totalMarks = 500;
// for (let i = 0; i < studentNames.length; i++) {
//     document.write(`Score of ${studentNames[i]} is ${studentsScores[i]}.Percentage: ${studentsScores[i] / 500 * 100}% <br />`);
// }



// QUESTION 09
// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// document.write("<h3>Initial Colors Array:</h3> " + colors + "<br>");

// let colorToAddAtStart = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(colorToAddAtStart);
// document.write(`<h3>After adding color to the beginning</h3>`);



// QUESTION 10
// const stdScores = [320, 230, 480, 120, 100];
// const sortedArray = stdScores.sort((a, b) => a - b);
// console.log(sortedArray);


// QUESTION 11
// const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// const selectedCities = cities.slice(0, 2);
// document.write(`<b>Cities List: </b><br /> ${cities} <br /> <br />`);
// document.write(`<b>Selected Cities:</b> <br /> ${selectedCities}`);


// QUESTION 12
// const arr = ["This", "is", "my", "cat"];
// console.log(arr);

// console.log(arr.join(" "));


// QUESTION 13
// FIFO = First In First Out. unshift is used to add the item from the begging of the array. pop is used to delete the item from the last
// const devices = [];
// devices.unshift("Laptop");
// devices.unshift("Computer");
// document.write(`Devices: <br /> ${devices} <br /> <br />`);

// const outItem1 = devices.pop();
// const outItem2 = devices.pop();
// document.write(`Out: <br /> ${outItem1} <br />`);
// document.write(`<br />Out: <br /> ${outItem2}`);




// QUESTION 14
// LIFO = Last In First Out. push adds the items from the last and pop removes the items from the last
// const devices = [];
// devices.push("Computer");
// devices.push("Keyboard");
// devices.push("mouse");
// devices.push("Printer");
// devices.push("Speakers");
// document.write(`Devices: <br /> ${devices}`);
// let outItem1 = devices.pop();
// let outItem2 = devices.pop();
// document.write(`<br /> <br /> Out: <br /> ${outItem1}`)
// document.write(`<br /><br /> Out: <br /> ${outItem2}`);


// QUESTION 15
// const products = ["Dawlance", "Apple", "Samsung", "Nokia"];
// document.write(`
//     <select name="" id="product">
//     </select>
//     `)
// for (let i = 0; i < products.length; i++) {
//     let opt = document.createElement("option");
//     let select = document.querySelector("#product");
//     opt.innerText = products[i];
//     select.appendChild(opt);
// }