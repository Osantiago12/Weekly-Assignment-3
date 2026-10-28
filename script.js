//planning to use math.random.
let r = document.getElementById("rock")
let p = document.getElementById("paper")
let s = document.getElementById("scissor")
let text = document.getElementById("result")
let pScore = document.getElementById("player")
let cScore = document.getElementById("AI")
let tScore = document.getElementById("tie")

const choices = ["r", "p", "s"]
let round = 1

let keepTrack = new Map([
    ["Player", { count: 0 }],
    ["Computer", { count: 0 }],
    ["ties", { count: 0 }]
])


function rock() {
    const random = Math.floor(Math.random() * choices.length)
    if (random == 0) {
        text.innerHTML = "Tie Game"
        keepTrack.get("ties").count++
        tScore.textContent = keepTrack.get("ties").count

    } else if (random == 1) {
        text.innerHTML = "You Lose..."
        keepTrack.get("Computer").count++
        cScore.textContent = keepTrack.get("ties").count

    } else if (random == 2) {
        text.innerHTML = "You Win!"
        keepTrack.get("Player").count++
        pScore.textContent = keepTrack.get("Player").count
    }
}


function paper() {
    const random = Math.floor(Math.random() * choices.length)
    if (random == 0) {
        text.innerHTML = "You Win!"
        keepTrack.get("Player").count++
        pScore.textContent = keepTrack.get("Player").count

    } else if (random == 1) {
        text.innerHTML = "Tie Game"
        keepTrack.get("ties").count++
        tScore.textContent = keepTrack.get("ties").count

    } else if (random == 2) {
        text.innerHTML = "You Lose..."
        keepTrack.get("Computer").count++
        cScore.textContent = keepTrack.get("ties").count

    }
}

function scissors() {
    const random = Math.floor(Math.random() * choices.length)
    if (random == 0) {
        text.innerHTML = "You Lose..."
        keepTrack.get("Computer").count++
        cScore.textContent = keepTrack.get("ties").count

    } else if (random == 1) {
        text.innerHTML = "You Win!"
        keepTrack.get("Player").count++
        pScore.textContent = keepTrack.get("Player").count

    } else if (random == 2) {
        text.innerHTML = "Tie Game"
        keepTrack.get("ties").count++
        tScore.textContent = keepTrack.get("ties").count
    }
}