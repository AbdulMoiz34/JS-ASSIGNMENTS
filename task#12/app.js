// CHAPTER # 49-52
// QUESTION 02

// const p = document.getElementById("para");
// const paragraph = `This is one of the popular car. This car is specially built for racing.Fastest car in the word.Lorem ipsum 
//     dolor sit amet consectetur adipisicing elit. Voluptates, labore.`;

// p.textContent = paragraph.slice(0, 50) + "...";
// let isExpand = false;
// function expandPara() {
//     if (!isExpand) {
//         p.textContent = paragraph;
//         isExpand = true;
//     } else {
//         p.textContent = paragraph.slice(0, 50) + "...";
//         isExpand = false;

//     }
// }


// QUESTION 03
function createStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const courseName = document.getElementById("course").value;
    const tbody = document.querySelector("tbody");
    tbody.innerHTML += `
    <tr>
    <td>${name}</td>
    <td>${courseName}</td>
    <td>${age}</td>
    <td>${email}</td>
    <td><button onclick="delStudent()">Delete</button></td>
    </tr>
    `;
}

function delStudent() {
    const tr = event.target.closest("tr");
    tr.remove();
}

function formSubmitHandler() {
    event.preventDefault();
    console.log("log");
    const table = document.getElementById("table");
    table.style.display = "table";
    createStudent();
    event.target.reset();
}