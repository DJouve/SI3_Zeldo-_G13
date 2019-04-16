let container = document.querySelector(".container")
let player = document.querySelector(".player")
let plateau = document.querySelector(".plateau")
let playerLeft = 0
let playerTop = 0
let step = 2.4

document.onkeydown = animate
function animate(e){
    // switch(e.keyCode){
    //     case 38 :
    //         playerTop -= step
    //         player.style.top = playerTop + 'px'
    //     case 40 :
    //         playerTop += step
    //         player.style.top = playerTop + 'px'
    //     case 37 :
    //         playerLeft -= step
    //         player.style.left = playerLeft + 'px'
    //     case 39 :
    //         playerLeft += step
    //         player.style.left = playerLeft + 'px'
    // }
    if(e.keyCode == 39){
        if(playerLeft + step < 48){
            playerLeft += step
            player.style.left = playerLeft + 'vw'
        }
    }

    if(e.keyCode == 37){
        if(playerLeft >= 0) {
            playerLeft -= step
            player.style.left = playerLeft + 'vw'
        }
    }

    if(e.keyCode == 38){
        if (playerTop >= 0) {
            playerTop -= step
            player.style.top = playerTop + 'vw'
        }
    }

    if(e.keyCode == 40){
        if(playerTop + step < 35){
            playerTop += step
            player.style.top = playerTop + 'vw'
        }
    }
}
