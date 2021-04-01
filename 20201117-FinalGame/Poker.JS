document.body.width = innerWidth;
document.body.height = innerHeight;
const cont = document.querySelector(".cont-all");

const khung = document.querySelector(".khung");
const ctx = khung.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "gold";
ctx.moveTo(0, 0);
ctx.lineTo(khung.width, 0);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "gold";
ctx.lineWidth = 24;
ctx.moveTo(khung.width, 0);
ctx.lineTo(khung.width, khung.height);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "gold";
ctx.lineWidth = 2;
ctx.moveTo(khung.width, khung.height);
ctx.lineTo(0, khung.height);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "gold";
ctx.lineWidth = 24;
ctx.moveTo(0, khung.height);
ctx.lineTo(0, 0);
ctx.stroke();
let move = false;
let blind = 20;
let raisebet = 0;
let minraise = blind;
let calling = blind;

function drawgra(a) {
  // Find out raisebet
  raisebet = Math.floor(
    ((250 - a) / 250) * (players[3].money - 1)
  );
  if (raisebet <= calling + minraise - players[3].bet)
    raisebet = calling + minraise - players[3].bet;
  document.querySelector(".undercanvas").innerText = raisebet;

  if (a >= 250 - (raisebet / (players[3].money - 1)) * 250)
    a = 250 - (raisebet / (players[3].money - 1)) * 250;

  // Draw bar
  ctx.clearRect(0, 0, khung.width, khung.height);
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "gold";
  ctx.moveTo(0, 0);
  ctx.lineTo(khung.width, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "gold";
  ctx.lineWidth = 24;
  ctx.moveTo(khung.width, 0);
  ctx.lineTo(khung.width, khung.height);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "gold";
  ctx.lineWidth = 2;
  ctx.moveTo(khung.width, khung.height);
  ctx.lineTo(0, khung.height);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "gold";
  ctx.lineWidth = 24;
  ctx.moveTo(0, khung.height);
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(0, (a / 250) * khung.height);
  ctx.lineTo(khung.width, (a / 250) * khung.height);
  ctx.lineTo(khung.width, khung.height);
  ctx.lineTo(0, khung.height);
  ctx.lineTo(0, (a / 250) * khung.height);
  let gra = ctx.createLinearGradient(
    0,
    (a / 250) * khung.height,
    0,
    khung.height
  );
  gra.addColorStop(0, "red");
  gra.addColorStop(1, "yellow");
  ctx.fillStyle = gra;
  ctx.fill();
}

khung.addEventListener("mousedown", function (e) {
  if (players[3].money <= minraise + players[3].bet) drawgra(e.offsetY);
  move = !move;
});
khung.addEventListener("mousemove", function (e) {
  if (move) drawgra(e.offsetY);
});
khung.addEventListener("mouseup", function (e) {
  move = !move;
});

let symbols = ["S", "H", "D", "C"];
let usedcards = [];
let usedsymbols = [];
let usednumbers = [];
let char = [
  "bug",
  "daffy",
  "foghorn",
  "fudd",
  "lola",
  "porky",
  "sam",
  "sylvester",
  "tweety",
];
let charposition = [
  [4, 20],
  [37, 13],
  [65, 18],
  [78, 36.5],
  [78, 54],
  [65, 72],
  [37, 78],
  [4, 71],
];
let cardposition = [
  [23, 30],
  [37, 25],
  [53, 29],
  [58, 39],
  [58, 54],
  [53, 64],
  [37, 68],
  [23, 63],
];
let finalrank = [0, 0, 0, 0, 0, 0, 0, 0];
let ranktitle = [
  "Royal Straight Flush",
  "Straight Flush",
  "Four of a Kind",
  "Full House",
  "Flush",
  "Straight",
  "Three of a Kind",
  "Two Pair",
  "Pair",
  "High Card",
];
let statuses = ["Thinking", "Check", "Call", "Raise", "All-in", "Fold", "Out"];
let players = [
  {
    status: 0,
    bet: 0,
    money: 1000,
    number: [],
    symbol: [],
    result: 0,
    rank: 1,
  },
  {
    status: 0,
    bet: 0,
    money: 1000,
    number: [],
    symbol: [],
    result: 0,
    rank: 2,
  },
  {
    status: 0,
    bet: 0,
    money: 1000,
    number: [],
    symbol: [],
    result: 0,
    rank: 3,
  },
  {
    status: 0,
    bet: 0,
    money: 1000,
    number: [],
    symbol: [],
    result: 0,
    rank: 4,
  },
  {
    status: 0,
    bet: 0,
    money: 1000,
    number: [],
    symbol: [],
    result: 0,
    rank: 5,
  },
  {
    status: 0,
    bet: 0,
    money: 1000,
    number: [],
    symbol: [],
    result: 0,
    rank: 6,
  },
  {
    status: 0,
    bet: 0,
    money: 1000,
    number: [],
    symbol: [],
    result: 0,
    rank: 7,
  },
  {
    status: 0,
    bet: 0,
    money: 1000,
    number: [],
    symbol: [],
    result: 0,
    rank: 8,
  },
];

let statuscolor = [
  "#246bb3",
  "#97aa41",
  "#937de2",
  "#f00000",
  "#ff9e00",
  "#808080",
];

// Result of hands of all players
// Return hand of 5 cards
function check(a, b) {
  a.sort(function (m, n) {
    return n - m;
  });

  if (
    a[0] == a[1] + 1 &&
    a[1] == a[2] + 1 &&
    a[2] == a[3] + 1 &&
    a[3] == a[4] + 1
  )
    if (b[0] == b[1] && b[1] == b[2] && b[2] == b[3] && b[3] == b[4])
      if (a[0] == 14) return [1];
      else return [2, a[0]];

  if (a[0] == a[1] && a[1] == a[2] && a[2] == a[3] && a[3] != a[4])
    return [3, a[0], a[4]];
  if (a[0] != a[1] && a[1] == a[2] && a[2] == a[3] && a[3] == a[4])
    return [3, a[1], a[0]];

  if (a[0] == a[1] && a[1] != a[2] && a[2] == a[3] && a[3] == a[4])
    return [4, a[4], a[0]];
  if (a[0] == a[1] && a[1] == a[2] && a[2] != a[3] && a[3] == a[4])
    return [4, a[0], a[4]];

  if (b[0] == b[1] && b[1] == b[2] && b[2] == b[3] && b[3] == b[4])
    return [5, a[0], a[1], a[2], a[3], a[4]];

  if (
    a[0] == a[1] + 1 &&
    a[1] == a[2] + 1 &&
    a[2] == a[3] + 1 &&
    a[3] == a[4] + 1
  )
    return [6, a[0]];

  if (a[0] == a[1] && a[1] == a[2] && a[2] != a[3] && a[3] != a[4])
    return [7, a[0], a[3], a[4]];
  if (a[0] != a[1] && a[1] == a[2] && a[2] == a[3] && a[3] != a[4])
    return [7, a[1], a[0], a[4]];
  if (a[0] != a[1] && a[1] != a[2] && a[2] == a[3] && a[3] == a[4])
    return [7, a[2], a[0], a[1]];

  if (a[0] == a[1] && a[1] != a[2] && a[2] != a[3] && a[3] == a[4])
    return [8, a[0], a[3], a[2]];
  if (a[0] != a[1] && a[1] == a[2] && a[2] != a[3] && a[3] == a[4])
    return [8, a[1], a[3], a[0]];
  if (a[0] == a[1] && a[1] != a[2] && a[2] == a[3] && a[3] != a[4])
    return [8, a[0], a[2], a[4]];

  if (a[0] == a[1] && a[1] != a[2] && a[2] != a[3] && a[3] != a[4])
    return [9, a[0], a[2], a[3], a[4]];
  if (a[0] != a[1] && a[1] == a[2] && a[2] != a[3] && a[3] != a[4])
    return [9, a[1], a[0], a[3], a[4]];
  if (a[0] != a[1] && a[1] != a[2] && a[2] == a[3] && a[3] != a[4])
    return [9, a[2], a[0], a[1], a[4]];
  if (a[0] != a[1] && a[1] != a[2] && a[2] != a[3] && a[3] == a[4])
    return [9, a[3], a[0], a[1], a[2]];

  if (a[0] != a[1] && a[1] != a[2] && a[2] != a[3] && a[3] != a[4])
    return [10, a[0], a[1], a[2], a[3], a[4]];
}

// Compare 2 hands
function check2(a, b) {
  if (a[0] < b[0]) return true;
  if (a[0] == b[0]) {
    if (a[0] == 2 || a[0] == 6) {
      if (a[1] > b[1]) return true;
    } else if (a[0] == 3 || a[0] == 4) {
      if (a[1] > b[1]) return true;
      else if (a[1] == b[1] && a[2] > b[2]) return true;
    } else if (a[0] == 7 || a[0] == 8) {
      if (a[1] > b[1]) return true;
      else if (a[1] == b[1] && a[2] > b[2]) return true;
      else if (a[1] == b[1] && a[2] == b[2] && a[3] > b[3]) return true;
    } else if (a[0] == 9) {
      if (a[1] > b[1]) return true;
      else if (a[1] == b[1] && a[2] > b[2]) return true;
      else if (a[1] == b[1] && a[2] == b[2] && a[3] > b[3]) return true;
      else if (a[1] == b[1] && a[2] == b[2] && a[3] == b[3] && a[4] > b[4])
        return true;
    } else if (a[0] == 10 || a[0] == 5) {
      if (a[1] > b[1]) return true;
      else if (a[1] == b[1] && a[2] > b[2]) return true;
      else if (a[1] == b[1] && a[2] == b[2] && a[3] > b[3]) return true;
      else if (a[1] == b[1] && a[2] == b[2] && a[3] == b[3] && a[4] > b[4])
        return true;
      else if (
        a[1] == b[1] &&
        a[2] == b[2] &&
        a[3] == b[3] &&
        a[4] == b[4] &&
        a[5] > b[5]
      )
        return true;
    }
  }
  return false;
}

// Chose the best 5 of 7 cards
function rankcard() {
  for (let m = 0; m < 8; m++) {
    let finalans = [11];
    for (let i = 6; i >= 0; i--)
      for (let j = 0; j < i; j++) {
        let checkcardn = [];
        let checkcards = [];
        for (let n = 0; n < 7; n++) {
          if (n != i && n != j) {
            checkcardn.push(players[m].number[n]);
            checkcards.push(players[m].symbol[n]);
          }
        }
        let ans = check(checkcardn, checkcards);
        if (check2(ans, finalans)) finalans = Object.assign(ans);
      }
    players[m].result = Object.assign(finalans);
  }
}

// Order the rank of the all best-hands-of-players
function ordertherank() {
  for (let i = 0; i < 8; i++)
    for (let j = 0; j < 8; j++) {
      if (
        check2(players[i].result, players[j].result) &&
        players[i].rank > players[j].rank
      )
        [players[i].rank, players[j].rank] = [players[j].rank, players[i].rank];
      else if (
        check2(players[j].result, players[i].result) &&
        players[i].rank < players[j].rank
      )
        [players[i].rank, players[j].rank] = [players[j].rank, players[i].rank];
    }
  for (let i = 0; i < 8; i++)
    for (let j = 0; j < 8; j++)
      if (
        check2(players[i].result, players[j].result) == false &&
        check2(players[j].result, players[i].result) == false
      ) {
        players[i].rank = Math.min(players[i].rank, players[j].rank);
        players[j].rank = Math.min(players[i].rank, players[j].rank);
      }
  for (let i = 0; i < 8; i++) finalrank[players[i].rank - 1]++;
}

// Shuffle and give the final result
function random() {
  while (usedcards.length < 21) {
    let sym = symbols[Math.floor(Math.random() * 3)];
    let num = Math.floor(Math.random() * 13) + 2;
    let card = num + sym;
    if (usedcards.includes(card) == false) {
      usedcards.push(card);
      usedsymbols.push(sym);
      usednumbers.push(num);
    }
  }

  for (let i = 0; i < 8; i++) {
    players[i].number.push(usednumbers[5 + i * 2]);
    players[i].number.push(usednumbers[6 + i * 2]);
    players[i].symbol.push(usedsymbols[5 + i * 2]);
    players[i].symbol.push(usedsymbols[6 + i * 2]);
    for (let j = 0; j < 5; j++) {
      players[i].number.push(usednumbers[j]);
      players[i].symbol.push(usedsymbols[j]);
    }
  }

  rankcard();

  ordertherank();
}
random();

// Game flow
// Set the 5 main cards
function fivemaincards() {
  for (let i = 0; i < 5; i++) {
    cont.innerHTML += `
    <div class="card">
        <div class="inner">
            <div class="front">
                <img src="ima/cards/PNG/red_back.png">
            </div>
            <div class="back">
                <img src="ima/cards/PNG/${usedcards[i]}.png">
            </div>                
        </div>
    </div>
    `;
    document.querySelectorAll(".card")[i].classList.add("dealerhand");
    document.querySelectorAll(".card")[i].style.display = "none";
  }
}
fivemaincards();

// Set character images and their status
function render() {
  for (let i = 0; i < 8; i++) {
    cont.innerHTML += `
    <div class="char">
        <div class="hide"></div>
        <img src="ima/char/${char[i]}.png">               
    </div>
    <div class="status hide">
        <img src="ima/mark/${statuses[players[i].status]}.png">
        <span></span>
    </div>
    <div class="money">
            <img src="ima/chips.png">
            <button>1000</button>
    </div>
    <div class="player-bet hide betondeck${i + 1}">
        <img src="ima/chips.png">
        <span>1000</span>
    </div>
    `;
    document.querySelectorAll(".char")[i].style.top = `${charposition[i][0]}%`;
    document.querySelectorAll(".char")[i].style.left = `${charposition[i][1]}%`;
    document.querySelectorAll(".money")[i].style.top = `${
      charposition[i][0] + 12
    }%`;
    document.querySelectorAll(".money")[i].style.left = `${
      charposition[i][1] + 1.2
    }%`;
    document.querySelectorAll(".status")[i].style.top = `${
      charposition[i][0] - 3.5
    }%`;
    document.querySelectorAll(".status")[
      i
    ].style.left = `${charposition[i][1]}%`;
    document.querySelectorAll(".status span")[i].innerText =
      statuses[players[i].status];
    renderstatus(i, 0);
  }
}
render();

// Set cards of all players
function setcardsofplayers() {
  for (let i = 0; i < 8; i++) {
    cont.innerHTML += `
    <div class="card small1">
        <div class="inner">
            <div class="front">
                <img src="ima/cards/PNG/red_back.png">
            </div>
            <div class="back">
                <img src="ima/cards/PNG/${usedcards[i * 2 + 5]}.png">
            </div>                
        </div>
    </div>
    <div class="card small2">
        <div class="inner">
            <div class="front">
                <img src="ima/cards/PNG/red_back.png">
            </div>
            <div class="back">
                <img src="ima/cards/PNG/${usedcards[i * 2 + 6]}.png">
            </div>                
        </div>
    </div>
    `;
    document.querySelectorAll(".small1")[i].classList.add("deadlerhand");
    document.querySelectorAll(".small2")[i].classList.add("deadlerhand");
  }
}
setcardsofplayers();

// Give cards from dealer to players
let count = 0;
function cardstoplayers(p) {
  if (count < 16)
    setTimeout(function () {
      document
        .querySelectorAll(`.small${p < 8 ? 1 : 2}`)
        [`${p < 8 ? p : p - 8}`].classList.add(
          `onhand${p < 8 ? p + 1 : p - 7}${p < 8 ? 1 : 2}`
        );
      p++;
      if (p >= 16) p -= 16;
      count++;
      cardstoplayers(p);
    }, 200);
  else if (count == 16) {
    count = 0;
    document.querySelectorAll(".small1 .inner")[3].classList.add("flip");
    document.querySelectorAll(".small2 .inner")[3].classList.add("flip");
    setTimeout(() => {
      action(first);
    }, 500);
  }
}

// Give 5 main cards from dealer to deck
function cardstodeck(p) {
  setTimeout(function () {
    document.querySelectorAll(".card")[p].classList.add(`ondeck${p + 1}`);
    setTimeout(() => {
      for (let i = 0; i < 8; i++)
        if (players[i].status != 4 && players[i].status != 5) {
          document.querySelectorAll(".status")[i].classList.add("hide");
          renderstatus(i, 0);
        }
      document.querySelectorAll(".card .inner")[p].classList.add(`flip`);
    }, 600);
    if (p < 2) cardstodeck(p + 1);
  }, 200);
}

// Flip and show cards of players (in the showdown)
function flipfinal(p) {
  if (p < 8)
    if (p != 3)
      setTimeout(() => {
        document.querySelectorAll(".small1 .inner")[p].classList.add("flip");
        document.querySelectorAll(".small2 .inner")[p].classList.add("flip");
        flipfinal(p + 1);
      }, 1000);
    else flipfinal(p + 1);
}

// Raise bet
function betmore(a, b, c) {
  players[a].bet += b;
  players[a].money -= b;
  document.querySelectorAll(".player-bet")[a].classList.remove("hide");
  document.querySelectorAll(".player-bet span")[a].innerText = players[a].bet;
  document.querySelectorAll(".money button")[a].innerText = players[a].money;
}

// Players' action
let first = 0;
let countdone = 0;
let turn = 0;

function action(a) {
  if (countdone < 8) {
    if (players[a].status == 4 || players[a].status == 5) {
      if (countdone < 8 && a == 7) a = -1;
      action(a + 1);
    } else {
      document.querySelectorAll(".status")[a].classList.remove("hide");
      document.querySelectorAll(".status")[a].classList.add("bounce");
      if (a != 3)
        setTimeout(() => {
          let rds1 = Math.floor(Math.random() * 10) + 1;
          let rds = 2;
          if (rds1 < 3) rds = 5;
          else if (rds1 < 9) rds = 2;
          else if (rds1 < 11) rds = 3;
          else rds1 = 4;
          players[a].status = rds;

          // Process money/bet/raise
          if (calling - players[a].bet >= players[a].money && rds != 5) rds = 4;
          if (rds == 2) betmore(a, calling - players[a].bet);
          if (rds == 3)
            if (calling + minraise - players[a].bet >= players[a].money)
              rds = 4;
            else {
              let z = Math.floor((Math.random() * players[a].money) / 3);
              if (z < calling + minraise - players[a].bet)
                z = calling + minraise - players[a].bet;
              betmore(a, z);
              minraise = players[a].bet - calling;
              calling = players[a].bet;
              for (let i = 0; i < 8; i++)
                if (
                  players[i].status != 5 &&
                  players[i].status != 4 &&
                  i != a
                ) {
                  document.querySelectorAll(".status")[i].classList.add("hide");
                  renderstatus(i, 0);
                }
            }
          if (rds == 4) {
            if (players[a].money > calling + minraise - players[a].bet) {
              betmore(a, players[a].money);
              minraise = players[a].bet - calling;
              calling = players[a].bet;
              for (let i = 0; i < 8; i++)
                if (
                  players[i].status != 5 &&
                  players[i].status != 4 &&
                  i != a
                ) {
                  document.querySelectorAll(".status")[i].classList.add("hide");
                  renderstatus(i, 0);
                }
            } else if (players[a].money > calling - players[a].bet) {
              betmore(a, players[a].money);
              calling = players[a].bet;
              for (let i = 0; i < 8; i++)
                if (
                  players[i].status != 5 &&
                  players[i].status != 4 &&
                  i != a
                ) {
                  document.querySelectorAll(".status")[i].classList.add("hide");
                  renderstatus(i, 0);
                }
            } else betmore(a, players[a].money);
          }

          renderstatus(a, rds);
          countdone = 0;
          for (let i = 0; i < 8; i++) if (players[i].status != 0) countdone++;
          if (a == 7) a = -1;
          action(a + 1);
        }, 1500);
      else {
        if (players[a].money > calling - players[a].bet)
          document.querySelector(".call").classList.remove("blurbtn");
        document.querySelector(".fold").classList.remove("blurbtn");
        document.querySelector(".raise").classList.remove("blurbtn");
      }
    }
  } else if (countdone == 8) {
    if (turn == 0) {
      for (let i = 0; i < 3; i++)
        document.querySelectorAll(".card")[i].style.display = "block";
      cardstodeck(0);
      countdone = 0;
      for (let i = 0; i < 8; i++)
        if (players[i].status == 4 || players[i].status == 5) countdone++;
      if (countdone == 7) countdone++;
      setTimeout(() => {
        action(first);
      }, 2000);
      turn++;
    } else if (turn == 1) {
      document.querySelectorAll(".card")[3].style.display = "block";
      cardstodeck(3);
      countdone = 0;
      for (let i = 0; i < 8; i++)
        if (players[i].status == 4 || players[i].status == 5) countdone++;
      if (countdone == 7) countdone++;
      setTimeout(() => {
        action(first);
      }, 1500);
      turn++;
    } else if (turn == 2) {
      document.querySelectorAll(".card")[4].style.display = "block";
      cardstodeck(4);
      countdone = 0;
      for (let i = 0; i < 8; i++)
        if (players[i].status == 4 || players[i].status == 5) countdone++;
      if (countdone == 7) countdone++;
      setTimeout(() => {
        action(first);
      }, 1500);
      turn++;
    } else if (turn == 3) {
      countdone = 0;
      turn = 0;
      for (let i = 0; i < 8; i++) {
        document
          .querySelectorAll(".small1")
          [i].classList.add(`ondeck${i + 1}1`);
        document
          .querySelectorAll(".small2")
          [i].classList.add(`ondeck${i + 1}2`);
      }
      flipfinal(0);
    }
  }
}

// Change the status of all players
function renderstatus(a, b) {
  players[a].status = b;
  if (b == 5)
    document.querySelectorAll(".char div")[a].classList.remove("hide");
  document.querySelectorAll(".status span")[a].innerText = statuses[b];
  document.querySelectorAll(".status img")[
    a
  ].src = `ima/mark/${statuses[b]}.png`;
  if (b != 0)
    document.querySelectorAll(".status")[a].classList.remove("bounce");
  else document.querySelectorAll(".status")[a].classList.add("bounce");
  document.querySelectorAll(".status span")[
    a
  ].style.textShadow = `2px 2px 2px ${statuscolor[b]},
    -2px -2px 2px ${statuscolor[b]},
    2px -2px 2px ${statuscolor[b]},
    -2px 2px 2px ${statuscolor[b]},
    -2px 0px 2px ${statuscolor[b]},
    2px 0px 2px ${statuscolor[b]},
    0px 2px 2px ${statuscolor[b]},
    0px -2px 2px ${statuscolor[b]}
    `;
}

// Main player's action
function changestatus(id) {
  for (let i = 1; i < 6; i++)
    if (i == id) {
      document.querySelector(".khung").classList.add("hide");
      document.querySelector(".undercanvas").classList.add("hide");
      document.querySelector(".all-in").classList.add("hide");
      document.querySelector(".fold").classList.add("blurbtn");
      document.querySelector(".raise").classList.add("blurbtn");
      document.querySelector(".raise").classList.remove("hide");
      document.querySelector(".confirm").classList.add("blurbtn");
      document.querySelector(".confirm").classList.add("hide");
      document.querySelector(".call").classList.add("blurbtn");
      players[3].status = id;
      if (id == 3 || id == 4) {
        for (let j = 0; j < 8; j++)
          if (players[j].status != 5 && players[j].status != 4 && j != 3) {
            document.querySelectorAll(".status")[j].classList.add("hide");
            renderstatus(j, 0);
          }
      }
      if (id == 2) betmore(3, calling - players[3].bet);
      if (id == 3) {
        betmore(3, raisebet);
        minraise = players[3].bet - calling;
        calling = players[3].bet;
        for (let j = 0; j < 8; j++)
          if (players[j].status != 5 && players[j].status != 4 && j != 3) {
            document.querySelectorAll(".status")[j].classList.add("hide");
            renderstatus(j, 0);
          }
      }
      if (id == 4) {
        if (players[3].money > calling + minraise - players[3].bet) {
          betmore(3, players[3].money);
          minraise = players[3].bet - calling;
          calling = players[3].bet;
          for (let j = 0; j < 8; j++)
            if (players[j].status != 5 && players[j].status != 4 && j != 3) {
              document.querySelectorAll(".status")[j].classList.add("hide");
              renderstatus(j, 0);
            }
        } else if (players[3].money > calling - players[3].bet) {
          betmore(3, players[3].money);
          calling = players[3].bet;
          for (let j = 0; j < 8; j++)
            if (players[j].status != 5 && players[j].status != 4 && j != 3) {
              document.querySelectorAll(".status")[j].classList.add("hide");
              renderstatus(j, 0);
            }
        } else betmore(3, players[3].money);
      }
      raisebet = 0;
      drawgra(0);
      renderstatus(3, id);
      countdone = 0;
      for (let x = 0; x < 8; x++) if (players[x].status != 0) countdone++;
      action(4);
    }
}

// Raise button
document.querySelector(".raise button").addEventListener("click", function () {
  document.querySelector(".khung").classList.remove("hide");
  document.querySelector(".undercanvas").classList.remove("hide");
  document.querySelector(".all-in").classList.remove("hide");
  document.querySelector(".confirm").classList.remove("hide");
  if (players[3].money > calling + minraise - players[3].bet)
    document.querySelector(".confirm").classList.remove("blurbtn");
  document.querySelector(".raise").classList.add("hide");
});

// Start button (space)
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 32) {
    for (let i = 0; i < 8; i++) {
      renderstatus(i, 0);
    }
    betmore(first - 1 >= 0 ? first - 1 : first + 7, blind);
    betmore(first - 2 >= 0 ? first - 2 : first + 6, blind / 2);
    cardstoplayers(first);
  }
});

// document.addEventListener('keydown', function (e) {
//     if (e.keyCode == 49) {
//         for (let i = 0; i < 3; i++)
//             document.querySelectorAll('.card')[i].style.display = 'block'
//         cardstodeck(0)
//         countdone = 0
//         setTimeout(() => {
//             action(first)
//         }, 1200);
//     }
// })

// document.addEventListener('keydown', function (e) {
//     if (e.keyCode == 50) {
//         document.querySelectorAll('.card')[3].style.display = 'block'
//         cardstodeck(3)
//         countdone = 0
//         action(first)
//     }
// })

// document.addEventListener('keydown', function (e) {
//     if (e.keyCode == 51) {
//         document.querySelectorAll('.card')[4].style.display = 'block'
//         cardstodeck(4)
//         countdone = 0
//         action(first)
//     }
// })

// document.addEventListener('keydown', function (e) {
//     if (e.keyCode == 13) {
//         for (let i = 0; i < 8; i++) {
//             document.querySelectorAll('.small1')[i].classList.add(`ondeck${i + 1}1`)
//             document.querySelectorAll('.small2')[i].classList.add(`ondeck${i + 1}2`)
//         }
//         flipfinal(0)
//     }
// })
