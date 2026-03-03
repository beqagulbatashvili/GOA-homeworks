let myObj = {
    name: "David",
    surname: "Tezelashvili",
    academy: "GOA",
    isMentor: true,
    num: 100,
    hobbies: ["programming", "bike", "basketball"],
    favColor: "Blue"
};

const list = document.getElementById('myList');

for (let key in myObj) {
    const keyItem = document.createElement('li');
    keyItem.textContent = "გასაღები: " + key;

    const valueItem = document.createElement('li');
    
    if (typeof myObj[key] === 'object' && myObj[key] !== null && 'length' in myObj[key]) {
        let text = "";
        for (let i = 0; i < myObj[key].length; i++) {
            text += myObj[key][i];
            if (i < myObj[key].length - 1) {
                text += ", ";
            }
        }
        valueItem.textContent = "მნიშვნელობა: " + text;
    } else {
        valueItem.textContent = "მნიშვნელობა: " + myObj[key];
    }

    list.appendChild(keyItem);
    list.appendChild(valueItem);
}