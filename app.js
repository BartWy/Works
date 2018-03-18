"use strict";
console.log('srp')


var playBoard;
const humPlay = 'O';
const aI ='X';
const vinComb= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

    const gamefield = document.querySelectorAll('.game-field');
    startGame();


    function startGame() {
        document.querySelector('.endgame').style.display='none';
        playBoard= Array.from(Array(9).keys());

    for(var i = 0; i<gamefield.length; i++){
    gamefield[i].innerText ='';
    gamefield[i].style.removeProperty('background-color');
    gamefield[i].addEventListener('click', turnClick, false);//tworze nasłuchiwacza zdarzeń Tworzy sie MouseEvent, wykorzystam do wyciągnięcia z niego id pola

    }
}
function turnClick(field) {
    turn(field.target.id, humPlay)

    console.log(field)
}
function turn(squareId, player) {
    playBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let winGame = winCheck(playBoard,player)
    if(winGame) gameOver(winGame)
}
function winCheck(board, player) {
    let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, [])
    console.log(board)
    let winGame = null;
    for (let [index, win] of vinComb.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1))
        {
            winGame = {index: index, player: player};
            break;
        }

    }
    return winGame;

}