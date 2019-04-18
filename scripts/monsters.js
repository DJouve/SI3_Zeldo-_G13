let allMonsters = []
let monsters = document.querySelector(".monsters")
let monstersStep = 0.8
let spawnNumber = 1
let counter = 0
let button = document.querySelector("button")
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


for (let i = 0; i < spawnNumber; i++) {
    let newMonster = new Monster(document.querySelector('.plateau'), 6)
    allMonsters.push(newMonster)
}
for (let i = 0; i < allMonsters.length; i++) {
    if ((isAttackingTop == true) && (allMonsters[i].this.style.top - playerTop < 10)){
        allMonsters[i].this.life -= 1
        if (allMonsters[i].this.life <= 0){
            allMonsters.remove(allMonsters[i])
        }
    }
}
