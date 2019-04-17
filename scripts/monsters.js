let allMonsters = []
let spawnNumber = 4
let monsters = document.querySelector(".monsters")
let monstersStep = 0.6


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

for (let i = 0; i < spawnNumber; i++) {
    let newMonster = new Monster(document.querySelector('.plateau'), 6)
    allMonsters.push(newMonster)
}
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
},500)
