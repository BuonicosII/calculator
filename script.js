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
        case "*":
            return multiply(operand1,operand2);
            break;
        case "/":
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
let operator = '';
let resultChecker = 0;
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
        
        if (resultChecker === 1 && displayText.textContent !== '') {

            resultChecker = 0;
            upperDisplay.textContent = '';
            displayText.textContent = e.target.textContent;

        } else if (displayText.textContent === '0' && e.target.textContent === '.' 
        || displayText.textContent === '' && e.target.textContent === '.') {

            displayText.textContent = '0' + e.target.textContent;
    
        } else if (displayText.textContent === '0') {

            displayText.textContent = e.target.textContent;
            
        } else if (e.target.textContent === '.' && displayText.textContent.includes(".")) {
            
            displayText.textContent = displayText.textContent;
            
        } else {

            displayText.textContent += e.target.textContent;

        }
});
}
);

//Number keys
//function to populate the display with the selected numbers keys
document.addEventListener('keydown', function(e) {
    if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' ||
        e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9' || e.key === '0' || e.key === '.') {
            if (resultChecker === 1 && displayText.textContent !== '') {

                resultChecker = 0;
                upperDisplay.textContent = '';
                displayText.textContent = e.key;
    
            } else if (displayText.textContent === '0' && e.key === '.' 
            || displayText.textContent === '' && e.key === '.') {
    
                displayText.textContent = '0' + e.key;
        
            } else if (displayText.textContent === '0') {
    
                displayText.textContent = e.key;
                
            } else if (e.key === '.' && displayText.textContent.includes(".")) {
                
                displayText.textContent = displayText.textContent;
                
            } else {
    
                displayText.textContent += e.key;
    
            }
    }
});


//Operator buttons
//function to store the display number in a variable and generate the operator variable
//when the corrisponding button is clicked

let buttonsOperator = document.querySelectorAll('.operator');
buttonsOperator.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (displayText.textContent === '' && operator !== '') {
            operator = e.target.textContent;
            upperDisplay.textContent = `${operand1} ${operator}`;
            displayText.textContent = '';
        } else if (displayText.textContent !== '' && operator !== '') {
            operand2 = displayText.textContent;
            upperDisplay.textContent = `${operate(operand1, operator, operand2)}`;
            operand1 = operate(operand1, operator, operand2);
            operator = e.target.textContent;
            upperDisplay.textContent += ` ${operator}`;
            displayText.textContent = '';
            operand2 = '';
            resultChecker = 2;
        } else {
        operand1 = displayText.textContent; 
        operator = e.target.textContent;
        upperDisplay.textContent = `${operand1} ${operator}`;
        displayText.textContent = '';
    }
});
}
);

//Operator key
//function to store the display number in a variable and generate the operator variable
//when the corrisponding key is pressed
document.addEventListener('keydown', function(e) {
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
    if (displayText.textContent === '' && operator !== '') {
        operator = e.key;
        upperDisplay.textContent = `${operand1} ${operator}`;
        displayText.textContent = '';
    } else if (displayText.textContent !== '' && operator !== '') {
        operand2 = displayText.textContent;
        upperDisplay.textContent = `${operate(operand1, operator, operand2)}`;
        operand1 = operate(operand1, operator, operand2);
        operator = e.key;
        upperDisplay.textContent += ` ${operator}`;
        displayText.textContent = '';
        operand2 = '';;
    } else {
    operand1 = displayText.textContent; 
    operator = e.key;
    upperDisplay.textContent = `${operand1} ${operator}`;
    displayText.textContent = '';
    }
}
});

//Equals button
//function to store the display number in another variable and run the operate function
//when equal is clicked upon

let equalOperator = document.querySelector('#equals');
equalOperator.addEventListener('click', function() {
    if (displayText.textContent === '0' && operator === '/' || displayText.textContent === '' && operator === '/') {
        alert('Nice try, don\'t break my calculator, thx ;-)');
        displayText.textContent = '';
    } else if (operator === '') {
        alert('Please select a valid operator first!');
    } else {
    operand2 = displayText.textContent;
    upperDisplay.textContent = `${operand1} ${operator} ${operand2}`;
    displayText.textContent = `${operate(operand1, operator, operand2)}`;
    operand1 = '';
    operand2 = '';
    operator = '';
    resultChecker = 1;
}
});

//Equals key function
//function to store the display number in another variable and run the operate function
//when equal key is pressed on the keyboard 
document.addEventListener('keydown', function(e) {
    if (e.key === '=' || e.key === 'Enter') {
        if (displayText.textContent === '0' && operator === '/' || displayText.textContent === '' && operator === '/') {
            alert('Nice try, don\'t break my calculator, thx ;-)');
            displayText.textContent = '';
        } else if (operator === '') {
            alert('Please select a valid operator first!');
        } else {
        operand2 = displayText.textContent;
        upperDisplay.textContent = `${operand1} ${operator} ${operand2}`;
        displayText.textContent = `${operate(operand1, operator, operand2)}`;
        operand1 = '';
        operand2 = '';
        operator = '';
        resultChecker = 1;
        }
    }
});

//AC button
//funtion to reset the calculator and all of its values on click

let acButton = document.querySelector('#ac');
acButton.addEventListener('click', function() {
    operand1 = '';
    operand2 = '';
    operator = '';
    resultChecker = 0;
    displayText.textContent = '0';
    upperDisplay.textContent = '';
});

//AC key
//function to reset the calculator and all of its values when the Del Key is pressed
document.addEventListener('keydown', function(e) {
    if (e.key === 'Delete') {
    operand1 = '';
    operand2 = '';
    operator = '';
    resultChecker = 0;
    displayText.textContent = '0';
    upperDisplay.textContent = '';
    }
});

//C button
//function to remove last added character to the number on the display or void the 
//selected operator

let cButton = document.querySelector('#c');
cButton.addEventListener('click', function () {
    if (displayText.textContent === '' && resultChecker !== 2) {
        operator = '';
        displayText.textContent = operand1;
        upperDisplay.textContent = ''; 
    } else if (resultChecker === 1) {
        displayText.textContent = '0';
        upperDisplay.textContent = '';
        resultChecker = 0;
    } else if (resultChecker === 2) {
        displayText.textContent = operand1;
        upperDisplay.textContent = '';
        operator = '';
        operand1 = '';
        resultChecker = 1;
    } else if (resultChecker === 0 && displayText.textContent === '0'
                || resultChecker === 0 && displayText.textContent.length === 1 && operator === '') {
        displayText.textContent = '0';
    } else {
    displayText.textContent = displayText.textContent.slice(0, displayText.textContent.length-1);
    }
});

//C key
//function to remove last added character to the number on the display or void the 
//selected operator when backspace is pressed

document.addEventListener('keydown', function(e) {
    if (e.key === 'Backspace') {
        if (displayText.textContent === '' && resultChecker !== 2) {
            operator = '';
            displayText.textContent = operand1;
            upperDisplay.textContent = ''; 
        } else if (resultChecker === 1) {
            displayText.textContent = '0';
            upperDisplay.textContent = '';
            resultChecker = 0;
        } else if (resultChecker === 2) {
            displayText.textContent = operand1;
            upperDisplay.textContent = '';
            operator = '';
            operand1 = '';
            resultChecker = 1;
        } else if (resultChecker === 0 && displayText.textContent === '0'
                    || resultChecker === 0 && displayText.textContent.length === 1 && operator === '') {
            displayText.textContent = '0';
        } else {
        displayText.textContent = displayText.textContent.slice(0, displayText.textContent.length-1);
        }
    }
});