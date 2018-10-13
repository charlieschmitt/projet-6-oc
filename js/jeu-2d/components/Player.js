// Création des joueurs

// Class Player

class Player extends Element {

    constructor(name, health, currentWeapon, strength, equipment, classElt) {
        super(name, classElt)
        this.health = health
        this.currentWeapon = currentWeapon
        this.strength = strength
        this.equipment = equipment
        this.moveOK = { up : new Array(), down : new Array(), right : new Array(), left : new Array() }
    }

}