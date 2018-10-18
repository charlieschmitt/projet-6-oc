// Combat joueur
$('#players-fight').hide();
const attackButton = $('#attack'), defendButton = $('#defend')

// Création des éléments caractéristiques pour les deux joueurs
const nbPlayers = 2
for(var i = 1; i <= nbPlayers; i++) {
    $('<p>').addClass('health-points').html('Points de vie : ').appendTo('#player-' + parseInt([i]) + ' .characteristics')
    $('<span>').appendTo('#player-' + parseInt([i]) + ' .characteristics > p:nth-child(1)')
    $('<p>').addClass('strength-points').html('Points de force : ').appendTo('#player-' + parseInt([i]) + ' .characteristics')
    $('<span>').appendTo('#player-' + parseInt([i]) + ' .characteristics > p:nth-child(2)')
    $('<p>').addClass('equipment').html('Equipement : ').appendTo('#player-' + parseInt([i]) + ' .characteristics')
    $('<span>').appendTo('#player-' + parseInt([i]) + ' .characteristics > p:nth-child(3)')
}