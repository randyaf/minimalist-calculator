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
        } else if (event.target.getAttribute("value") === "=") {
            calculate();
        }
    }
    console.log(inputtedNumber);
    console.log(inputtedOperator);
    isNumberButtonPressed = false;
});


function addition(firstNumber, secondNumber) {
    if(typeof firstNumber === "number" && typeof secondNumber === "number") {
        return firstNumber + secondNumber;
    } else {
        return "NaN";
    }
}

function subtraction(firstNumber, secondNumber) {
    if(typeof firstNumber == "number" && typeof secondNumber == "number") {
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
    if(typeof firstNumber == "number" && typeof secondNumber == "number") {
        return firstNumber / secondNumber;
    } else {
        return "NaN";
    }
}

function calculate() {
    for(let i = 0; i < inputtedNumber.length; i++) {
        if(inputtedOperator[i] === "*") {
            console.log(multiplication(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedNumber.splice(i, 2, multiplication(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedOperator.splice(i, 1);
        } else if (inputtedOperator[i] === "/") {
            console.log("the result is" + division(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedNumber.splice(i, 2, division(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedOperator.splice(i, 1);
        } else if (inputtedOperator[i] === "+") {
            console.log(addition(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedNumber.splice(i, 2, addition(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedOperator.splice(i, 1);
        } else if (inputtedOperator[i] === "-") {
            console.log(subtraction(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedNumber.splice(i, 2, subtraction(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedOperator.splice(i, 1);
        }
    }
    if  (inputtedOperator.length !== 0) calculate();
    else result.innerText = inputtedNumber[0];
}