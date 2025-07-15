let display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "0" && value !== ".") {
        display.value = "";
    }
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
    } catch (error) {
        display.value = "Error";
    }
}
