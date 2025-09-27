const p = document.getElementById("p-main");
const button = document.getElementById("button-main");

button.addEventListener("click", () => {
    const d = new Date();

    p.textContent = ` ${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}, ${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
});
