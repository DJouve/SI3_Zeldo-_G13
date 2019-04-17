let container = document.querySelector(".container")
let player = document.querySelector(".player")
let plateau = document.querySelector(".plateau")
let playerLeft = 22.4
let playerTop = 32
let step = 0.8
let spriteNumber = 0
let spriteGrad = 0
let fightSprite = 0
let faceSide = false
let backSide = true
let leftSide = false
let rightSide = false
let isAttackingTop = false
let isAttackingRight = false
let isAttackingDown = false
let isAttackingLeft = false
let stunned = false


function morphStill(){
    player.style.height += 1
    player.style.height -= 1

}
setTimeout(function() {
    morphStill(); }, 500)

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
            player.style.height = 3.8 + "vw"
            rightSide = true
            leftSide = false
            faceSide = false
            backSide = false
        }
    }

    if(e.keyCode == 37){
        if(playerLeft - step >= 0) {
            playerLeft -= step
            player.style.left = playerLeft + 'vw'
            morphleft()
            player.style.height = 3.8 + "vw"
            rightSide = false
            leftSide = true
            faceSide = false
            backSide = false
        }
    }

    if(e.keyCode == 38){
        if ( (Math.round((playerTop - step) * 10) / 10) >= 0) {
            playerTop = Math.round((playerTop - step) * 10) / 10
            player.style.top = playerTop + 'vw'
            morphup()
            player.style.height = 3.8 + "vw"
            rightSide = false
            leftSide = false
            faceSide = false
            backSide = true
        }
    }

    if(e.keyCode == 40){
        if( (Math.round((playerTop + step) * 10) / 10) < 33){
            playerTop = Math.round((playerTop + step) * 10) / 10
            player.style.top = playerTop + 'vw'
            morph()
            player.style.height = 3.8 + "vw"
            rightSide = false
            leftSide = false
            faceSide = true
            backSide = false
        }
    }
    if(e.keyCode == 69){
        /*player.style.backgroundImage = "url('images/pride.png')"
        player.style.height = 12 + "vw"*/
        player.style.backgroundImage = "url('images/stunned.png')"

    }
    if((e.keyCode == 32) && (faceSide == true)){
        player.style.height = 3.8 + "vw"
        for (let fightSprite = 0; fightSprite < 6; fightSprite++) {
            setTimeout(function() {
                isAttackingDown = true
                player.style.backgroundImage = "url('images/facefight"+fightSprite+".png')"
                player.style.height = player.style.height + fightSprite + "vw"
            }, 100 *  fightSprite)
            setTimeout(function() {
                player.style.backgroundImage = "url('images/face2.png')"
            },700)
            isAttackingDown = false
        }
    }

    if((e.keyCode == 32) && (rightSide == true)){
        player.style.height = 3.8 + "vw"
        for (let fightSprite = 0; fightSprite < 5; fightSprite++) {
            setTimeout(function() {
                isAttackingRight = true
                player.style.backgroundImage = "url('images/rightfight"+fightSprite+".png')"
                player.style.height = player.style.height + fightSprite + "vw"
            }, 120 *  fightSprite)
            setTimeout(function() {
                player.style.backgroundImage = "url('images/rightw0.png')"
            },600)
            isAttackingRight = false
        }
    }

    if((e.keyCode == 32) && (backSide == true)){
        player.style.height = 3.8 + "vw"
        for (let fightSprite = 0; fightSprite < 5; fightSprite++) {
            setTimeout(function() {
                isAttackingTop = true
                player.style.backgroundImage = "url('images/backfight"+fightSprite+".png')"
                player.style.height = player.style.height + fightSprite + "vw"
            }, 120 *  fightSprite)
            setTimeout(function() {
                player.style.backgroundImage = "url('images/backw0.png')"
            },600)
            isAttackingTop = false
        }
    }
    if((e.keyCode == 32) && (leftSide == true)){
        player.style.height = 3.8 + "vw"
        for (let fightSprite = 0; fightSprite < 5; fightSprite++) {
            setTimeout(function() {
                isAttackingLeft = true
                player.style.backgroundImage = "url('images/leftfight"+fightSprite+".png')"
                player.style.height = player.style.height + fightSprite + "vw"
            }, 120 *  fightSprite)
            setTimeout(function() {
                player.style.backgroundImage = "url('images/leftw0.png')"
            },600)
            isAttackingLeft = false
        }
    }
    if(stunned == true){
        for (let fightSprite = 0; fightSprite < 5; fightSprite++) {
            setTimeout(function() {
                player.style.backgroundImage = "url('images/stunned.png')"
                player.style.height = player.style.height + fightSprite + "vw"
            }, 120 *  fightSprite)
    }
}
}



