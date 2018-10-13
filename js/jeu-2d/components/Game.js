// Création du jeu

// Class Game
class Game {

    constructor() {
        this.players = [DONALD_TRUMP, EXTRATERRESTRIAL]
        this.currentPlayer = this.players[0]
        this.turnCounter = 1
    }

    // Définition et suppression des cellules accessibles
    accessibleCells(){
        BOARD.determinationOfAccessibleCells(this.currentPlayer)
        BOARD.deleteAccessibleCells(this.currentPlayer)
    }

    // Définition du prochain joueur
    setNextPlayer() {
        if(this.currentPlayer.name === 'Extraterrestrial'){
            this.currentPlayer = this.players[0]
        }
        else{
            this.currentPlayer = this.players[1]
        }
    }
    
    // Passage au tour suivant
    nextTurn() {

        let setNextTurn = prompt("Veuillez taper ok pour passer au prochain tour : ")
        while(setNextTurn !== 'ok'){
            setNextTurn = prompt("Veuillez taper ok pour passer au prochain tour : ")
        }
    
        alert('OK, super ! Tour suivant : ' + this.turnCounter)
        this.turnCounter = this.turnCounter + 1

        this.setNextPlayer()
        this.accessibleCells()
        this.nextTurn()
        
    }

}