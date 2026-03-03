function logicalFunc(bool1,bool2) {
    console.log(bool1 && bool2)
    console.log(bool1 || bool2)
}


logicalFunc(true, true);
logicalFunc(true, false);
logicalFunc(false, false);


function typeConvert(){
    let userinput = prompt("enter number: ")

    console.log(userinput)
    
    let numberValue = Number(userinput);

    console.log(numberValue);
    console.log(typeof numberValue);
}

typeConvert()




function forConditions() {
    let userNum = Number(prompt("Enter number:"));
    
    if (userNum < 18) {
        console.log("not adult");
    } else if (userNum < 65) {
        console.log("adult & not old");
    } else if (userNum <= 113) {
        console.log("retired");
    } else {
        console.log("lie");
    }
}
