const formElements = ["name", "email", "message"];

formElements.forEach(id => {
    const input = document.getElementById(id);
    const savedValue = localStorage.getItem(id);

    if (savedValue) input.value = savedValue;

    input.addEventListener("input", () => {
        localStorage.setItem(id, input.value);
    });
});
