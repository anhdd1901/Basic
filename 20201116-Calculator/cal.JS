let numinput = ['(', ')', '7', '8', '9', '%', '4', '5', '6', '*', '/', '1', '2', '3', '+', '-', '.', '0']

const enter = document.querySelector('.enter')
const turnaround = document.querySelector('.switch')
const del = document.querySelector('.del')
const sqrt = document.querySelector('.sqrt')
const clear = document.querySelector('.clear')
const theme = document.getElementById('toggle-handle')
const dauvao = document.querySelector('.c-ex')
const daura = document.querySelector('.c-result')

let calthis = ''
let showthis = ''

for (let i = 0; i < numinput.length; i++) {
    let numclick = document.querySelectorAll('.num-input')[i]
    numclick.addEventListener('click', function () {
        if (i == 9) showthis += '×'
        else if (i == 10) showthis += '÷'
        else showthis += numinput[i]
        calthis += numinput[i]
        dauvao.innerText = showthis
    })
}

del.addEventListener('click', function () {
    calthis = calthis.slice(0, calthis.length - 1)
    showthis = showthis.slice(0, calthis.length - 1)
    dauvao.innerText = showthis
})

clear.addEventListener('click', function () {
    calthis = ''
    showthis = ''
    dauvao.innerText = showthis
    daura.innerText = ''
})

turnaround.addEventListener('click', function () {
    if (daura.innerText == '' || daura.innerText == 'Error') daura.innerText = 'Error'
    else daura.innerText = daura.innerText * (-1)
})

sqrt.addEventListener('click', function () {
    if (daura.innerText == '' || daura.innerText == 'Error') daura.innerText = 'Error'
    else daura.innerText = Math.sqrt(daura.innerText).toFixed(2)
})

enter.addEventListener('click', function () {
    try { daura.innerText = eval(calthis).toFixed(2) }
    catch { daura.innerText = 'Error' }
})

let mau = [['2980B9', '2255A4', '1B308F', '241062', '44A9C4', '7AD9CA', 'fff', '414141', '464646'], ['333333', '262626', '202020', '1A1A1A', '4E4E4E', '858585', '223239', 'fff', 'bbd7e4']]

let tribute = ['--primary-color', '--bold-color', '--bolder-color', '--boldest-color', '--light-color', '--lighter-color', '--bg-color', '--text-color', '--bg-sub-color']

let change = 0;
console.log(typeof (getComputedStyle(document.body).getPropertyValue(tribute[0])))
console.log(typeof ('#' + mau[0][2]))

theme.addEventListener('click', function () {
    if (change == 0)
        for (let i = 0; i < tribute.length; i++)
            document.documentElement.style.setProperty(tribute[i], '#' + mau[0][i])
    else
        for (let i = 0; i < tribute.length; i++)
            document.documentElement.style.setProperty(tribute[i], '#' + mau[1][i])

    change = Math.abs(change - 1)
})