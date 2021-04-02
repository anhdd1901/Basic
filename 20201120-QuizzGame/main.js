let arr = [
    {
        ques: 'Which city is Capital of Viet Nam?',
        ans: 'Ha Noi',
    },
    {
        ques: 'What is PHP?',
        ans: 'A programming language',
    },
    {
        ques: 'What is your primary school?',
        ans: 'CVA',
    },
    {
        ques: 'What is this?',
        ans: 'That',
    }
]

const left = document.getElementById('prev')
const right = document.getElementById('next')
const show = document.getElementById('show')
const hide = document.getElementById('hide')
const clear = document.getElementById('clear')
const current = document.getElementById('current')
const container = document.getElementById('cards-container')
const question = document.getElementById('question')
const answer = document.getElementById('answer')
const addcard = document.getElementById('add-card')
const addcon = document.getElementById('add-container')

let curent = 0

function render(arr) {
    container.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        container.innerHTML += `
        <div class="card ${i == curent ? 'active' : ''}">
            <div class="inner-card">
                <div class="inner-card-front">
                    <p>
                        ${arr[i].ques}
                    </p>
                </div>
                <div class="inner-card-back">
                    <p>
                        ${arr[i].ans}
                    </p>
                </div>
            </div>
        </div>
    `
    }
    if (arr.length == 0)
        current.innerText = '0 / 0'
    else current.innerText = `${curent + 1} / ${arr.length}`
}

render(arr)

container.addEventListener('click', function () {
    let flip = document.querySelector('.active')
    flip.classList.toggle('show-answer')
})

right.addEventListener('click', function () {
    if (curent == arr.length - 1 || arr.length == 0) return
    else {
        curent++
        let moveleft = document.querySelector('.active')
        moveleft.classList.add('left')
        moveleft.classList.remove('active')
        moveleft.classList.remove('show-answer')
        moveleft.nextSibling.nextSibling.classList.remove('right')
        moveleft.nextSibling.nextSibling.classList.add('active')
        current.innerText = `${curent + 1} / ${arr.length}`
    }
})

left.addEventListener('click', function () {
    if (curent == 0 || arr.length == 0) return
    else {
        curent--
        let moveright = document.querySelector('.active')
        moveright.classList.add('right')
        moveright.classList.remove('active')
        moveright.classList.remove('show-answer')
        moveright.previousSibling.previousSibling.classList.remove('left')
        moveright.previousSibling.previousSibling.classList.add('active')
        current.innerText = `${curent + 1} / ${arr.length}`
    }
})

show.addEventListener('click', function () {
    question.value = ''
    answer.value = ''
    addcon.classList.add('show')
})

hide.addEventListener('click', function () {
    addcon.classList.remove('show')
})

addcard.addEventListener('click', function () {
    if (question.value == '' || answer.value == '') alert('Please input something !')
    else {
        arr.push({
            ques: question.value,
            ans: answer.value,
        })
        addcon.classList.remove('show')
        render(arr)
    }
})

clear.addEventListener('click', function () {
    arr = []
    render(arr)
})