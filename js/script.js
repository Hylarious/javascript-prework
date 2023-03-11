function playGame(playerInput) {
    clearMessages()

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    function displayResult(argComputerMove, argPlayerMove) {
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            return 'Ty wygrywasz!';
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            return 'Ty wygrywasz!';
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            return 'Ty wygrywasz!';
        } else if (argComputerMove == argPlayerMove) {
            return 'Remis';
        } else {
            return 'Przegrywasz!'
        };
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Ruch komputera to: ' + computerMove);

    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Ruch gracza to: ' + playerMove);

    printMessage(displayResult(computerMove, playerMove))
}
document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
});