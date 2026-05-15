let display = document.getElementById("display");
let displayPrev = document.getElementById("displayPrev");

let currentInput = "";
let operator = ["+", "-", "*", "/"];
let Eval;

function appendToDisplay(arg) {
  if (arg == "+" || arg == "-" || arg == "/" || arg == "*") {
    currentInput += arg;
    displayPrev.value = currentInput;
    display.value = "";
  } else {
    currentInput += arg;
    display.value = currentInput;
  }
}

function clearMemory() {
  currentInput = "";
  arg = "";
  Eval = "";
  display.value = currentInput;
  displayPrev.value = currentInput;
}

function calculate() {
  try {
    Eval = eval(currentInput);
    displayPrev.value = currentInput + " =";
    display.value = String(Eval);
    currentInput = String(eval(currentInput));
  } catch (error) {
    display.value = "Error";
  }
}

function Delete() {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
  displayPrev.value = "";
}
