let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';


if (computerMove == 1){
    computerMove = 'kamień';
}   else if (computerMove == 2){
    computerMove = 'papier';
}   else if (computerMove == 3){
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);