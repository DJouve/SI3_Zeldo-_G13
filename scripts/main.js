let container = document.querySelector(".plateau")
let player = document.querySelector(".player")

let playerLeft = 0
let playerTop = 0
let step = 10
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
        playerLeft += step
        player.style.left = playerLeft + 'px'
    }

    if(e.keyCode == 37){
        playerLeft -= step
        player.style.left = playerLeft + 'px'
    }

    if(e.keyCode == 38){
        playerTop -= step
        player.style.top = playerTop + 'px'
    }

    if(e.keyCode == 40){
        playerTop += step
        player.style.top = playerTop + 'px'
    }
}
