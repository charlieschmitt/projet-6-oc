// Création du jeu

// Class Game
class Game {
    
    constructor() {
        this.players = [DONALD_TRUMP, EXTRATERRESTRIAL]
        this.currentPlayer = this.players[0]
        this.otherPlayer = this.players[1]
        this.switchGame = true
    }
    
    // début du jeu (cases accessibles + méthode click)
    startGame() {
        BOARD.determinationOfAccessibleCells(this.currentPlayer)
        return this.clickGame()
    }
    
    // Méthode permettant de cliquer sur une case accessible
    clickGame() {
        $('div.cell.empty.accessible').bind('click', this.GameMarsAttacks.bind(this))
    }
    
    // Méthode contenant les principales méthodes pour le jeu de combat Mars Attacks !
    GameMarsAttacks(cellIsClicked) {
        this.movementManagement(cellIsClicked)
        this.pickUpWeaponsAccordingToPosition()
        BOARD.deleteAccessibleCells(this.currentPlayer)
        return this.settingUpFight()
    }
    
    // Gestion des déplacements, de 1 à 3 cases
    movementManagement(cellIsClicked) {
        
        // Passage des positions x et y dans la propriété oldPos
        this.currentPlayer.oldPos.x = this.currentPlayer.pos.x, this.currentPlayer.oldPos.y = this.currentPlayer.pos.y
        // Je récupère la position du joueur au click()
        let pos = cellIsClicked.target.id.split('-')
        // Suppression de la class du joueur
        this.currentPlayer.eltPosID.classList.remove(this.currentPlayer.classElt)
        // Actualisation position x et y du joueur
        this.currentPlayer.pos.x = parseInt(pos[0]), this.currentPlayer.pos.y = parseInt(pos[1])
        this.currentPlayer.eltPos = this.currentPlayer.pos.x + '-' + this.currentPlayer.pos.y
        // Actualisation position id x et y du joueur
        this.currentPlayer.eltPosID = document.getElementById(this.currentPlayer.pos.x + '-' + this.currentPlayer.pos.y)
        // Ajout de la class à la nouvelle position
        this.currentPlayer.eltPosID.classList.add(this.currentPlayer.classElt)
        // Stopper immédiatement la propagation. Cela permet d'assurer le tour par tour
        cellIsClicked.stopImmediatePropagation()
        
    }
    
    // Détermination de la direction du joueur selon l'ancienne position 
    pickUpWeaponsAccordingToPosition() {
        
        for(let prop in this.currentPlayer.moveOK){
            switch(prop){
                case 'up' : 
                if(this.currentPlayer.oldPos.y > this.currentPlayer.pos.y){
                    this.checkingCellContainingWeapon(prop)
                } else{ break }
                case 'down' : 
                if(this.currentPlayer.oldPos.y < this.currentPlayer.pos.y){
                    this.checkingCellContainingWeapon(prop)
                } else{ break }
                case 'right' : 
                if(this.currentPlayer.oldPos.x < this.currentPlayer.pos.x){
                    this.checkingCellContainingWeapon(prop)
                } else{ break }
                case 'left' : 
                if(this.currentPlayer.oldPos.x > this.currentPlayer.pos.x){
                    this.checkingCellContainingWeapon(prop)
                } else{ break }
            }
        }
        
    }
    
    // Vérification des cellules contenant une arme
    checkingCellContainingWeapon(prop) {
        
        for(let i = 0; i < this.currentPlayer.moveOK[prop].length; i++){
            for(let j = 0; j < CELL.isWeapon.length; j++){
                if((this.currentPlayer.moveOK[prop][i].id) === (CELL.isWeapon[j].eltPos)){
                    this.pickUpWeapons(j)
                }
            }
            if((this.currentPlayer.moveOK[prop][i]) === (this.currentPlayer.eltPosID)){
                break
            }
        }
        
    }
    
    // Ramassage de l'arme
    pickUpWeapons(j) {
        
        // Remplacement de la class de l'arme ramassé par l'arme que le joueur possède
        CELL.isWeapon[j].eltPosID.classList.replace(CELL.isWeapon[j].classElt, this.currentPlayer.currentWeapon.classElt)
        // Affectation de l'arme actuelle à la propriété oldWeapon
        this.currentPlayer.oldWeapon = this.currentPlayer.currentWeapon
        // Affectation de la nouvelle arme à la propriété currentWeapon
        this.currentPlayer.currentWeapon = CELL.isWeapon[j]
        // Affectation des positions
        this.currentPlayer.oldWeapon.pos.x = this.currentPlayer.currentWeapon.pos.x, this.currentPlayer.oldWeapon.pos.y = this.currentPlayer.currentWeapon.pos.y
        this.currentPlayer.oldWeapon.eltPos = this.currentPlayer.currentWeapon.eltPos, this.currentPlayer.oldWeapon.eltPosID = this.currentPlayer.currentWeapon.eltPosID
        // Définition de la nouvelle force et du nouvel équipement
        this.currentPlayer.strength = this.currentPlayer.currentWeapon.damages, this.currentPlayer.equipment = this.currentPlayer.currentWeapon.name
        
        this.changeOfCharacteristics()
        
        // Remplacement de l'arme ramassée par l'arme actuelle dans la propriété weapons
        CELL.isWeapon.splice(j, 1, this.currentPlayer.oldWeapon)
        
    }
    
    // Changement des caractéristiques d'un joueur après avoir ramassé une arme
    changeOfCharacteristics() {
        if(this.currentPlayer.classElt === 'donald-trump'){
            $('#player-1 .characteristics > p:nth-child(2) > span').empty().append(this.currentPlayer.strength)
            $('#player-1 .characteristics > p:nth-child(3) > span').empty().append(this.currentPlayer.equipment)
        }
        else if(this.currentPlayer.classElt === 'extraterrestrial'){
            $('#player-2 .characteristics > p:nth-child(2) > span').empty().append(this.currentPlayer.strength)
            $('#player-2 .characteristics > p:nth-child(3) > span').empty().append(this.currentPlayer.equipment)
        }
    }
    
    // Mise en place du combat
    settingUpFight() {
        if(this.players[0].pos.x === this.players[1].pos.x || this.players[0].pos.y === this.players[1].pos.y){
            if(this.players[0].pos.x === this.players[1].pos.x - 1 || this.players[0].pos.x === this.players[1].pos.x + 1 || this.players[0].pos.y === this.players[1].pos.y - 1 || this.players[0].pos.y === this.players[1].pos.y + 1){
                $('#players').css({
                    marginTop : '6rem', 
                    transition : 'ease-in 1s'
                })
                $('#players-fight').show('fade', 3000)
                this.fightBetweenTwoPlayers()
            }
            else{
                return this.nextTurn()
            }
        }
        else{
            return this.nextTurn()
        }
    }
    
    // Combat entre les deux joueurs
    fightBetweenTwoPlayers() {
        
        while(this.switchGame){
            if(this.currentPlayer.health > 0){
                this.setUpFight()
                this.currentPlayerColorChange()
                this.switchGame = false
            }
            else{
                return this.endGame()
            }
            
        }
        
    }
    
    setUpFight(){
        $('#attack').bind('click', this.currentPlayer.attackPlayer.bind(this));
        $('#defend').bind('click', this.currentPlayer.defendPlayer.bind(this));
    }
    
    // Changement de couleur des backgrounds pour le joueur courant
    currentPlayerColorChange() {
        if(this.currentPlayer.name === "Donald Trump"){
            $('#player-1 .title-perso').css('background-color', '#063c76'), $('#player-1 .characteristics').css('background-color', '#063c76')
            $('#player-2 .title-perso').css('background-color', '#f16c1b'), $('#player-2 .characteristics').css('background-color', '#f16c1b')
        }
        else if(this.currentPlayer.name === "Extraterrestrial"){
            $('#player-2 .title-perso').css('background-color', '#063c76'),  $('#player-2 .characteristics').css('background-color', '#063c76')
            $('#player-1 .title-perso').css('background-color', '#f16c1b'), $('#player-1 .characteristics').css('background-color', '#f16c1b')
        }
    }
    
    // Fin du jeu
    endGame() {
        $('body').addClass('full-screen')
        $('.modal').fadeIn(200)
        $('.modal').addClass('show')
        $('.winner').text(this.otherPlayer.name + ' a gagné !')
        $("#replay").click(function(){
			window.location.reload()
		})
    }
		
    // Prochain tour de combat
    nextTurnFight() {
        this.setNextPlayer()
        this.switchGame = true
        return this.fightBetweenTwoPlayers()
    }
    
    // Passage au tour suivant
    nextTurn() {
        this.setNextPlayer()
        return this.startGame()
    }
    
    // Définition du prochain joueur
    setNextPlayer() {
        if(this.currentPlayer.name === 'Extraterrestrial'){
            this.currentPlayer = this.players[0]
            this.otherPlayer = this.players[1]
        }
        else{
            this.currentPlayer = this.players[1]
            this.otherPlayer = this.players[0]
        }
    }
    
}