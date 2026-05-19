let display = document.getElementById("display");
let keys = document.getElementById("keys");

keys.addEventListener("click", (event) => {
  const button = event.target;

  const value = button.dataset.value;
  const action = button.dataset.action;

  if (value) {
    appendToDisplay(value);
  } else if (action == "calculate") {
    calculate();
  } else if (action == "clearMemory") {
    clearMemory();
  } else if (action == "delete") {
    Delete();
  }
});

let operation = [];
let currentInput = "";
let operator = /[+\-*/]/;

function appendToDisplay(arg) {
  let lastChar = currentInput.slice(-1);
  if (operator.test(lastChar) && isNaN(arg)) {
    //do nothing
    display.value = currentInput;
  } else {
    //add number
    currentInput += arg;
    display.value = currentInput;
  }
  //So basically now user can't put + after +
}

// clear
function clearMemory() {
  display.value = "";
  value = null;
  currentInput = "";
}

function calculate() {
  let number = [];
  let operator = [];
  let count = 0;

  // determine if it operator or number and create a seperate number array and operator array

  for (let i = 0; i < currentInput.length; i++) {
    if (isNaN(currentInput[i]) && currentInput[i] != ".") {
      count++;
      operator += currentInput[i];
    } else {
      if (number[count]) {
        number[count] += String(currentInput[i]);
      } else if (number.length <= i) {
        number.push("");
        number[count] += String(currentInput[i]);
      }
    }
  }
  let value;
  let currentValue = "";

  console.log(number);
  console.log(operator);

  // calculate the whole thing

  for (let i = 0; operator.length > i; i++) {
    if (operator[i] == "+") {
      if (currentValue == "") {
        console.log(currentValue);
        console.log(number[i]);
        console.log(parseFloat(number[i + 1]));

        value = parseFloat(number[i]) + parseFloat(number[i + 1]);

        console.log(value);

        currentValue = value;
      } else {
        value = currentValue + parseFloat(number[i + 1]);
      }
    } else if (operator[i] == "-") {
      if (currentValue == "") {
        value = parseFloat(number[i]) - parseFloat(number[i + 1]);
        currentValue = value;
      } else {
        value = currentValue - parseFloat(number[i + 1]);
      }
    } else if (operator[i] == "*") {
      if (currentValue == "") {
        value = parseFloat(number[i]) * parseFloat(number[i + 1]);
        currentValue = value;
      } else {
        value = currentValue * parseFloat(number[i + 1]);
      }
    } else if (operator[i] == "/") {
      if (currentValue == "") {
        value = parseFloat(number[i]) / parseFloat(number[i + 1]);
        currentValue = value;
      } else {
        value = currentValue / parseFloat(number[i + 1]);
      }
    }
  }

  currentInput = String(value);
  display.value = currentInput;
}

//delete the last char
function Delete() {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
}
