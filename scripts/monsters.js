<<<<<<< HEAD
let allMonsters = []
let monsters = document.querySelector(".monsters")
let monstersStep = 0.8
let spawnNumber = 1
let counter = 0
let button = document.querySelector("button")
=======

>>>>>>> parent of e91d3f1... push
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

}

let allMonsters = []
let spawnNumber = 4


<<<<<<< HEAD
setInterval(function(){
    for (let i = 0; i < allMonsters.length; i++) {
        // Gestion attaque
        if ((isAttackingTop == true) && (allMonsters[i].style.top - playerTop < 10) && (rapportLeft >= (-10)) && (rapportLeft <= 10)){
            this.div.monsterLife -= 2

            if (this.div.monsterLife <= 0){
                allMonsters.splice(i,1)
                death()
            }
        }
        // Gestion déplacement des monstres
        let rapportLeft = parseFloat(allMonsters[i].div.style.left) - playerLeft
        let rapportTop = parseFloat(allMonsters[i].div.style.top) - playerTop
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
        allMonsters = document.querySelectorAll(".monster");
    }
}

function damage(){
    for (let i = 0; i < allMonsters.length; i++) {
        if ((isAttackingTop == true) && (allMonsters[i].style.top - playerTop < 3)){
            allMonsters[i].life -= 1
            if (allMonsters[i].life <= 0){
                plateau.removeChild(allMonsters[i])
                counter++
            }
        }
    }
}

function init(e){
    button.blur()
    reset ()
    game1 ()
}



button.addEventListener(
    'click',
    init
)


function reset (){
    do{
        for (i=0; i<allMonsters.length; i++)
        plateau.removeChild(allMonsters[i]) // Retreat !
    } while (allMonsters > 0)
    playerLeft = 22.4
    playerTop = 32
    player.style.top = playerTop + 'vw'
    player.style.left = playerLeft + 'vw'
}


function game1 (){ // Fonction pour lancer le premier niveau -> pop des monstres
    spawnNumber = 2
    // for (i = 0; i<allMonsters.length; i++){
        window.setInterval(spawn, 4000)
        damage()

    if (counter == 14){ // L'idée c'est que quand on tue 15 monstres, on passe au niveau suivant
        reset ()
        game2 ()
    }
}

function game2 (){// Fonction du niveau 2

    let counter = 0
    while (counter < 15) {
        for (i=0; i<1; i++){
            window.setInterval(archer.draw, 7500)
            if (archer.life <= 0){
                plateau.removeChild(archer)
                counter++
            }
            window.setInterval(autremonstre.draw, 12500)
            if (autremonstre.life <= 0){
                plateau.removeChild(autremonstre)
                counter++
            }
        }
    }
    if (counter == 14){ // Même principe que le niveau 1
        reset ()
        game3()
    }
}

function game3(){// Fonction du niveau 3

    while (boss.life>0) {
        for (i = 0; i<1; i++){// Ca fait apparaitre des mobs au fur et à mesure. Y a plus de retraitre des monstres ils y vont tous
            window.setInterval(archer.draw, 5000)
            window.setInterval(soldier.draw, 3500)
            window.setInterval(autremonstre.draw, 7800)
            if (archer.life <= 0){
                plateau.removeChild(archer)
            }
            if (soldier.life <= 0){
                plateau.removeChild(soldier)
            }
            if (autremonstre.life <= 0){
                plateau.removeChild(autremonstre)
            }
            boss.draw
            if (boss.life <= 0){// La win condition c'est de vaincre le boss, vaincre les autres mobs ne fait rien
                endgame()
            }
        }
=======
for (let i = 0; i < spawnNumber; i++) {
    let newMonster = new Monster(document.querySelector('.plateau'), 6)
    allMonsters.push(newMonster)
}
for (let i = 0; i < allMonsters.length; i++) {
    if ((isAttackingTop == true) && (allMonsters[i].style.top - player.style.top < 3)){
        allMonsters[i].life -= 1
        if (allMonsters[i].life <= 0){
            allMonsters.remove(allMonsters[i])
        }
>>>>>>> parent of e91d3f1... push
    }
}
