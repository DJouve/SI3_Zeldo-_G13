
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
    allMonsters.push(newMonster)
}
for (let i = 0; i < allMonsters.length; i++) {
    if ((isAttackingTop == true) && (allMonsters[i].style.top - player.style.top < 3)){
        allMonsters[i].life -= 1
        if (allMonsters[i].life <= 0){
            allMonsters.remove(allMonsters[i])
        }
    }
}
