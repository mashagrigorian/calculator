let firstNumber = parseInt(10 * Math.random());
let secondNumber = parseInt(10 * Math.random());
let total = firstNumber + secondNumber;

let primary = document.getElementById("primary-number");
primary.innerHTML = `<p>${firstNumber}</p>`;

let secondary = document.getElementById("secondary-number");
secondary.innerHTML = `<p>${secondNumber}</p>`;

let button = document.getElementById("button");
button.addEventListener("click", function() {
    let value = document.getElementById("guess").value;
    (value = Number(value)) === total 
    ? (alert("Correct"), window.location.reload()) 
    : (alert("Sorry. Incorrect. The correct answer was " + total + "."),
    window.location.reload());
});