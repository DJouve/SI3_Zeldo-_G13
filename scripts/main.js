let container = document.querySelector(".container")
let player = document.querySelector(".player")
let plateau = document.querySelector(".plateau")
let playerLeft = 0
let playerTop = 0
let step = 0.8
let spriteNumber = 0
let spriteGrad = 0


function morphStill(){
    

}

morphStill()

function morph() {
    player.style.backgroundImage = "url('images/facew"+spriteNumber+".png')"
    spriteNumber++
    spriteNumber = spriteNumber % 8

}
function morphup(){
    player.style.backgroundImage = "url('images/backw"+spriteNumber+".png')"
    spriteNumber++
    spriteNumber =  spriteNumber % 8
}
function morphright(){
    player.style.backgroundImage = "url('images/rightw"+spriteGrad+".png')"
    spriteGrad++
    spriteGrad =  spriteGrad % 6
}
function morphleft(){
    player.style.backgroundImage = "url('images/leftw"+spriteGrad+".png')"
    spriteGrad++
    spriteGrad =  spriteGrad % 6
}
document.onkeydown = animate
function animate(e){
    if(e.keyCode == 39){
        if(playerLeft + step < 47){
            playerLeft += step
            player.style.left = playerLeft + 'vw'
            morphright()
        }
    }

    if(e.keyCode == 37){
        if(playerLeft - step >= 0) {
            playerLeft -= step
            player.style.left = playerLeft + 'vw'
            morphleft()
        }
    }

    if(e.keyCode == 38){
        if ( (Math.round((playerTop - step) * 10) / 10) >= 0) {
            playerTop = Math.round((playerTop - step) * 10) / 10
            player.style.top = playerTop + 'vw'
            morphup()
        }
    }

    if(e.keyCode == 40){
        if( (Math.round((playerTop + step) * 10) / 10) < 33){
            playerTop = Math.round((playerTop + step) * 10) / 10
            player.style.top = playerTop + 'vw'
            morph()
        }
    }
}
