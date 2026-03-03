document.addEventListener('DOMContentLoaded', function() {
    let imgs = document.getElementsByClassName("imgs");

    for(let i = 0; i < imgs.length; i++) {
        imgs[0].src = "./photos/scissors.jpeg"; 
    }
});