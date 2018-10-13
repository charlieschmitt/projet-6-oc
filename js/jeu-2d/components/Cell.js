// Création des cellules

// Class Cell

class Cell {
    
    constructor() {
        // Tab contenant les murs
        this.isWall = new Array()
        // Prop contenant une cellule hors map
        this.isOffMap = null
        // Tab contenant les joueurs
        this.isPlayer = new Array()
        // Tab contenant les armes
        this.isWeapon = new Array()
        // Tab contenant les joueurs et les armes 
        this.PlayerAndWeapon = new Array()
        // Tab contenant les cellules occupées
        this.occupiedCell = new Array()
        // Prop contenant une cellule accessible
        this.isAccessible = ''
        // Prop contenant les cellules accessibles 
        this.accessibleCell = new Array()
    }
    
    // Création des cellules
    createCells(x, y, row) {
        let cell = $('<div class="cell empty"></div>').attr('id', x + '-' + y).appendTo(row)
    }
    
}