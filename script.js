const display = document.getElementById("display");

function press(value) {

  // CLEAR
  if (value === "CE") {
    display.innerText = "";
    return;
  }

  // BACKSPACE
  if (value === "⌫") {
    display.innerText = display.innerText.slice(0, -1);
    return;
  }

  // PLUS / MINUS
  if (value === "+/-") {
    if (display.innerText.startsWith("-")) {
      display.innerText = display.innerText.slice(1);
    } else if (display.innerText !== "") {
      display.innerText = "-" + display.innerText;
    }
    return;
  }

  // EQUALS
  if (value === "=") {
    try {
      let expression = display.innerText
        .replace(/x/g, "*")
        .replace(/÷/g, "/");

      display.innerText = eval(expression);
    } catch {
      display.innerText = "Error";
    }
    return;
  }

  // NORMAL INPUT
  display.innerText += value;
}
