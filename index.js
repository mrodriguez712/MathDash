const newGame = document.getElementById("new-game");
const resetBtn = document.getElementById("reset-btn");

const submitSum = document.getElementById("submit-sum")
const submitDiff = document.getElementById("submit-diff")
const submitProd = document.getElementById("submit-prod")
const submitQ = document.getElementById("submit-div")

const addDisplay = document.getElementById("add")
const subDisplay = document.getElementById("sub")
const multiDisplay = document.getElementById("multi")
const diviDisplay = document.getElementById("divide")

let correctSum = document.getElementById("correct-sum")
let correctDifference = document.getElementById("correct-diff")
let correctProduct = document.getElementById("correct-prod")
let correctQuotient = document.getElementById("correct-quotient")

let addEnd = document.getElementById("addend")
let subMin = document.getElementById("submin")
let Prod = document.getElementById("factor")
let Quo = document.getElementById("divi")

function myFunction() {
    document.getElementById("submit-sum").style.display = "inline"
}

document.getElementById("sum").disabled = true
document.getElementById("submit-sum").style.display = "none"

resetBtn.style.display = "none"

newGame.addEventListener('click', function () {
    let firstNum = Math.floor(Math.random() * 20) + 1;
    let secondNum = Math.floor(Math.random() * 20) + 1;
    let thirdNum = Math.floor(Math.random() * 15) + 1;
    let fourthNum = Math.floor(Math.random() * 10) + 1;
    let fifthNum = Math.floor(Math.random() * 5) + 1;

    let inputSum = document.getElementById("sum")
    let inputDiff = document.getElementById("difference")
    let inputProd = document.getElementById("product")
    let inputQuo = document.getElementById("quotient")

    document.getElementById("add").style.display = "inline"
    document.getElementById("sum").disabled = false

    addEnd.textContent = `${firstNum} + ${secondNum}`;
    newGame.style.display = "none"
    submitSum.style.display = "none"

    inputSum.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("submit-sum").click()
        }
    })

    inputDiff.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("submit-diff").click()
        }
    })

    inputProd.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("submit-prod").click()
        }
    })

    inputQuo.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("submit-div").click()
        }
    })

    submitSum.addEventListener('click', function () {
        let correctAnswer = firstNum + secondNum
        let inputSum = document.getElementById("sum").value

        if (correctAnswer === Number(inputSum)) {
            correctSum.textContent = "CORRECT"
            addDisplay.style.display = "none"
            subDisplay.style.display = "inline"
            resetBtn.style.display = "none"
            findDiff()
        } else {
            correctSum.textContent = `WRONG the correct answer is ${correctAnswer}`
            document.getElementById("sum").disabled = true
            submitSum.style.display = "none"
            resetBtn.style.display = "inline"
            document.getElementById('timer-el').style.display = "inline"
            clearInterval(Interval);
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

        if (correctDiff === Number(inputDiff)) {
            correctDifference.textContent = "CORRECT"
            subDisplay.style.display = "none"
            multiDisplay.style.display = "inline"
            resetBtn.style.display = "none"
            findProd()
        }
        else {
            correctDifference.textContent = `WRONG the correct answer is ${correctDiff}`
            document.getElementById("difference").disabled = true
            submitDiff.style.display = "none"
            resetBtn.style.display = "inline"
            document.getElementById('timer-el').style.display = "inline"
            clearInterval(Interval);
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
        if (correctProd === Number(inputProd)) {
            correctProduct.textContent = "CORRECT"
            multiDisplay.style.display = "none"
            diviDisplay.style.display = "inline"
            resetBtn.style.display = "none"
            findQ()
        } else {
            correctProduct.textContent = `WRONG the correct answer is ${correctProd}`
            document.getElementById("product").disabled = true
            submitProd.style.display = "none"
            resetBtn.style.display = "inline"
            document.getElementById('timer-el').style.display = "inline"
            clearInterval(Interval);
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
        if (correctQuo.toFixed(2) === Number(inputQuo)) {
            correctQuotient.textContent = "CORRECT"
            document.getElementById("quotient").disabled = true
            resetBtn.style.display = "inline"
            document.getElementById('timer-el').style.display = "inline"
            clearInterval(Interval);
        } else {
            correctQuotient.textContent = `WRONG the correct answer is ${correctQuo}`
            document.getElementById("quotient").disabled = true
            submitQ.style.display = "none"
            resetBtn.style.display = "inline"
            document.getElementById('timer-el').style.display = "inline"
            clearInterval(Interval);
        }
    })

    // timer
//     var seconds = 00;
//     var tens = 00;
//     var minute = 00;
//     var appendTens = document.getElementById("tens")
//     var appendSeconds = document.getElementById("seconds")
//     var appendMinute = document.getElementById('minute');
//     var Interval;

//     function startTimer() {
//         tens++;

//         if (tens <= 9) {
//             appendTens.innerHTML = "0" + tens;
//         }

//         if (tens > 9) {
//             appendTens.innerHTML = tens;

//         }

//         if (tens > 99) {
//             console.log("seconds");
//             seconds++;
//             appendSeconds.innerHTML = "0" + seconds;
//             tens = 0;
//             appendTens.innerHTML = "0" + 0;
//         }

//         if (seconds > 9) {
//             appendSeconds.innerHTML = seconds;
//         }

//         if (seconds > 59) {
//             console.log("minute");
//             minute++;
//             appendMinute.innerHTML = "0" + minute;
//             tens = 0;
//             seconds = 0;
//             appendTens.innerHTML = "0" + 0;
//             appendSeconds.innerHTML = "0" + 0;
//         }
//     }

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);

    resetBtn.addEventListener('click', function () {
//         document.getElementById('timer-el').style.display = "none"
        
//         clearInterval(Interval);
//         tens = "00";
//         seconds = "00";
//         minute = "00";
//         appendTens.innerHTML = tens;
//         appendSeconds.innerHTML = seconds;
//         appendMinute.innerHTML = minute;

        resetBtn.style.display = "none"

        firstNum = Math.floor(Math.random() * 20) + 1;
        secondNum = Math.floor(Math.random() * 20) + 1;
        thirdNum = Math.floor(Math.random() * 15) + 1;
        fourthNum = Math.floor(Math.random() * 10) + 1;
        fifthNum = Math.floor(Math.random() * 5) + 1;

        newGame.style.display = "inline"

        addDisplay.style.display = "inline"
        subDisplay.style.display = "none"
        multiDisplay.style.display = "none"
        diviDisplay.style.display = "none"

        submitDiff.style.display = "inline"
        submitProd.style.display = "inline"
        submitQ.style.display = "inline"

        addEnd.textContent = "0 + 0"
        document.getElementById("sum").value = ""
        correctSum.textContent = "ADDITION"
        document.getElementById("sum").disabled = true

        subMin.textContent = "0 - 0"
        document.getElementById("difference").value = ""
        correctDifference.textContent = "SUBTRACTION"
        document.getElementById("difference").disabled = false

        Prod.textContent = "0 x 0"
        document.getElementById("product").value = ""
        correctProduct.textContent = "MULTIPLICATION"
        document.getElementById("product").disabled = false

        Quo.textContent = "0 / 0"
        document.getElementById("quotient").value = ""
        correctQuotient.textContent = "DIVISION"
        document.getElementById("quotient").disabled = false
    })
})

