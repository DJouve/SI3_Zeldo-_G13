let container = document.querySelector(".plateau")
let player = document.querySelector(".player")
let plateau = document.querySelector(".plateau")

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

function spawn(){
    let spawn = Math.floor(math.random()*4)
    if (spawn = 0){
        
    }
}


class Monster {
    constructor(name, life, sprite, taillex, tailley, damages, x, y, range, step, position)
    {
        this.sprite = sprite
        this.taillex = taillex
        this.tailley = tailley
        this.name = name
        this.life = life
        this.damages = damages
        this.x = x
        this.y = y
        this.range = range
        this.step = step
        this.position = position
        this.death = false
    }
    draw ()
        {
            this.div = document.createElement('div')
            this.div.classList.add('.monster')

            plateau.appendChild(this.div)


        }
}
/*const player = new Monster("player", 100, 2, 10, 10, 10, 400, 400, 5, 5, 1)*/

let soldier = new Monster("soldier", 50, 2, 5, 5, 6, 200, 300, 1, 1 )
let archer = new Monster("archer", 25, 10, 5, 5, 5, 550, 400, 20, 5, 1)

window.setInterval(archer.draw,5000)