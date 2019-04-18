let allMonsters = []
let spawnNumber = 4
let monsters = document.querySelector(".monsters")
let monstersStep = 0.6
let counter = 0
let button = document.querySelector("button")
let spriteNumberBoss = 0
let playerLife = 6
let damage = 0.1
let audio = document.querySelector("audio")

function hide(){
    button.classList.add('hide')
}

function animateBoss(){
    allMonsters[0].div.style.backgroundImage = "url('../images/bossw"+spriteNumberBoss+".png')"
    spriteNumberBoss++
    spriteNumberBoss = spriteNumberBoss % 2
}

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

    get rapportLeft(){
        return parseInt(this.div.style.left) - playerLeft
    }
    get rapportTop(){
        return parseInt(this.div.style.top) - playerTop
    }
    monsterAttack(){

        playerLife -= damage
        if(playerLife <= 0){
            player.style.backgroundImage = "url('../images/stunned.png')"
        }

    }

}

class Boss extends Monster {

    get rapportLeft(){
        return parseInt(this.div.style.left) - playerLeft
    }
    get rapportTop(){
        return parseInt(this.div.style.top) - playerTop
    }

}


setInterval(function(){
    for (let i = 0; i < allMonsters.length; i++) {
        // Gestion déplacement des monstres
        let
         = parseInt(allMonsters[i].div.style.left) - playerLeft
        let rapportTop = parseInt(allMonsters[i].div.style.top) - playerTop
        // Tu check position relative du monstre par rapport au perso
        if (allMonsters[i].rapportTop > 0) {
            allMonsters[i].moveUp()
        }
        if (allMonsters[i].rapportTop < 0) {
            allMonsters[i].moveDown()
        }
        if (allMonsters[i].rapportLeft > 0) {
            allMonsters[i].moveLeft()
        }
        if (allMonsters[i].rapportLeft  < 0) {
            allMonsters[i].moveRight()
        }
        if (allMonsters[i].rapportTop<1 && allMonsters[i].rapportLeft<1){
            allMonsters[i].monsterAttack()
        }
    }
    console.log(playerLife)
},600)


function spawn(spawnNumber){
    for (let i = 0; i < spawnNumber; i++) {
        let newMonster = new Monster(document.querySelector('.plateau'), 6)
        allMonsters.push(newMonster)
    }
}
function spawnBoss(spawnNumber){
    for (let i = 0; i < spawnNumber; i++) {
        let newMonster = new Boss(document.querySelector('.plateau'), 24)
        newMonster.div.classList.add('boss')
        allMonsters.push(newMonster)
        monstersStep = 1.2
    }
}

function resetLonk(){
    playerLeft = 22.4
    playerTop = 32
    player.style.left = playerLeft + "vw"
    player.style.top = playerTop + "vw"
    player.style.backgroundImage = "url('../images/backw0.png')"

}
function init(e){
    button.blur()
    game1()
    resetLonk()
    audio.play()
}


button.addEventListener('click',function(e) {
    init(e)
    hide()
})


function game1 (){ // Fonction pour lancer le premier niveau -> pop des monstres
    spawn(4)
}
function game2 (){ // Fonction pour lancer le premier niveau -> pop des monstres
    spawn(6)
}
function game3(){// Fonction du niveau 3
    spawn(10)
}
function boss() {
    spawnBoss(1)
}
