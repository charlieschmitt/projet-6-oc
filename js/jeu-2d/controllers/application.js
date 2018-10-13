/*** Initialisation des cellules ***/
const CELL = new Cell()

/*** Initialisation du board, création de la grille et mise en place murs ***/
const BOARD = new Board(CELL)

/*** Initialisation des armes ***/
// Arme initiale
const SLINGSHOT = new Weapon('Slingshot', 10, 'slingshot')
// Pistolet laser
const LASER_GUN = new Weapon('Laser gun', 40, 'laser-gun')
// Mitraillette laser
const LASER_SUBMACHINE_GUN = new Weapon('Laser submachine gun', 50, 'laser-submachine--gun')
// Couteau suisse
const SWISS_KNIFE = new Weapon('Swiss knife', 5, 'swiss-knife')
// Taser
const TASER = new Weapon('Taser', 15, 'taser')

/*** Initialisation des joueurs ***/
// Donald Trump
const DONALD_TRUMP = new Player('Donald Trump', 100, SLINGSHOT, SLINGSHOT.damages, SLINGSHOT.name, 'donald-trump')
// Extraterrestre
const EXTRATERRESTRIAL = new Player('Extraterrestrial', 100, SLINGSHOT, SLINGSHOT.damages, SLINGSHOT.name, 'extraterrestrial')

// Insertion des joueurs et des armes dans des tableaux, puis dans la grille, gestion des collisions
BOARD.insertingElementsInTables(DONALD_TRUMP, EXTRATERRESTRIAL, LASER_GUN, LASER_SUBMACHINE_GUN, SWISS_KNIFE, TASER)
// Mise en place des cellules accessibles dans la grille
//BOARD.determinationOfAccessibleCells(DONALD_TRUMP)
// Suppression des cellules accessibles dans la grille
//BOARD.deleteAccessibleCells(DONALD_TRUMP)

/*** Initialisation du jeu ***/
const GAME = new Game(BOARD, DONALD_TRUMP, EXTRATERRESTRIAL)
GAME.accessibleCells()
GAME.nextTurn()