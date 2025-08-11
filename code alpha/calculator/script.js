let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function del() {
  display.value = display.value.slice(0, -1);
}
document.addEventListener("keydown", function(event) {
  const key = event.key;
  if ("0123456789.+-*/".includes(key)) {
    append(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    del();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
