let arrli = document.querySelectorAll('li')
const items = []
const popup = document.getElementById('popup1')
const scored = document.getElementById('score')
const timed = document.getElementById('timed')
const finalMove = document.getElementById('finalMove')
const totalTime = document.getElementById('totalTime')
const x = document.getElementById('x')
const htmlul = document.querySelector('ul')
const again = document.getElementById('play-again')
const refresh = document.querySelector('button')
for (let i = 0; i < arrli.length; i++)
    if (items.includes(arrli[i].type) == false)
        items.push(arrli[i].type)

let count = 0
let time = 0
let score = 0
let final = 0

function reset() {
    document.querySelector('ul').innerHTML = ''
    for (let i = 0; i < arrli.length; i++) {
        arrli[i].classList.remove('open')
        arrli[i].classList.remove('match')
        arrli[i].classList.remove('unmatched')
        arrli[i].classList.remove('disable')
    }
    let arrli1 = Array.from(Object.assign(arrli))
    arrli = []
    while (arrli.length != 16) {
        let x = Math.floor(Math.random() * arrli1.length)
        arrli.push(arrli1[x])
        arrli1.splice(x, 1)
    }
    for (let i = 0; i < arrli.length; i++)
        htmlul.appendChild(arrli[i])

    count = 0
    final = 0
    time = 0
    timed.innerText = `${Math.floor(time / 60)} mins ${time % 60} secs`
    score = 0
    scored.innerText = score
    popup.classList.remove('show')
}

reset()

function thoigian() {
    time++
    timed.innerText = `${Math.floor(time / 60)} mins ${time % 60} secs`
}

var countdown = setInterval(thoigian, 1000)

// let arr = [1,2,3,4,5,6,7,8,9,10]

// function random (arr) {
//     return arr.sort(function() {
//         return Math.random() - 0.5
//     })
// }

// random(arr)
// console.log(arr)

let playarr = document.querySelectorAll('li')

let check = []

for (let i = 0; i < playarr.length; i++) {
    playarr[i].addEventListener('click', function () {
        score++
        scored.innerText = score
        if (check.length < 2) {
            playarr[i].classList.add('open')
            playarr[i].classList.add('disable')
            check.push(playarr[i])
        }

        if (check.length == 2) {
            for (let j = 0; j < playarr.length; j++)
                playarr[j].classList.add('disable')
            if (check[1].type == check[0].type) {

                check[0].classList.remove('open')
                check[0].classList.add('match')
                check[1].classList.remove('open')
                check[1].classList.add('match')
                check = []
                for (let j = 0; j < playarr.length; j++)
                    if (playarr[j].classList.contains('match') == false)
                        playarr[j].classList.remove('disable')
                final++
            }
            else if (check[1].type != check[0].type) {
                check[0].classList.add('unmatched')
                check[1].classList.add('unmatched')
                setTimeout(function () {
                    check[0].classList.remove('open')
                    check[1].classList.remove('open')
                    check[0].classList.remove('disable')
                    check[1].classList.remove('disable')
                    check[0].classList.remove('unmatched')
                    check[1].classList.remove('unmatched')
                    for (let j = 0; j < playarr.length; j++)
                        if (playarr[j].classList.contains('match') == false)
                            playarr[j].classList.remove('disable')
                    check = []
                }, 750)
            }
        }

        if (final == 8) {
            finalMove.innerText = score
            totalTime.innerText = timed.innerText
            popup.classList.add('show')
            clearInterval(countdown)
        }
        console.log(final)
    })
}

x.addEventListener('click', function () {
    popup.classList.remove('show')
})

refresh.addEventListener('click', function () {
    clearInterval(countdown)
    reset()
    countdown = setInterval(thoigian, 1000)
})
again.addEventListener('click', function () {
    clearInterval(countdown)
    reset()
    countdown = setInterval(thoigian, 1000)
})