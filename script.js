let result = document.querySelector(".calculation-display");

let numberButtonContainer = document.querySelector(".number-button-container");
let operatorContainer = document.querySelector(".operator-container");

let inputtedNumber = [];
let inputtedOperator = [];

let isOperatorPressed = false;
let isNumberButtonPressed = false;
let operator = "";

numberButtonContainer.addEventListener("click", event => {
    if(event.target.matches("button")) {

        if (isNumberButtonPressed === false && operator !== "") {
            inputtedOperator.push(operator);
        } 
        isNumberButtonPressed = true;

        console.log(event.target.getAttribute("value"));
        if(event.target.getAttribute("value") === ".") {
            if ( result.innerText.includes(".")) {
                console.log("we cannot add more period");
            } else {
                result.innerText = result.innerText
                .concat(event.target.getAttribute("value"));
            }
        } else {
            result.innerText = result.innerText
            .concat(event.target.getAttribute("value"));
        }
        isOperatorPressed = false;
    }
});


operatorContainer.addEventListener("click", event => {
    // TODO HERE
    if (isOperatorPressed === false) inputtedNumber.push(Number(result.innerText));

    result.innerText = "";

    if(event.target.matches("button")) {
        isOperatorPressed = true;
        console.log(event.target.getAttribute("value"));
        if(event.target.getAttribute("value") === "*") {
            operator = "*";
        } else if (event.target.getAttribute("value") === "/") {
            operator = "/";
        } else if (event.target.getAttribute("value") === "+") {
            operator = "+";
        } else if (event.target.getAttribute("value") === "-") {
            operator = "-";
        }
    }
    console.log(inputtedNumber);
    console.log(inputtedOperator);
    isNumberButtonPressed = false;
});


function addition(firstNumber, secondNumber) {
    if(typeof firstNumber === Number && typeof secondNumber === number) {
        return firstNumber + secondNumber;
    } else {
        return "NaN";
    }
}

function substraction(firstNumber, secondNumber) {
    if(typeof firstNumber == number && typeof secondNumber == number) {
        return firstNumber - secondNumber;
    } else {
        return "NaN";
    }
}

function multiplication(firstNumber, secondNumber) {
    if(typeof firstNumber == "number" && typeof secondNumber == "number") {
        return firstNumber * secondNumber;
    } else {
        return "NaN";
    }
}

function division(firstNumber, secondNumber) {
    if(typeof firstNumber == number && typeof secondNumber == number) {
        return firstNumber / secondNumber;
    } else {
        return "NaN";
    }
}

function calculate() {
    
}