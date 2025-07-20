function case_choice() {
    let userInput = prompt("enter naame :");
    let caseType = prompt("enter lower or /upper or u");

    if (caseType === "lower" || caseType === "l") {
        console.log(userInput.toLowerCase());
    } else if (caseType === "upper" || caseType === "u") {
        console.log(userInput.toUpperCase());
    }
}

case_choice();
