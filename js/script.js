function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        } else if (argMoveId == 2){
            return 'papier';
        } else if (argMoveId == 3){
            return 'nożyce';
        } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
        }
    }

    function displayResult(argComputerMove, argPlayerMove){
        console.log('moves:', argComputerMove, argPlayerMove);
        if( argComputerMove == argPlayerMove){
            return 'Remis!';
        }   else if (( argComputerMove == 'kamień' && argPlayerMove == 'papier') || ( argComputerMove =='papier' && argPlayerMove == "nożyce") || ( argComputerMove =='nożyce' && argPlayerMove == "kamień")){
            return 'Ty wygrywasz!';
        }   else if ( ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || ( argComputerMove =='papier' && argPlayerMove == "kamień") || ( argComputerMove =='nożyce' && argPlayerMove == "papier")){
            return 'Wygrywa komputer!';
        }   else {
            return 'Możesz podać tylko liczbę 1 , 2 lub 3!!';
        }
    }


    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    printMessage(displayResult(computerMove,playerMove));
}



document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});