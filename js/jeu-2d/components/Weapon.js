// Création des armes

// Class Weapon

class Weapon extends Element {

    constructor(name, damages, classElt) {
        super(name, classElt)
        this.damages = damages
    }

}