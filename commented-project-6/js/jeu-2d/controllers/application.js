/*** Initialisation des cellules ***/
const CELL = new Cell()


/*** Initialisation du board, création de la grille et mise en place murs ***/
const BOARD = new Board(CELL)


/*** Initialisation des armes ***/

// Arme initiale Donald Trump
const SLINGSHOT_DONALD_TRUMP = new Weapon('Slingshot', 10, 'slingshot')
// Arme initiale Extraterrestre
const SLINGSHOT_EXTRATERRESTRIAL = new Weapon('Slingshot', 10, 'slingshot')
// Pistolet laser
const LASER_GUN = new Weapon('Laser gun', 40, 'laser-gun')
// Mitraillette laser
const LASER_SUBMACHINE_GUN = new Weapon('Laser submachine gun', 50, 'laser-submachine--gun')
// Couteau suisse
const SWISS_KNIFE = new Weapon('Swiss knife', 5, 'swiss-knife')
// Taser
const TASER = new Weapon('Taser', 15, 'taser')

// Création des éléments caractéristiques pour les deux joueurs
function createCharacteristics() {
    const nbPlayers = 2
    for(var i = 1; i <= nbPlayers; i++) {
        $('<p>').addClass('health-points').html('Points de vie : ').appendTo('#player-' + parseInt([i]) + ' .characteristics')
        $('<span>').appendTo('#player-' + parseInt([i]) + ' .characteristics > p:nth-child(1)')
        $('<p>').addClass('strength-points').html('Points de force : ').appendTo('#player-' + parseInt([i]) + ' .characteristics')
        $('<span>').appendTo('#player-' + parseInt([i]) + ' .characteristics > p:nth-child(2)')
        $('<p>').addClass('equipment').html('Equipement : ').appendTo('#player-' + parseInt([i]) + ' .characteristics')
        $('<span>').appendTo('#player-' + parseInt([i]) + ' .characteristics > p:nth-child(3)')
    }
}

createCharacteristics()

/*** Initialisation des joueurs ***/

// Donald Trump
const DONALD_TRUMP = new Player('Donald Trump', 100, SLINGSHOT_DONALD_TRUMP, SLINGSHOT_DONALD_TRUMP.damages, SLINGSHOT_DONALD_TRUMP.name, 'donald-trump')
// Initialisation des caractéristiques
$('#player-1 .characteristics > p:nth-child(1) > span').append(DONALD_TRUMP.health)
$('#player-1 .characteristics > p:nth-child(2) > span').append(DONALD_TRUMP.strength)
$('#player-1 .characteristics > p:nth-child(3) > span').append(DONALD_TRUMP.equipment) 

// Extraterrestre
const EXTRATERRESTRIAL = new Player('Extraterrestrial', 100, SLINGSHOT_EXTRATERRESTRIAL, SLINGSHOT_EXTRATERRESTRIAL.damages, SLINGSHOT_EXTRATERRESTRIAL.name, 'extraterrestrial')
$('#player-2 .characteristics > p:nth-child(1) > span').append(EXTRATERRESTRIAL.health)
$('#player-2 .characteristics > p:nth-child(2) > span').append(EXTRATERRESTRIAL.strength)
$('#player-2 .characteristics > p:nth-child(3) > span').append(EXTRATERRESTRIAL.equipment)




// Insertion des joueurs et des armes dans des tableaux, puis dans la grille, gestion des collisions
BOARD.insertingElementsInTables(DONALD_TRUMP, EXTRATERRESTRIAL, LASER_GUN, LASER_SUBMACHINE_GUN, SWISS_KNIFE, TASER)


/*** Initialisation du jeu ***/
const GAME = new Game(BOARD, DONALD_TRUMP, EXTRATERRESTRIAL)
// Lancement du jeu
GAME.startGame()