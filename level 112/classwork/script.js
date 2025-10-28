let savedWord = localStorage.getItem("word");

if (!savedWord) {
    const userWord = prompt("შეიყვანეთ ნებისმიერი სიტყვა:");
    localStorage.setItem("word", userWord);

    document.getElementById("word").textContent = userWord;
} else {
    document.getElementById("word").textContent = savedWord;
}
