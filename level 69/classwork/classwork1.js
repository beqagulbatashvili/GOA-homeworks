function correctUserPassword() {
    const correctPassword = "12345";
    let attempts = 1;

    let userInput = prompt("enter password:");

    while (userInput !== correctPassword) {
    userInput = prompt("incorect,try again:");
    attempts++;
    }
    alert("Correct guess! ცდების რაოდენობა: " + attempts);       
}

correctUserPassword()






