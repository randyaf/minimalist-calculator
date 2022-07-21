let result = document.querySelector(".calculation-display");

let numberButtonContainer = document.querySelector(".number-button-container");

numberButtonContainer.addEventListener("click", event => {
    if(event.target.matches("button")) {
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
    }
})