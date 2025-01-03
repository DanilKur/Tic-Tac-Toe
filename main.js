const cells = document.querySelectorAll('.table td');
const title = document.getElementById('title');

let stat = {
    'x': 0,
    'o': 0,
    'd': 0
}

function isVictiry () {
    const combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    for(let combo of combos) {
        if (
            cells[combo[0]].innerHTML == cells[combo[1]].innerHTML &&
            cells[combo[1]].innerHTML == cells[combo[2]].innerHTML &&
            cells[combo[0]].innerHTML != ''
            ) 
            {
                return true;
            }
    }
    return false;
}
function tap (event) {
    if (cout % 2 == 0) {
        event.target.innerHTML = '<img src="/image/X.png" class="imgX" width="100px">';
    } else {
        event.target.innerHTML = '<img src="/image/O.png" class="imgO" width="100px">';
    }
    if (isVictiry()) {
        for (let cell of cells) {
            cell.removeEventListener('click', tap);
        }
        if (cout % 2 == 0) {
            stat['x']++;
            title.innerHTML = "Переміг гравець X";
            updateStat();
        } else {
            stat['o']++;
            title.innerHTML = "Переміг гравець О";
            updateStat();
        }
    } else if (cout == 8) {
        stat['d']++;
        title.innerHTML = "Нічия";
        updateStat();
    }
    cout++;
    event.target.removeEventListener('click', tap);
}



function startCame () {
    console.log(stat);
    title.innerHTML = "Давай зіграємо!";
    cout = 0;
    for (let cell of cells) {
        cell.innerHTML = '';
        cell.addEventListener('click', tap)
    }
}
startCame();


function updateStat () {
    document.getElementById('statX').innerHTML = stat['x'];
    document.getElementById('statO').innerHTML = stat['o'];
    document.getElementById('statD').innerHTML = stat['d'];
}