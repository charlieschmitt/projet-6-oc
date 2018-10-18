// Création des joueurs

// Class Player

class Player extends Element {
    
    constructor(name, health, currentWeapon, strength, equipment, classElt) {
        super(name, classElt)
        this.health = health
        this.currentWeapon = currentWeapon
        this.oldWeapon = ""
        this.strength = strength
        this.equipment = equipment
        this.moveOK = { up : new Array(), down : new Array(), right : new Array(), left : new Array() }
        this.oldPos = { x : 0, y : 0 }
        this.defensePosition = false
    }
    
    // Méthode pour attaquer
    attackPlayer(e) {
        
        this.otherPlayer.health -= this.currentPlayer.currentWeapon.damages
        if(this.currentPlayer.name === "Donald Trump"){
            $('#player-2 .characteristics > p:nth-child(1) > span').empty().append(this.otherPlayer.health)
        }
        else if(this.currentPlayer.name === "Extraterrestrial"){
            $('#player-1 .characteristics > p:nth-child(1) > span').empty().append(this.otherPlayer.health)
        }
        
        if(this.otherPlayer.health <= 0){
            $('#attack').disabled = 'true'
            $('#defend').disabled = 'true'
        }
        
        e.stopImmediatePropagation()
        $('#attack').unbind('click')
        this.currentPlayer.defensePosition = false
        this.currentPlayer.decreaseAttack(GAME)
        
        this.nextTurnFight()
    }
    
    // Méthode pour défendre
    defendPlayer(e) {
        this.currentPlayer.defensePosition = true
        this.currentPlayer.decreaseAttack(GAME)
        e.stopImmediatePropagation()
        $('#defend').unbind('click')
        
        this.nextTurnFight()
    }
    
    // Réduction de moitié des dégâts de l'arme de l'autre joueur
    decreaseAttack(GAME) {
        if(this.defensePosition === true){
            GAME.otherPlayer.currentWeapon.damages -= (GAME.otherPlayer.currentWeapon.damages / 2)
        }
        else{
            GAME.currentPlayer.currentWeapon.damages = GAME.currentPlayer.strength
        }
    }

}