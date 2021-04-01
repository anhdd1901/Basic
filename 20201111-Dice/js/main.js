const name0 = document.getElementById('name-0')
const name1 = document.getElementById('name-1')
const score0 = document.getElementById('score-0')
const score1 = document.getElementById('score-1')
const current0 = document.getElementById('current-0')
const current1 = document.getElementById('current-1')
const goal = document.getElementById('goal')
const dice1 = document.getElementById('dice-1')
const dice2 = document.getElementById('dice-2')
const failed = document.getElementById('failed-music')
const success = document.getElementById('success-music')
const victory = document.getElementById('victory-music')

let dicepoint = ['./img/dice-1.png', './img/dice-2.png', './img/dice-3.png', './img/dice-4.png', './img/dice-5.png', './img/dice-6.png']

let tempo = 0;
let count0 = 0;
let count1 = 0;
let turn = 0;
let goallie = 10;
score0.innerText = '0'
score1.innerText = '0'
current0.innerText = '0'
current1.innerText = '0'
goal.value = ''
name0.innerText = 'Player 1'
name1.innerText = 'Player 2'

function random() {
    let so1 = Math.floor(Math.random() * 6)
    let so2 = Math.floor(Math.random() * 6)
    return [so1, so2]
}

function newg() {
    score0.innerText = '0'
    score1.innerText = '0'
    current0.innerText = '0'
    current1.innerText = '0'
    goal.value = ''
    dice1.src = ''
    dice2.src = ''
    name0.parentNode.classList.add('active')
    name1.parentNode.classList.remove('active')
    name0.parentNode.classList.remove('winner')
    name1.parentNode.classList.remove('winner')
    name0.innerText = 'Player 1'
    name1.innerText = 'Player 2'
    tempo = 0
}

function changeturn() {
    turn = Math.abs(turn - 1)
    tempo = 0
    current0.innerText = '0'
    current1.innerText = '0'
    if (turn == 0) {
        name0.parentNode.classList.add('active')
        name1.parentNode.classList.remove('active')
    }
    else {
        name1.parentNode.classList.add('active')
        name0.parentNode.classList.remove('active')
    }
    failed.play()
}

function dicethem() {
    if (name0.innerText == 'WINNER'||name1.innerText == 'WINNER') return
    let res = random()
    dice1.src = dicepoint[res[0]]
    dice2.src = dicepoint[res[1]]
    tempo += res[0] + res[1] + 2
    if (res[0] == 0 || res[1] == 0) {
        changeturn()
        return
    }
    if (turn == 0) {
        current0.innerText = tempo
        success.play()
    }
    else {
        current1.innerText = tempo
        success.play()
    }
    console.log(goallie)
}

function savescore() {
    if (turn == 0) {
        count0 += tempo
        score0.innerText = count0
        tempo = 0
        current0.innerText = '0'
    }
    else {
        count1 += tempo
        score1.innerText = count1
        tempo = 0
        current1.innerText = '0'
    }

    if (count0 >= goallie) {
        name0.parentNode.classList.add('winner')
        name0.innerText = 'WINNER'
        victory.play()
    }
    else if (count1 >= goallie) {
        name1.parentNode.classList.add('winner')
        name1.innerText = 'WINNER'
        victory.play()
    }
}

function changegoal() {
    if (goal.value == '')
        goallie = 10
    else goallie = Number(goal.value)
}