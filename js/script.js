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
        return ('Ty wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        return ('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        return ('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove) {
        return ('Remis')
    } else return ('Przegrywasz!');
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

// if (randomNumber == 1) {
//     computerMove = 'kamień';
// } else if (randomNumber == 2) {
//     computerMove = 'papier';
// } else computerMove = 'nożyce';

printMessage('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

// if (playerInput == '1') {
//     playerMove = 'kamień';
// } else if (playerInput == 2) {
//     playerMove = 'papier';
// } else if (playerInput == 3) {
//     playerMove = 'nożyce';
// }

printMessage('Ruch gracza to: ' + playerMove);

// if (computerMove == 'kamień' && playerMove == 'papier') {
//     printMessage('Ty wygrywasz!');
// } else if (computerMove == 'papier' && playerMove == 'nożyce') {
//     printMessage('Ty wygrywasz!');
// } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
//     printMessage('Ty wygrywasz!');
// } else if (computerMove == playerMove) {
//     printMessage('Remis')
// } else printMessage('Przegrywasz!');

printMessage(displayResult(computerMove, playerMove))