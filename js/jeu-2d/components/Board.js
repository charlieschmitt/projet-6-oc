// Création du board

// Class Board
class Board {
    
    constructor() {
        this.rows = 8
        this.columns = 8
        this.nbWalls = 8
        this.createGrid()
        this.definePositionOfWall()
    }
    
    // Création de la grille
    createGrid() {
        
        let container = $('#container')
        
        for(let i = 1; i <= this.rows; i++){
            let row = $('<div class="row"></div>').attr('id', 'row-' + i)
            for(let j = 1; j <= this.columns; j++){
                CELL.createCells(j, i, row)
            }
            row.appendTo(container)
        }
        
    }
    
    // Définition de la position d'un mur
    definePositionOfWall() {
        
        // Initialisation des murs
        const WALL = new Element()
        this.index = 0
        
        while(this.index < this.nbWalls){
            // Si la pos ID d'un mur est égale à "cell empty", on appelle placeWalls() sinon on renvoie des coordonnées et on reteste
            WALL.eltPosID.className === "cell empty" ? this.placeWalls(WALL) : WALL.randomCoordinates() 
        }
        
    }
    
    // Insertion des murs dans la grille
    placeWalls(WALL) {
        WALL.eltPosID.classList.remove('empty'), WALL.eltPosID.classList.add('wall')
        // Insertion des murs dans prop isWall
        // Insertion de la position "x + '-' + y" dans prop occupiedCell
        CELL.isWall.push(WALL), CELL.occupiedCell.push(WALL.eltPos)
        this.index++
    }
    
    // Insertion des joueurs et des armes dans des tableaux
    insertingElementsInTables(p1, p2, w1, w2, w3, w4) {
        
        CELL.isPlayer.push(p1, p2)
        CELL.isWeapon.push(w1, w2, w3, w4)
        // Fusion du tableau isPlayer avec isWeapon
        CELL.PlayerAndWeapon = CELL.isPlayer.concat(CELL.isWeapon)
        
        return this.placeElements(p1, p2)
        
    }
    
    // Insertion des joueurs et des armes dans la grille
    placeElements(p1, p2) {
        
        this.checkingPositionBetweenPlayers(p1, p2)
        
        // Parcours des joueurs et armes à insérer
        for(let i = 0; i < CELL.PlayerAndWeapon.length; i++){
            // Parcours de toutes les positions des cases occupées
            // On teste chaque arme / joueur par rapport aux cases occupées
            for(this.index = 0; this.index < CELL.occupiedCell.length; this.index++){
                // On teste la position de chaque élément en appellant la méthode compareElements()
                CELL.PlayerAndWeapon[i] = this.compareElements(CELL.PlayerAndWeapon[i], CELL.occupiedCell[this.index])
                // Si jamais la position du joueur 2 est différente d'un élément du tableau, rappeller la méthode permet d'éviter les erreurs entre le p1 et p2
                this.checkingPositionBetweenPlayers(p1, p2)
            }
            // Stockage des positions des éléments dans la propriété occupiedCell
            CELL.occupiedCell.push(CELL.PlayerAndWeapon[i].eltPos)
            // Si c'est ok, on place l'élément dans la grille
            CELL.PlayerAndWeapon[i].placeElts()
        }
        
    }
    
    // On teste la position du joueur 1 avec le joueur 2
    checkingPositionBetweenPlayers(p1, p2) {
        if((p2.pos.x === p1.pos.x) || (p2.pos.x === (p1.pos.x - 1)) || (p2.pos.x === (p1.pos.x + 1)) || (p2.pos.y === p1.pos.y) || (p2.pos.y === (p1.pos.y - 1)) || (p2.pos.y === (p1.pos.y + 1))){
            // Si oui, on établit une nouvelle position aléatoire pour le joueur 2 et on reteste
            p2.randomCoordinates()
            return this.checkingPositionBetweenPlayers(p1, p2)
        }
    }
    
    // On compare la position d'un élément avec les autres éléments du tableau
    compareElements(elementToInsert, baseElement) {
        if(elementToInsert.eltPos === baseElement){
            // On redonne une nouvelle position aléatoire à l'élément et on recommence
            elementToInsert.randomCoordinates()
            this.index = -1
            return this.compareElements(elementToInsert, baseElement)
        }
        else{
            return elementToInsert
        }
    }
    
    // Regroupement des 4 méthodes définissant les cellules accessibles verticalement et horizontalement
    determinationOfAccessibleCells(currentPlayer) {
        this.determinationOfAccessibleCellsUp(currentPlayer), this.determinationOfAccessibleCellsDown(currentPlayer), this.determinationOfAccessibleCellsLeft(currentPlayer), this.determinationOfAccessibleCellsRight(currentPlayer)
    }

    // Détermination des cellules accessibles en haut
    determinationOfAccessibleCellsUp(currentPlayer) {
        for(this.index = 1; this.index <= 3; this.index++){
            // On attribue une position à la prop isAccessible de -1 pour le y, puis -2 et -3
            CELL.isAccessible = document.getElementById((currentPlayer.pos.x) + "-" + (currentPlayer.pos.y - this.index))
            currentPlayer.moveOK.up.push(CELL.isAccessible)
            this.checkingIfCellIsOk()
        }
    }

    // Détermination des cellules accessibles en bas
    determinationOfAccessibleCellsDown(currentPlayer) {
        for(this.index = 1; this.index <= 3; this.index++){
            // On attribue une position à la prop isAccessible de +1 pour le y, puis +2 et +3
            CELL.isAccessible = document.getElementById((currentPlayer.pos.x) + "-" + (currentPlayer.pos.y + this.index))
            currentPlayer.moveOK.down.push(CELL.isAccessible)
            this.checkingIfCellIsOk()
        }
    }

    // Détermination des cellules accessibles à gauche
    determinationOfAccessibleCellsLeft(currentPlayer) {
        for(this.index = 1; this.index <= 3; this.index++){
            // On attribue une position à la prop isAccessible de -1 pour le x, puis -2 et -3
            CELL.isAccessible = document.getElementById((currentPlayer.pos.x - this.index) + "-" + (currentPlayer.pos.y))
            currentPlayer.moveOK.left.push(CELL.isAccessible)
            this.checkingIfCellIsOk()
        }
    }

    // Détermination des cellules accessibles à droite
    determinationOfAccessibleCellsRight(currentPlayer) {
        for(this.index = 1; this.index <= 3; this.index++){
            // On attribue une position à la prop isAccessible de +1 pour le x, puis +2 et +3
            CELL.isAccessible = document.getElementById((currentPlayer.pos.x + this.index) + "-" + (currentPlayer.pos.y))
            currentPlayer.moveOK.right.push(CELL.isAccessible)
            this.checkingIfCellIsOk()
        }
    }
    
    // Vérification si la cellule est ok, si elle est bien disponible
    checkingIfCellIsOk() {
            if((CELL.isAccessible !== CELL.isOffMap) && (CELL.isAccessible.className !== CELL.isWall[0].eltPosID.className) && (CELL.isAccessible !== CELL.isPlayer[0].eltPosID.className) && (CELL.isAccessible !== CELL.isPlayer[0].eltPosID.className)){
            CELL.isAccessible.classList.add('accessible')
            CELL.accessibleCell.push(CELL.isAccessible)
        }
        else{
            // Si la cellule n'est pas disponible, passage de la prop index à 10, pour sortir de la boucle for
            this.index = 10
        }
    }

    // Suppresion des cellules accessibles verticalement et horizontalement
    deleteAccessibleCells(currentPlayer) {
        
        // Suppression de toutes les class accessibles dans la grille
        CELL.accessibleCell.forEach(cell => cell.classList.remove('accessible'))
        // Suppression des cellules accessibles dans le tab
        CELL.accessibleCell.splice(0, CELL.accessibleCell.length)
        // Suppresion des positions de déplacement dans les tabs
        for(let prop in currentPlayer.moveOK){
            currentPlayer.moveOK[prop].splice(0, currentPlayer.moveOK[prop].length)
        }
        
    }
    
}