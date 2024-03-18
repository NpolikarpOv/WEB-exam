let gameArea = document.getElementById('game-area');
let move = 0;
const divGame = document.querySelectorAll('.game');
let winResult = [
    [0, 1, 3],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let result = '';
let contentWrapper = document.querySelector('.modal-bottom');
let modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal-top');
// проверка и прибавление единицы к move происходит после каждого клика, move переназначается после каждго клика!!!
gameArea.addEventListener('click', e => {
    if (e.target.className = 'game') {

        if (move % 2 === 0) {
            e.target.innerHTML = 'X'
        }
        else {
            e.target.innerHTML = 'O'
        }
        move++;
    }

    check();
})

function check() {
    for (i = 0; i < winResult.length; i++) { // Проходим по массиву winResult
        if (divGame[winResult[i][0]].innerHTML == 'X' && divGame[winResult[i][1]].innerHTML == 'X' && divGame[winResult[i][2]].innerHTML == 'X') { // проверяем массив winResult на выиграшные комбинации
            result = 'крестики';
            prepareResult(result);
        } else if (divGame[winResult[i][0]].innerHTML == 'O' && divGame[winResult[i][1]].innerHTML == 'O' && divGame[winResult[i][2]].innerHTML == 'O') {
            result = 'нолики';
            prepareResult(result);
        }
    }
}

const prepareResult = winner => {
    contentWrapper.innerHTML = `Победили ${winner}!`
    modal.style.display = 'block';
}

function closeModal () {
    modal.style.display = 'none';
    location.reload();
}

btnClose.addEventListener('click', function () {
    closeModal();
});