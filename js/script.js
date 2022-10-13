{ 
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let computerMove;

const printMessage = function(msg){
    print(msg, 'messages');
}

const printResult = function(msg){
    print(msg, 'result');
}

const getMoveName = function(argMoveId){
    if(argMoveId == 1){
    return 'kamień';
    } else if (argMoveId == 2){
        return 'papier';
    } else if (argMoveId == 3){
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.', 'messages');
        return 'nieznany ruch';
    }
}

const displayResult = function(argComputerMove, argPlayerMove){
    if( argComputerMove == argPlayerMove){
        drawScore++;
        return 'Remis!';
    }   else if (( argComputerMove == 'kamień' && argPlayerMove == 'papier') || ( argComputerMove =='papier' && argPlayerMove == "nożyce") || ( argComputerMove =='nożyce' && argPlayerMove == "kamień")){
        playerScore++;
        return 'Ty wygrywasz!';
    }   else if ( ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || ( argComputerMove =='papier' && argPlayerMove == "kamień") || ( argComputerMove =='nożyce' && argPlayerMove == "papier")){
        computerScore++;
        return 'Wygrywa komputer!';
    }   else {
        return 'Możesz podać tylko liczbę 1 , 2 lub 3!!';
    }
}

const notFair = function(playerRandomMove){
    let mathRanNotFair = Math.random();
    if (mathRanNotFair < 0.25){
        if (playerRandomMove === 'kamień'){
            computerMove = 'papier';
        } else if (playerRandomMove === 'papier'){
            computerMove = 'nożyce';
        } else computerMove = 'kamień';
        return displayResult(computerMove, playerRandomMove);
    } else {
        let optionToRemove = '';
        if (playerRandomMove === 'kamień'){
            optionToRemove = 'papier';
        } else if (playerRandomMove === 'papier'){
            optionToRemove = 'nożyce';
        } else optionToRemove = 'kamień';

        const allOptions = ['kamień', 'papier', 'nożyce'];
        const optionToPick = allOptions.filter(option => option !== optionToRemove);
        computerMove = optionToPick[Math.floor(Math.random() * optionToPick.length)];
        return displayResult(computerMove, playerRandomMove);
    }
}

const playGame = function(playerInput) {
    clear('messages');
    
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove, 'messages');

    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove, 'messages');
    printMessage(displayResult(computerMove,playerMove), 'messages');
    
    printResultMain();
}

const printResultMain = function(){
    clear('result');
    printResult('Wynik komputera : ' + computerScore, 'result');
    printResult('Twój wynik : ' + playerScore, 'result');
    printResult('Remis : ' + drawScore, 'result');
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
document.getElementById('random').addEventListener('click', function(){
    for(let i=0; i<5; i++){
    let randomNumberPlayer = Math.floor(Math.random() * 3 + 1);
    notFair(getMoveName(randomNumberPlayer));
    printResultMain();}
})
}