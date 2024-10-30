
let countEl = document.getElementById("count-el")
let countGEl = document.getElementById("countGuest-el")
let count = 0
let countG = 0

function incrementOne(){
    count += 1
    countEl.textContent = count
}

function incrementTwo(){
    count += 2
    countEl.textContent = count
}

function incrementThree(){
    count += 3
    countEl.textContent = count
}

function incrementGOne(){
    countG += 1
    countGEl.textContent = countG
}

function incrementGTwo(){
    countG += 2
    countGEl.textContent = countG
}

function incrementGThree(){
    countG += 3
    countGEl.textContent = countG
}

function newGame(){
    countEl.textContent = 0
    countGEl.textContent = 0
}