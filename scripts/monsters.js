
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


for (let i = 0; i < spawnNumber; i++) {
    let newMonster = new Monster(document.querySelector('.plateau'), 6)
    allMonsters = document.querySelectorAll(".monster");
}
for (let i = 0; i < allMonsters.length; i++) {
    if ((isAttackingTop == true) && (allMonsters[i].style.top - player.style.top < 3)){
        allMonsters[i].life -= 1
        if (allMonsters[i].life <= 0){
            allMonsters.remove(allMonsters[i])
        }
    }
}


function init(){ // les fonctions du début de jeu
    reset ()
    // game1 ()
}

let button = document.querySelector("button")// Il faut un button pour lancer le jeu
button.addEventListener(
    'click',
    init
)


function reset (){ // Fonction qui va reset l'espace du jeu
    do{
        for (i=0; i<allMonsters.length; i++)
        plateau.removeChild(allMonsters[i]) // En gros on peut dire que les monstres battent en retraitre
    } while (allMonsters > 0)
    playerLeft = 22.4
    playerTop = 32
    player.style.top = playerTop + 'vw'
    player.style.left = playerLeft + 'vw'
}

// In english pls