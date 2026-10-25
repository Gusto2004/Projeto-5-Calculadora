const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const operation = document.querySelector("#operation");
const calculateButton = document.querySelector("#calculate");
const result = document.querySelector("#result");
const historyList = document.querySelector("#history");

const symbols = {
  add: "+",
  subtract: "−",
  multiply: "×",
  divide: "÷",
};

let calculations = JSON.parse(localStorage.getItem("history")) || [];

function calculate() {
  const num1 = parseFloat(number1.value);
  const num2 = parseFloat(number2.value);
  const op = operation.value;

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Enter two valid numbers.";
    return;
  }

  let value;

  switch (op) {
    case "add":
      value = num1 + num2;
      break;
    case "subtract":
      value = num1 - num2;
      break;
    case "multiply":
      value = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        result.textContent = "Cannot divide by zero.";
        return;
      }
      value = num1 / num2;
      break;
    default:
      result.textContent = "Invalid operation.";
      return;
  }

  const finalValue = Number(value.toFixed(4));
  result.textContent = `Result: ${finalValue}`;

  // Save to the history (at the start of the array)
  const entry = `${num1} ${symbols[op]} ${num2} = ${finalValue}`;
  calculations.unshift(entry);
  calculations = calculations.slice(0, 5); // keep only the last 5
  localStorage.setItem("history", JSON.stringify(calculations));
  showHistory();
}

function showHistory() {
  historyList.innerHTML = "";
  calculations.forEach(function (line) {
    const li = document.createElement("li");
    li.textContent = line;
    historyList.appendChild(li);
  });
}

calculateButton.addEventListener("click", calculate);

// Calculate when Enter is pressed in either field
[number1, number2].forEach(function (field) {
  field.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      calculate();
    }
  });
});

showHistory();

// ===== THEME (remembered between visits) =====
const themeButton = document.querySelector("#theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.remove("dark");
  themeButton.textContent = "🌙";
} else {
  body.classList.add("dark");
  themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeButton.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeButton.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
