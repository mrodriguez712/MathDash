const newGame = document.getElementById("new-game");
const resetBtn = document.getElementById("reset-btn");

function hideBtn() {
    newGame.style.display = "none"
}

newGame.addEventListener('click', function () {

    const submitSum = document.getElementById("submit-sum")
    const submitDiff = document.getElementById("submit-diff")
    const submitProd = document.getElementById("submit-prod")
    const submitQ = document.getElementById("submit-div")

    let addEnd = document.getElementById("addend")
    let subMin = document.getElementById("submin")
    let Prod = document.getElementById("factor")
    let Quo = document.getElementById("divi")

    let firstNum = Math.floor(Math.random() * 25) + 1;
    let secondNum = Math.floor(Math.random() * 25) + 1;
    let thirdNum = Math.floor(Math.random() * 20) + 1;
    let fourthNum = Math.floor(Math.random() * 15) + 1;
    let fifthNum = Math.floor(Math.random() * 10) + 1;

    let correctSum = document.getElementById("correct-sum")
    let correctDifference = document.getElementById("correct-diff")
    let correctProduct = document.getElementById("correct-prod")
    let correctQuotient = document.getElementById("correct-quotient")

    addEnd.textContent = `${firstNum} + ${secondNum}`;
    
    resetBtn.addEventListener('click', function() {
        newGame.style.display = "inline"
        firstNum = 0
        secondNum = 0
        thirdNum = 0
        fourthNum = 0
        fifthNum = 0

        addEnd.textContent = "0 + 0"
        document.getElementById("sum").value = ""
        correctSum.textContent = "ADDITION"
        document.getElementById("sum").disabled = false

        subMin.textContent = "0 + 0"
        document.getElementById("difference").value = ""
        correctDifference.textContent = "SUBTRACTION"
        document.getElementById("difference").disabled = false

        Prod.textContent = "0 + 0"
        document.getElementById("product").value = ""
        correctProduct.textContent = "MULTIPLICATION"
        document.getElementById("product").disabled = false

        Quo.textContent = "0 + 0"
        document.getElementById("quotient").value = ""
        correctQuotient.textContent = "DIVISION"
        document.getElementById("quotient").disabled = false
    })

    submitSum.addEventListener('click', function () {
        let correctAnswer = firstNum + secondNum
        let inputSum = document.getElementById("sum").value
        if (correctAnswer.toString() === inputSum) {
            correctSum.textContent = "CORRECT"
            findDiff()
        } else {
            correctSum.textContent = `WRONG the correct answer is ${correctAnswer}`
            document.getElementById("sum").disabled = true
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
            correctDifference.textContent = "CORRECT"
            findProd()
        } else {
            correctDifference.textContent = `WRONG the correct answer is ${correctDiff}`
            document.getElementById("difference").disabled = true
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
            correctProduct.textContent = "CORRECT"
            findQ()
        } else {
            correctProduct.textContent = `WRONG the correct answer is ${correctProd}`
            document.getElementById("product").disabled = true
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
        let correctQuo = Math.round(correctProd / fifthNum)
        let inputQuo = document.getElementById("quotient").value
        if (correctQuo.toString() === inputQuo) {
            correctQuotient.textContent = "CORRECT"
        } else {
            correctQuotient.textContent = `WRONG the correct answer is ${correctQuo}`
            document.getElementById("quotient").disabled = true
        }
    })

    hideBtn()

})
