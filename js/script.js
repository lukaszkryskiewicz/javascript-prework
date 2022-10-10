let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let computerMove;

function printMessage2(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('result').appendChild(div);
}
function clearMessages2(){
	document.getElementById('result').innerHTML = '';
}

function getMoveName(argMoveId){
    let randomNumberPlayer = Math.floor(Math.random() * 3 + 1);
    if(argMoveId == 1){
    return 'kamień';
    } else if (argMoveId == 2){
        return 'papier';
    } else if (argMoveId == 3){
        return 'nożyce';
    } else if (argMoveId == 4){
        return getMoveName(randomNumberPlayer);
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    if( argComputerMove == argPlayerMove){
        drawScore++
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

function notFair(playerRandomMove){
    let mathRanNotFair = Math.random();
    if (playerRandomMove == 'kamień'){
        console.log(mathRanNotFair)
        if (mathRanNotFair < 0.25){
            computerMove = 'papier';
            console.log(computerMove, playerRandomMove);
        } else {
            const tab = ['kamień', 'nożyce'];
            const item = tab[Math.floor(Math.random() * tab.length)];
            console.log(item)
            computerMove = item;
            console.log(computerMove, playerRandomMove);
        }
        console.log(computerMove, playerRandomMove);
        return displayResult(computerMove, playerRandomMove);
    } else if (playerRandomMove == 'papier'){
        if (mathRanNotFair < 0.25){
            computerMove = 'nożyce';
        } else {
            const tab2 = ['kamień', 'papier'];
            const item2 = tab2[Math.floor(Math.random() * tab2.length)];
            computerMove = item2;
        }
        console.log(mathRanNotFair);
        console.log(computerMove, playerRandomMove);
        return displayResult(computerMove, playerRandomMove);
    }   else {
        if (mathRanNotFair < 0.25){
            computerMove = 'kamień';
        } else {
            const tab3 = ['papier', 'nożyce'];
            const item3 = tab3[Math.floor(Math.random() * tab3.length)];
            computerMove = item3;
        }
        console.log(mathRanNotFair);
        console.log(computerMove, playerRandomMove);
        return displayResult(computerMove, playerRandomMove);
    }
}

function playGame(playerInput) {
    clearMessages();
/* 
    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        } else if (argMoveId == 2){
            return 'papier';
        } else if (argMoveId == 3){
            return 'nożyce';
        } else if (argMoveId == 4){
            return getMoveName(randomNumberPlayer);
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    } */

/*     function displayResult(argComputerMove, argPlayerMove){
        console.log('moves:', argComputerMove, argPlayerMove);
        if( argComputerMove == argPlayerMove){
            drawScore++
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
    } */

/*     function notFair(playerMove){
        let mathRanNotFair = Math.random();
        if (playerMove == 'kamień'){
            console.log(mathRanNotFair)
            if (mathRanNotFair < 0.25){
                computerMove = 'papier';
                console.log(computerMove, playerMove);
            } else {
                (computerMove = 'kamień') || (computerMove = 'nożyce');
                console.log(computerMove, playerMove);
            }
            
            console.log(computerMove, playerMove);
            console.log('czy byles  w tej funkcji????')
            return displayResult(computerMove, playerMove);
        } else if (playerMove == 2){
            if (mathRanNotFair < 0.25){
                computerMove = 3;
            } else {
                (computerMove = 1)|| (computerMove = 2);
            }
            console.log(mathRanNotFair)
            console.log(computerMove, playerMove);
            console.log('czy byles w tej fun3kcji????')
            return displayResult(computerMove, playerMove);
        }   else {
            if (mathRanNotFair < 0.25){
                computerMove == 1;
            } else {
                (computerMove == 3 || computerMove == 2);
            }
            console.log(mathRanNotFair)
            console.log(computerMove, playerMove);
            console.log('czy byles w tej funkcji2????')
            return displayResult(computerMove, playerMove);
        }
    }  */
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    // let randomNumberPlayer = Math.floor(Math.random() * 3 + 1);
    

    console.log('Wylosowana liczba to: ' + randomNumber);
    /*let*/ computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);
    printMessage(displayResult(computerMove,playerMove));
    //printMessage(notFair(playerMove));
    
    printResult();
}

function printResult (){
    clearMessages2();
    printMessage2('Wynik komputera : ' + computerScore);
    printMessage2('Twój wynik : ' + playerScore);
    printMessage2('Remis : ' + drawScore);
    console.log('wywolanie test');
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
    for(let i=0; i<10;){;
    notFair(getMoveName(4))
    printResult();
    i++;}
});
