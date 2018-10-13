/*** Initialisation des cellules ***/
const CELL = new Cell()

/*** Création du board ***/

// Initialisation du board, création de la grille et mise en place murs
const BOARD = new Board(CELL)

/*** Initialisation des armes ***/

// Arme initiale
const Slingshot = new Weapon('Slingshot', 10, 'slingshot')
// Pistolet laser
const LaserGun = new Weapon('Laser gun', 40, 'laser-gun')
// Mitraillette laser
const LaserSubmachineGun = new Weapon('Laser submachine gun', 50, 'laser-submachine--gun')
// Couteau suisse
const SwissKnife = new Weapon('Swiss knife', 5, 'swiss-knife')
// Taser
const Taser = new Weapon('Taser', 15, 'taser')

/*** Initialisation des joueurs ***/

// Donald Trump
const DonaldTrump = new Player('Donald Trump', 100, Slingshot, Slingshot.damages, Slingshot.name, 'donald-trump')

// Extraterrestre
const Extraterrestrial = new Player('Extraterrestrial', 100, Slingshot, Slingshot.damages, Slingshot.name, 'extraterrestrial')

// Insertion des joueurs et des armes dans des tableaux, puis dans la grille, gestion des collisions
BOARD.InsertingElementsInTables(DonaldTrump, Extraterrestrial, LaserGun, LaserSubmachineGun, SwissKnife, Taser)


