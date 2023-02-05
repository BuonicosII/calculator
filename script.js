//the functions for the four basic math operations
//add

function add (num1, num2) {
    return num1 + num2;
};

//subtract 

function subtract (num1, num2) {
    return num1 - num2;
};

//multiply

function multiply (num1, num2) {
    return num1 * num2;
};

//divide 

function divide (num1, num2) {
    return num1 / num2;
};

//function operate which calls one math function on two operands

function operate(operand1, operator, operand2) {
    switch(operator) {
        case "+":
            return add(operand1, operand2);
            break;
        case "-":
            return subtract(operand1,operand2);
            break;
        case "x":
            return multiply(operand1,operand2);
            break;
        case ":":
            return divide(operand1,operand2);
            break;
    }
};

//basic global variables
let display = document.querySelector('#display')
let displayText = document.createElement('div');
displayText.textContent = '0';
display.appendChild(displayText);

//Number Buttons
//function to populate the display with the selected numbers

let buttonsDigits = document.querySelectorAll('.num');
buttonsDigits.forEach((button) => {
    button.addEventListener('click', function(e) {
        
        if (display.textContent === '0') {
            displayText.textContent = e.target.textContent;
            display.removeChild(displayText);
            display.appendChild(displayText);
        } else {
            displayText.textContent += e.target.textContent;
            display.removeChild(displayText);
            display.appendChild(displayText);
        }
});
}
);

