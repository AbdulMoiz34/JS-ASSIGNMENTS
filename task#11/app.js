// CHAPTER# 43-48

// QUESTION 01
// function showAlert() {
//     alert("Hello!");
// }


// QUESTION 02
// function message() {
//     alert("Thanks for purchasing a phone from us.");
// }


// QUESTION O3
// const studentNames = ["Jhone", "Alex", "Mark", "Doe"];
// const studentClasses = ["Javascript", "HTML", "CSS3", "Domain and Hosting"];
// const tbody = document.getElementById("tableBody");

// function displayData() {
//     tbody.innerHTML = "";
//     for (let i = 0; i < studentNames.length; i++) {
//         tbody.innerHTML += ` <tr>
//                 <td>${i}</td>
//                 <td>${studentNames[i]}</td>
//                 <td>${studentClasses[i]}</td>
//                 <td>
//                     <button onclick="delStd(${i})">DEL</button>
//                 </td>
//             </tr>`;
//     }
// }
// function delStd(idx) {
//     studentNames.splice(idx, 1);
//     studentClasses.splice(idx, 1);
//     displayData();
// }
// displayData();


// QUESTION 04
// function swapImage() {
//     const img = document.getElementById("img");
//     if (event.type === "mouseover") {
//         img.src = "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg";
//     } else {
//         img.src = "https://t3.ftcdn.net/jpg/06/15/49/68/360_F_615496890_W34yB8VDE6n5pehb5QCt1ek5oEvRo9qA.jpg";
//     }
// }


// QUESTION 05
// let counter = 0;
// const counterEl = document.getElementById("counter");
// function increaseCounter() {
//     counter++;
//     counterEl.textContent = counter;
// }
// function decreaseCounter() {
//     counter--;
//     counterEl.textContent = counter;
// }