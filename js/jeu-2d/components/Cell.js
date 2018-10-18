// Création des cellules

// Class Cell

class Cell {
    
    constructor() {
        this.isWall = new Array()
        this.isOffMap = null
        this.isPlayer = new Array()
        this.isWeapon = new Array()
        this.isPlayerAndWeapon = new Array()
        this.isOccupied = new Array()
        this.isAccessible = ''
        this.accessibleCells = new Array()
    }
    
    // Création des cellules
    createCells(x, y, row) {
        let cell = $('<div class="cell empty"></div>').attr('id', x + '-' + y).appendTo(row)
    }
    
}