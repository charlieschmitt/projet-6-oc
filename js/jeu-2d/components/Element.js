// Création d'un element parent --> Wall, Player, Weapon

// Class Cell

class Element {

    constructor(name, classElt) {
        this.name = name
        this.classElt = classElt
        this.pos = { x : 0, y : 0 }
        this.randomCoordinates(8)
    }
    
    // Coordonnées x-y aléatoires
    randomCoordinates(max) {
        this.pos.x = Math.floor(Math.random() * max) + 1, this.pos.y = Math.floor(Math.random() * max) + 1
        this.eltPos = this.pos.x + '-' + this.pos.y
        this.eltPosID = document.getElementById((this.pos.x) + '-' + (this.pos.y))
    }
    
    // Placer les joueurs dans la grille
    placeElts() {
        this.eltPosID.classList.add(this.classElt)
    }

}