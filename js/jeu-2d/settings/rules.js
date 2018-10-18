// Ciblage du bouton pour ouvrir règles
const openRulesGame = document.querySelector('#rules-game')
// Ciblage du bouton pour fermer règles
const removeRulesGame = document.querySelector('#end-rules-game')
// Page contenant les règles
const rulesPage = document.querySelector('.rules-page--content')

// Click ouverture page
openRulesGame.addEventListener('click', addFullScreenAndOpen)

function addFullScreenAndOpen() {
    document.body.classList.add('full-screen')
    rulesPage.classList.add('open-active')
}

// Click fermeture page
removeRulesGame.addEventListener('click', removeFullScreenAndOpen)

function removeFullScreenAndOpen() {
    rulesPage.classList.remove('open-active')
    document.body.classList.remove('full-screen')
}

