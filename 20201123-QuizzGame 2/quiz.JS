let arr = [
    {
        ques: 'What is this?',
        ans: ['This', 'That', 'These', 'Those'],
        right: 1,
        numberchecked: 0.5
    },
    {
        ques: 'What is this game?',
        ans: ['Dota', 'Fifa', 'Peak', 'Master'],
        right: 2,
        numberchecked: 0.5
    },
    {
        ques: 'What is your hero?',
        ans: ['Sniper', 'Legion Commander', 'Sladar', 'Necrophos'],
        right: 3,
        numberchecked: 0.5
    }
]

const question = document.querySelector('.quiz-question')
const answer = document.querySelector('.quiz-answer')
const progress = document.querySelector('.quiz-progress-bar')
const again = document.querySelector('.back-btn')
const results = document.querySelector('.quiz-results')
const bottom = document.querySelector('.quiz-bottom')
const prev = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn')
const back = document.querySelector('.back-btn')
const finish = document.querySelector('.finish-btn')
const now1 = document.getElementById('now1')

let now = 0
now1.innerText = `${now + 1} / ${arr.length}`

function render(arri) {
    question.innerHTML = ''
    answer.innerHTML = ''
    question.innerHTML = `<p>${arri.ques}</p>`
    for (let i = 0; i < arri.ans.length; i++) {
        if (i == arri.numberchecked)
            answer.innerHTML += `
        <div class="quiz-item">
            <input checked type="radio" id="a${i}" name="questiondetail" onclick="clicked(${i})">
            <label for="a${i}">
                <span></span>
                <p>${arri.ans[i]}</p>
            </label>
        </div>   
        `
        else
            answer.innerHTML += `
        <div class="quiz-item">
            <input type="radio" id="a${i}" name="questiondetail" onclick="clicked(${i})">
            <label for="a${i}">
                <span></span>
                <p>${arri.ans[i]}</p>
            </label>
        </div>   
        `
    }
}

render(arr[now])

function clicked(id) {
    for (let i = 0; i < answer.children.length; i++)
        answer.children[i].querySelector('input').checked = false
    for (let i = 0; i < answer.children.length; i++)
        if (i == id) {
            answer.children[i].querySelector('input').checked = true
            arr[now].numberchecked = i
        }
    next.classList.remove('disable')
    finish.classList.remove('disable')
}

next.addEventListener('click', function () {
    now++
    if (arr[now].numberchecked == 0.5) {
        next.classList.add('disable')
        finish.classList.add('disable')
    }
    else {
        next.classList.remove('disable')
        finish.classList.remove('disable')
    }    

    if (now == arr.length - 1) {
        next.style.display = 'none'
        finish.style.display = 'block'
    }
    else {
        next.style.display = 'block'
        finish.style.display = 'none'
    }
    render(arr[now])
    if (now != 0) prev.classList.remove('disable')
    now1.innerText = `${now +1} / ${arr.length}`
})

prev.addEventListener('click', function () {
    now--
    render(arr[now])
    if (now <= 0) prev.classList.add('disable')
    if (arr[now].numberchecked == 0.5) {
        next.classList.add('disable')
        finish.classList.add('disable')
    }
    else {
        next.classList.remove('disable')
        finish.classList.remove('disable')
    }    
    if (now == arr.length - 1) {
        next.style.display = 'none'
        finish.style.display = 'block'
    }
    else {
        next.style.display = 'block'
        finish.style.display = 'none'
    }
    now1.innerText = `${now +1} / ${arr.length}`
})

finish.addEventListener('click', function() {
    results.style.display = 'block'
    bottom.style.display = 'none'
    progress.style.display = 'none'
    let score = 0
    for (let i=0;i<arr.length;i++)
    if(arr[i].right==arr[i].numberchecked) score++
    results.children[0].children[1].innerHTML = `${score}`
})

again.addEventListener('click', function(){
    window.location.reload()
})