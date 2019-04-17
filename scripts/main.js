let container = document.querySelector(".container")
let player = document.querySelector(".player")
let plateau = document.querySelector(".plateau")
let playerLeft = 0
let playerTop = 0
let step = 2.4
let spriteNumber = 0

function morph() {
    player.style.backgroundImage = "url('images/facew"+spriteNumber+".png')"
    spriteNumber++
    spriteNumber = spriteNumber % 8
}

document.onkeydown = animate
function animate(e){
    if(e.keyCode == 39){
        if(playerLeft + step < 47){
            playerLeft += step
            player.style.left = playerLeft + 'vw'
        }
    }

    if(e.keyCode == 37){
        if(playerLeft - step >= 0) {
            playerLeft -= step
            player.style.left = playerLeft + 'vw'
        }
    }

    if(e.keyCode == 38){
        console.log(playerTop - step)
        if ( (Math.round((playerTop - step) * 10) / 10) >= 0) {
            playerTop = Math.round((playerTop - step) * 10) / 10
            player.style.top = playerTop + 'vw'
            morph()
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

// function spawn(){
//     let spawn = Math.floor(Math.random()*4)
//     if (spawn = 0){
        
//     }
// }


