// CHAPTER # 49-52
// QUESTION 01
function formSubmit() {
    event.preventDefault();
    const infoBox = document.querySelector(".info>div");
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const pass = document.getElementById("pass").value;

    infoBox.innerHTML = `
    <p>Name: <strong>${name}</strong></p>
    <p>Age: <strong>${age}</strong></p>
    <p>email: <strong>${email}</strong></p>
    <p>date of birth: <strong>${dob}</strong></p>
    <p>Password: <strong>${pass}</strong></p>
    `;
    document.querySelector(".user-info").style.display = "block";
}
