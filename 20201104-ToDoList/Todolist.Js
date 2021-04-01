const filter = document.getElementById('filter')
const filterseclect = document.getElementById('filterseclect')
const searchbar = document.getElementById('searchbar')

filter.style.justifyContent = 'flex-end'


const addText = document.getElementById('addText')
addText.style.paddingLeft = '5px'
addText.style.height = '46px'
addText.style.width = '400px'

const title = document.getElementById('title')
title.style.width = '480px'
title.style.textAlign = 'center'

const addButton = document.getElementById('addButton')
addButton.style.height = '50px'
addButton.style.height = '50px'
addButton.style.marginLeft = '20px'

const all = document.getElementById('all')
all.style.height = '450px'
all.style.width = '550px'
all.style.justifyContent = 'flex-start'
all.style.alignContent = 'center'

document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
all.children[0].style.fontSize = '40px'
all.children[0].style.marginTop = '30px'
all.children[0].style.marginBottom = '10px'
all.children[0].style.fontWeight = '600'

const add = document.getElementById('add')
add.style.width = '480px'
filter.style.width = '480px'

let list = [
    {
        id: 1,
        update: false,
        filted: true,
        title: 'Work',
        status: false
    },
    {
        id: 2,
        update: false,
        filted: true,
        title: 'Learn',
        status: false
    },
    {
        id: 3,
        update: false,
        filted: true,
        title: 'Play',
        status: false
    }
]

if (localStorage.getItem('listitems')!=null){
list = JSON.parse(localStorage.getItem('listitems'))
}

const todolist = document.createElement('div')
all.appendChild(todolist)

const lastlist = document.createElement('div')
todolist.appendChild(lastlist)
lastlist.classList.add('can-doc-giua')
lastlist.style.alignItems = 'flex-start'
lastlist.style.width = '480px'

function renderUI(arr) {

    lastlist.innerHTML = ''

    if (arr.length == 0) {
        lastlist.innerHTML = '<p class="color"> Nothing here !!! </p>'
    }

    for (let i = 0; i < list.length; i++) {
        let t = arr[i]
        if (t.filted)
            lastlist.innerHTML += `
        <div class='can-ngang-giua bet ${t.update ? 'bethover' : ''}'>
            <div class='can-ngang-giua ${t.status ? 'done' : ''}'>
                <input class='clear space' type="checkbox" ${t.status ? 'checked' : ''} onclick='change(${t.id})'>
                <p class='color ${t.update ? 'hidden-update' : ''}'>${t.title}</p>
                <input style="color : black" id="${t.id}" onchange="updated(${t.id})" type="text" value="${t.title}" class="color input-update clear ${t.update ? '' : 'hidden-update'}"}>

            </div>
            <div class = 'can-ngang-giua button ${t.update ? 'showbutton' : ''}'>
                <button ${t.update ? 'style="background-color: #6FD262;"' : ''} class='clear1' onclick='update(${t.id})'><img src="icon/U.png"></button>
                <button ${t.update ? 'style="background-color: #6FD262;"' : ''} class='clear1' onclick='delToDo(${t.id})'><img src="icon/D.png"></button>
            </div>
        </div>
    `
    }
    localStorage.setItem('listitems', JSON.stringify(list))
}

lastlist.style.height = '240px'
lastlist.style.overflow = 'auto'
lastlist.style.justifyContent = 'flex-start'

renderUI(list)

function randomId() {
    let newId = Math.floor(Math.random() * 100000)
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == newId) randomId()
    }
    return newId
}

addButton.addEventListener('click', additem)

function additem () {
    if (addText.value == '') alert('Put something pls !!!')
    else {
        let more = {
            id: randomId(),
            update: false,
            filted: true,
            title: addText.value,
            status: false
        }
        list.push(more)
    }

    renderUI(list)
    addText.value = ''
}

function delToDo(idno) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == idno)
            list.splice(i, 1)
        console.log(list)
    }
    renderUI(list)
}

function change(idno) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == idno)
            list[i].status = !list[i].status
    }
    renderUI(list)
}

function update(idno) {
    for (let i = 0; i < list.length; i++)
        if (list[i].id == idno) {
            if (list[i].update) updated(list[i].id)
            else list[i].update = !list[i].update
        }
        else list[i].update = false
    renderUI(list)
}

function updated(idno) {
    for (let i = 0; i < list.length; i++)
        if (list[i].id == idno) {
            let updatedTitle = document.getElementById(list[i].id)
            list[i].title = updatedTitle.value
            list[i].update = !list[i].update
        }
    renderUI(list)
}

function search() {
    for (let i = 0; i < list.length; i++) {
        list[i].filted = false
        if (filterseclect.value == 'All') list[i].filted = true
        else if (filterseclect.value == 'Done') {
            if (list[i].status == true) list[i].filted = true
        }
        else {
            if (list[i].status == false) list[i].filted = true
        }
    }
    for (let i = 0; i < list.length; i++)
        if (list[i].filted)
            if (list[i].title.includes(searchbar.value) == false)
                list[i].filted = false
    renderUI(list)
}