"use strict";



var playBoard;
const humPlay = 'O';
const aI ='X';

    const gamefield = document.querySelectorAll('.game-field');
    startGame();




    function startGame() {
        playBoard= [];

    for(var i = 0; i<gamefield.length; i++) {
        gamefield[i].addEventListener('click', turnClick, false);//tworze nasłuchiwacza zdarzeń Tworzy sie MouseEvent, wykorzystam do wyciągnięcia z niego id pola
    }



}
function turnClick(field) {
    playBoard.push(field.target.id);
    document.getElementById(field.target.id).innerText = humPlay;
    document.getElementById(playBoard[playBoard.length-1]).removeEventListener('click', turnClick, false)

    comp()

}
function comp() {
        var choseField =[]
        for(var i =0; i<playBoard.length; i++){

             choseField.push(playBoard[i])
        }

    switch (true) {

        case choseField[choseField.length - 1] == 'first':
            document.getElementById('fifth').innerText = aI;
            document.getElementById('fifth').removeEventListener('click', turnClick, false)
            break

        case choseField[choseField.length - 1] == 'second':
            document.getElementById('third').innerText = aI;
            document.getElementById('third').removeEventListener('click', turnClick, false);
            break

        case choseField[choseField.length - 1] == 'third':
            document.getElementById('second').innerText = aI;
            document.getElementById('second').removeEventListener('click', turnClick, false);
            break

        case choseField[choseField.length - 1] == 'fourth':
            document.getElementById('fifth').innerText = aI;
            document.getElementById('fifth').removeEventListener('click', turnClick, false);
            break

        case choseField[choseField.length - 1] == 'fifth':
            document.getElementById('sixth').innerText = aI;
            document.getElementById('sixth').removeEventListener('click', turnClick, false);
            break

        case choseField[choseField.length - 1] == 'sixth':
            document.getElementById('fourth').innerText = aI;
            document.getElementById('fourth').removeEventListener('click', turnClick, false);
            break
        case choseField[choseField.length - 1] == 'seventh':
            document.getElementById('nineth').innerText = aI;
            document.getElementById('nineth').removeEventListener('click', turnClick, false);
            break
        case choseField[choseField.length - 1] == 'eight':
            document.getElementById('seventh').innerText = aI;
            document.getElementById('seventh').removeEventListener('click', turnClick, false);
            break
        case choseField[choseField.length - 1] == 'nineth':
            document.getElementById('eight').innerText = aI;
            document.getElementById('eight').removeEventListener('click', turnClick, false);
            break








    }




}

