const newGame = document.getElementById("new-game");

const submitSum = document.getElementById("submit-sum")
const submitDiff = document.getElementById("submit-diff")
const submitProd = document.getElementById("submit-prod")
const submitQ = document.getElementById("submit-div")

let addEnd = document.getElementById("addend")
let subMin = document.getElementById("submin")
let Prod = document.getElementById("factor")
let Quo = document.getElementById("divi")

let firstNum = Math.floor(Math.random() * 25);
let secondNum = Math.floor(Math.random() * 20);
let thirdNum = Math.floor(Math.random() * 15);
let fourthNum = Math.floor(Math.random() * 10);
let fifthNum = Math.floor(Math.random() * 5);

newGame.addEventListener('click', function () {
    addEnd.textContent = firstNum + " + " + secondNum;
})

submitSum.addEventListener('click', function () {
    let correctAnswer = firstNum + secondNum
    let inputSum = document.getElementById("sum").value
    if (correctAnswer.toString() === inputSum) {
        alert("CORRECT")
        findDiff()
    } else {
        alert(`WRONG the correct answer is ${correctAnswer}`)
    }
})

function findDiff() {
    let correctAnswer = firstNum + secondNum
    correctAnswer = "SUM"
    subMin.textContent = correctAnswer + " - " + thirdNum
}

submitDiff.addEventListener('click', function () {
    let correctAnswer = firstNum + secondNum
    let correctDiff = correctAnswer - thirdNum
    let inputDiff = document.getElementById("difference").value
    if (correctDiff.toString() === inputDiff) {
        alert("CORRECT")
        findProd()
    } else {
        alert(`WRONG the correct answer is ${correctDiff}`)
    }
})

function findProd() {
    let correctAnswer = firstNum + secondNum
    let correctDiff = correctAnswer - thirdNum
    correctDiff = "DIFF"
    Prod.textContent = correctDiff + " x " + fourthNum
}

submitProd.addEventListener('click', function () {
    let correctAnswer = firstNum + secondNum
    let correctDiff = correctAnswer - thirdNum
    let correctProd = correctDiff * fourthNum
    let inputProd = document.getElementById("product").value
    if (correctProd.toString() === inputProd) {
        alert("CORRECT")
        findQ()
    } else {
        alert(`WRONG the correct answer is ${correctProd}`)
    }
})

function findQ() {
    let correctAnswer = firstNum + secondNum
    let correctDiff = correctAnswer - thirdNum
    let correctProd = correctDiff * fourthNum
    correctProd = "PROD"
    Quo.textContent = correctProd + " / " + fifthNum
}

submitQ.addEventListener('click', function () {
    let correctAnswer = firstNum + secondNum
    let correctDiff = correctAnswer - thirdNum
    let correctProd = correctDiff * fourthNum
    let correctQuo = correctProd / fifthNum
    let inputQuo = document.getElementById("quotient").value
    if (correctQuo.toString() === inputQuo) {
        alert("CORRECT")
    } else {
        alert(`WRONG the correct answer is ${correctQuo}`)
    }
})

