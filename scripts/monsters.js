let allMonsters = []
let spawnNumber = 4
let monsters = document.querySelector(".monsters")
let monstersStep = 0.8
let counter = 0


class Monster {
    constructor (plateau, monsterLife){
        this.div = document.createElement ("div")
        this.div.classList.add("monster")
        plateau.appendChild(this.div)
        let monsterLeft = Math.floor(Math.random()*46)
        let monsterTop = Math.floor(Math.random()*20)
        this.div.style.left = monsterLeft + "vw"
        this.div.style.top = monsterTop + "vw"
        this.monsterLife = monsterLife
    }

    death(plateau){
        plateau.removeChild(this.div)
    }

    moveRight(){
        this.div.style.left = (parseFloat(this.div.style.left) + monstersStep) + "vw"
    }

    moveLeft(){
        this.div.style.left = (parseFloat(this.div.style.left) - monstersStep) + "vw"
    }

    moveUp(){
        this.div.style.top = (parseFloat(this.div.style.top) - monstersStep) + "vw"
    }

    moveDown(){
        this.div.style.top = (parseFloat(this.div.style.top) + monstersStep) + "vw"
    }
}

setInterval(function(){
    for (let i = 0; i < allMonsters.length; i++) {
        // Gestion déplacement des monstres
        let rapportLeft = parseInt(allMonsters[i].div.style.left) - playerLeft
        let rapportTop = parseInt(allMonsters[i].div.style.top) - playerTop
        //console.log(rapportTop)
        //console.log(rapportLeft)
        // Tu check position relative du monstre par rapport au perso
        if (rapportTop > 0) {
            allMonsters[i].moveUp()
        }
        if (rapportTop < 0) {
            allMonsters[i].moveDown()
        }
        if (rapportLeft > 0) {
            allMonsters[i].moveLeft()
        }
        if (rapportLeft  < 0) {
            allMonsters[i].moveRight()
            }
        }
},1000)


function spawn(){
    for (let i = 0; i < spawnNumber; i++) {
        let newMonster = new Monster(document.querySelector('.plateau'), 6)
        allMonsters.push(newMonster)
        console.log("oui")
    }
}

function damage(){
    for (let i = 0; i < allMonsters.length; i++) {
        if ((isAttackingTop == true) && (allMonsters[i].style.top - player.style.top < 3)){
            allMonsters[i].life -= 1
            if (allMonsters[i].life <= 0){
                allMonsters.splice(i,1)
                death()
            }
        }
    }
}




function resetLonk(){
    playerLeft = 22.4
    playerTop = 32
    player.style.left = playerLeft + "vw"
    player.style.top = playerTop + "vw"
}
function init(e){
    button.blur()
    game1 ()
    resetLonk()
}

let button = document.querySelector("button")
button.addEventListener(
    'click',
    init
)

function game1 (){ // Fonction pour lancer le premier niveau -> pop des monstres
    spawnNumber = 4
    // for (i = 0; i<allMonsters.length; i++){
    spawn()
    damage()
    if (allMonsters.length < 1){
        resetLonk()
        game2()
    }
}
function game2 (){ // Fonction pour lancer le premier niveau -> pop des monstres
    spawnNumber = 6
    // for (i = 0; i<allMonsters.length; i++){
    spawn()
    damage()
    if (allMonsters.length < 1){
        resetLonk()
        game3()
    }
}
function game3(){// Fonction du niveau 3
    spawnNumber = 10
    // for (i = 0; i<allMonsters.length; i++){
    spawn()
    damage()
}
