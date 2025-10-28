const form = document.getElementById("regForm");
const displayName = document.getElementById("displayName");
const displayFacebook = document.getElementById("displayFacebook");
const displayEmail = document.getElementById("displayEmail");
const displayPassword = document.getElementById("displayPassword");

function showData() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
        displayName.textContent = userData.name || "N/A";
        displayFacebook.textContent = userData.facebook || "N/A";
        displayEmail.textContent = userData.email || "N/A";
        displayPassword.textContent = userData.password || "N/A";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userData = {
        name: document.getElementById("name").value.trim(),
        facebook: document.getElementById("facebook").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value.trim(),
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    showData();
    form.reset();
});

window.addEventListener("load", showData);
