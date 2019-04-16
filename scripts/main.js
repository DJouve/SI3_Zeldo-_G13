let container = document.querySelector("#container")
let perso = document.querySelector("#perso")

var persoLeft = 0
var persoTop = 0
let step = 32
document.onkeydown = animate
function animate(e){

    if(e.keyCode == 39){
        persoLeft += step
        perso.style.left = persoLeft + 'px'
    }

    if(e.keyCode == 37){
        persoLeft -= step
        perso.style.left = persoLeft + 'px'
    }

    if(e.keyCode == 38){
        persoTop -= step
        perso.style.top = persoTop + 'px'
    }

    if(e.keyCode == 40){
        persoTop += step
        perso.style.top = persoTop + 'px'
    }
}
