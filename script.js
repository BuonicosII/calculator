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
}