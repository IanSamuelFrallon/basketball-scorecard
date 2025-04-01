
let number1 = 0
let number2 = 0
let scoreNumber1 = document.getElementById("score-num1")
let scoreNumber2 = document.getElementById("score-num2")
//let resetBtn = document.getElementById("reset-btn")


function add1() {
   scoreNumber1.textContent = number1 += 1
}

function add2() {
  scoreNumber1.textContent = number1 += 2
}

function add3() {
  scoreNumber1.textContent = number1 +=3
}


function add4() {
  scoreNumber2.textContent = number2 +=1
}

function add5() {
  scoreNumber2.textContent = number2 +=2
}

function add6() {
  scoreNumber2.textContent = number2 +=3
}

function resetBtn() {
  scoreNumber1.textContent = 0
  number1 = 0
  scoreNumber2.textContent = 0
  number2 = 0
  
}
