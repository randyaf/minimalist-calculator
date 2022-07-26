let result = document.querySelector(".calculation-display");

let numberButtonContainer = document.querySelector(".number-button-container");
let operatorContainer = document.querySelector(".operator-container");
let clearButton = document.querySelector(".clear-button");

let inputtedNumber = [];
let inputtedOperator = [];
let tempLogCalculationResult = "";

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
            console.log("before calculation start\n" + 
            " here is the stats:\n");
            console.log(inputtedNumber);
            console.log(inputtedOperator);
            const tempInputtedNumber = [].concat(inputtedNumber);
            const tempInputtedOperator = [].concat(inputtedOperator);
            calculate();
            logToHistory(tempInputtedNumber, tempInputtedOperator);
        }


    }
    console.log(inputtedNumber);
    console.log(inputtedOperator);
    isNumberButtonPressed = false;
});


clearButton.addEventListener("click", function() {
    result.innerText = "";
    inputtedNumber = [];
    inputtedOperator = [];
    isNumberButtonPressed = false;
    isOperatorPressed = false;
    operator = "";
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
    // find for the entire array element of inputtedOperator to check if it has multiplication or division
    for(let i = 0; i < inputtedNumber.length; i++) {
        if(inputtedOperator[i] === "*") {
            console.log(multiplication(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedNumber.splice(i, 2, multiplication(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedOperator.splice(i, 1);
            console.log("multiplication executed");
        } else if(inputtedOperator[i] === "/") {
            console.log(division(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedNumber.splice(i, 2, division(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedOperator.splice(i, 1);
            console.log("division executed");
        } 
    }

    for(let i = 0; i < inputtedNumber.length; i++) {
    // find for the entire array element of inputtedOperator to check if it has addition or subtraction
        if (inputtedOperator[i] === "+") {
            console.log(addition(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedNumber.splice(i, 2, addition(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedOperator.splice(i, 1);
            console.log("addition executed");
        } else if (inputtedOperator[i] === "-") {
            console.log(subtraction(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedNumber.splice(i, 2, subtraction(inputtedNumber[i], inputtedNumber[i + 1]));
            inputtedOperator.splice(i, 1);
            console.log("subtraction executed");
        }
    }

    if  (inputtedOperator.length !== 0) calculate();
    else {
        result.innerText = inputtedNumber[0];
        tempLogCalculationResult = result.innerText.toString();
        console.log("here is tempt var need: " + result.innerText);
    }
}
function logToHistory(arrInputtedNumbers, arrInputtedOperators) {
    // let loggedFormula = [];
    let loggedFormulaStr = "";
    for(let i = 0; i < arrInputtedNumbers.length; i++) {
        // possible solution with array
        // loggedFormula.push(arrInputtedNumbers[i]);
        // if(i < arrInputtedOperators.length) loggedFormula.push(arrInputtedOperators[i]);

        loggedFormulaStr = loggedFormulaStr.concat( " " + arrInputtedNumbers[i]);
        if(i < arrInputtedOperators.length) loggedFormulaStr = loggedFormulaStr.concat(" " + arrInputtedOperators[i]);
        console.log(loggedFormulaStr);
    }

    // adding calculation result to loggedFormulaStr to be displayed as calculation history
    loggedFormulaStr = loggedFormulaStr.concat(" = " + tempLogCalculationResult);

    const resultBottomDisplay = document.querySelector(".result-bottom-display");
    const newChildElement = document.createElement("div");
    newChildElement.innerText = loggedFormulaStr;
    resultBottomDisplay.insertBefore(newChildElement, resultBottomDisplay.firstChild);
}