//the functions for the four basic math operations
//add

function add (num1, num2) {
    return +num1 + +num2;
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

//pow

function pow (num1, num2) {
    return num1 ** num2;
}

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
        case "xy":
            return pow(operand1, operand2);
            break;
        case "y":
            return pow(operand1, operand2);
            break;
    }
};

//basic global variables
let operand1; 
let operand2;
let operator;
let display = document.querySelector('#display')
let displayText = document.createElement('div');
displayText.textContent = '0';
display.appendChild(displayText);
displayText.setAttribute('class', 'subDisplay');
let upperDisplay = document.createElement('div');
display.appendChild(upperDisplay);
upperDisplay.setAttribute('class', 'subDisplay');

//Number Buttons
//function to populate the display with the selected numbers

let buttonsDigits = document.querySelectorAll('.num');
buttonsDigits.forEach((button) => {
    button.addEventListener('click', function(e) {
        
        if (displayText.textContent === '0') {
            displayText.textContent = e.target.textContent;
        } else {
            displayText.textContent += e.target.textContent;
        }
});
}
);

//Operator buttons
//function to store the display number in a variable and generate the operator variable
//when the corrisponding button is clicked

let buttonsOperator = document.querySelectorAll('.operator');
buttonsOperator.forEach((button) => {
    button.addEventListener('click', function(e) {
        operand1 = displayText.textContent; 
        operator = e.target.textContent;
        upperDisplay.textContent = `${operand1} ${operator}`;
        displayText.textContent = '';
});
}
);

//Equals button
//function to store the display number in another variable and run the operate function
//when equal is clicked upon

let equalOperator = document.querySelector('#equals');
equalOperator.addEventListener('click', function() {
    operand2 = displayText.textContent;
    upperDisplay.textContent = `${operand1} ${operator} ${operand2}`;
    displayText.textContent = operate(operand1, operator, operand2);
    operand1 = '';
    operand2 = '';
    operator = '';
});

//AC button
//funtion to reset the calculator and all of its values

let acButton = document.querySelector('#ac');
acButton.addEventListener('click', function() {
    operand1 = '';
    operand2 = '';
    operator = '';
    displayText.textContent = 0;
    upperDisplay.textContent = '';
});

//C button
//function to remove last added character to the number on the display or void the 
//selected operator

let cButton = document.querySelector('#c');
cButton.addEventListener('click', function () {
    displayText.textContent = displayText.textContent.slice(0, displayText.textContent.length-1);
});