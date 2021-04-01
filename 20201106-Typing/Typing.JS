const string = 'Abaddon Alchemist Axe Beastmaster Brewmaster Bristleback Centaur Warrunner Chaos Knight Clockwerk Doom Dragon Knight Earth Spirit Earthshaker Elder Titan Huskar Io Kunkka Legion Commander Lifestealer Lycan Magnus Mars Night Stalker Omniknight Phoenix Pudge Sand King Slardar Snapfire Spirit Breaker Sven Tidehunter Timbersaw Tiny Treant Protector Tusk Underlord Undying Wraith King Anti Mage Arc Warden Bloodseeker Bounty Hunter Broodmother Clinkz Drow Ranger Ember Spirit Faceless Void Gyrocopter Juggernaut Lone Druid Luna Medusa Meepo Mirana Monkey King Morphling Naga Siren Nyx Assassin Pangolier Phantom Assassin Phantom Lancer Razor Riki Shadow Fiend Slark Sniper Spectre Templar Assassin Terrorblade Troll Warlord Ursa Vengeful Spirit Venomancer Viper Weaver Ancient Apparition Bane Batrider Chen Crystal Maiden Dark Seer Dark Willow Dazzle Death Prophet Disruptor Enchantress Enigma Grimstroke Invoker Jakiro Keeper of the Light Leshrac Lich Lina Lion Nature Prophet Necrophos Ogre Magi Oracle Outworld Devourer Puck Pugna Queen of Pain Rubick Shadow Demon Shadow Shaman Silencer Skywrath Mage Storm Spirit Techies Tinker Visage Void Spirit Warlock Windranger Winter Wyvern Witch Doctor Zeus'
const arr = string.split(" ")

function random() {
    return arr[Math.floor(Math.random() * 166)]
}

const word = document.getElementById('word')
const typed = document.getElementById('typed')
const time = document.getElementById('time')
const score = document.getElementById('score')
const role = document.getElementById('role')
const result = document.getElementById('result')

console.log(typed.value)

word.innerText = random()

let count = 0
score.innerText = `Score: ${count}`

function startgame() {
    document.querySelector('.start').style.display = 'none'
    document.querySelector('.playing').style.display = 'flex'

    for (let i = 0; i < 3; i++)
        if (arrselect[i][0] == role.value) {
            countdown = arrselect[i][1]
            extra = arrselect[i][2]
        }

    score.innerText = `Score: ${count}`
    time.innerText = `Time: ${countdown}`
    let interval = setInterval(function () {
        countdown--
        time.innerText = `Time: ${countdown}`
        if (countdown <= 0) {
            clearInterval(interval)
            endgame()
        }
    }, 1000)
    
    typed.value = ''
    word.innerText = random()
    word.style.color = 'white'
}

let countdown = 0
let extra = 0
time.innerText = `Time: ${countdown}`

function play() {
    if (typed.value != word.innerText) {
        word.style.color = 'red'
    }
    else {
        word.innerText = random()
        typed.value = ''
        count++
        score.innerText = `Score: ${count}`
        countdown += extra
        word.style.color = 'white'
    }
}

let arrselect = [['Support', 30, 3], ['Offlane', 20, 2], ['Carry', 10, 1]]

function endgame() {
    document.querySelector('.playing').style.display = 'none'
    document.querySelector('.end').style.display = 'flex'
    result.innerText = `Your score is ${count}`
    count = 0
}

function replaygame() {
    document.querySelector('.end').style.display = 'none'
    document.querySelector('.start').style.display = 'flex'
}