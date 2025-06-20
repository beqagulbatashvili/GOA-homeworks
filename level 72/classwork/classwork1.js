let button = document.getElementById("myButton");

button.addEventListener("click", function(e) {
    console.log(e); 
    e.target.style.backgroundColor = "black";
});
