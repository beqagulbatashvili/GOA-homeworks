let count = localStorage.getItem("visitCount");

if (count) {
    count = Number(count) + 1;
} else {
    count = 1;
}

localStorage.setItem("visitCount", count);

document.getElementById("visitCount").textContent = `You have visited this page ${count} times.`;
