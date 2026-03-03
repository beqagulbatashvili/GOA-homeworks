let divs = document.getElementsByClassName("divs")

    pos = 0

for(i = 0;i < divs.length;i++){
    divs[i].style.backgroundColor = "ლურჯი"
    divs[i].style.borderRadius = "10px"

    setInterval(function(){
    pos+=5
    divs[i].style.left = pos+"px"
    },150)
}