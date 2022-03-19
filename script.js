let firstOparend = "";
let secondOparend = "";
let currentOperation = null;
let shouldResetScreen = false;

const numBtn = document.querySelectorAll(".btn_num");
const currentDisplay = document.querySelector(".currentScreen");
const deleteBtn = document.querySelector(".btn_erase");
const operatorBtn = document.querySelectorAll(".btn_op");
const previousDisplay = document.querySelector(".previousScreen");
const equalBtn = document.querySelector("#btn_equal");
const clearBtn = document.querySelector(".btn_clear");
const pointBtn = document.querySelector(".btn_point");


deleteBtn.addEventListener('click', deleteNumber);
equalBtn.addEventListener('click', evaluate);
clearBtn.addEventListener('click', clearScreen);
pointBtn.addEventListener('click', appendPoint);

numBtn.forEach((btn)=>
    btn.addEventListener('click',()=>appendNumber(btn.value))
);
operatorBtn.forEach((btn)=>
    btn.addEventListener('click',()=> setOperation(btn.textContent))
);

function appendNumber(value){
    if(currentDisplay.textContent === "0" || shouldResetScreen )resetScreen();
    currentDisplay.textContent += value; 
}

function resetScreen(){
    currentDisplay.textContent = "";
    shouldResetScreen = false;
}

function deleteNumber(){
    currentDisplay.textContent = currentDisplay.textContent.toString().slice(0,-1);
}

function setOperation(operator){
    if(currentOperation !== null)evaluate();
    firstOparend = currentDisplay.textContent;
    currentOperation = operator;
    previousDisplay.textContent =`${firstOparend}${currentOperation}`;
    shouldResetScreen = true;
}
function appendPoint() {
  if (shouldResetScreen) resetScreen()
  if (currentDisplay.textContent === '')
    currentOperation.textContent = '0'
  if (currentDisplay.textContent.includes('.')) return
  currentDisplay.textContent += '.'
}


function evaluate() {
    if (currentOperation === null || shouldResetScreen) return;
    if (currentOperation === '/' && currentDisplay.textContent === '0') {
      alert("You can't divide by 0!")
      return
    }
    secondOparend = currentDisplay.textContent;
    currentDisplay.textContent = roundResult(operate(currentOperation, firstOparend, secondOparend));
    previousDisplay.textContent = `${firstOparend} ${currentOperation} ${secondOparend} =`;
    currentOperation = null;
    
  }
  function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }

  function clearScreen(){
    currentDisplay.textContent = "0";
    previousDisplay.textContent = "";
    firstOparend = "";
    secondOparend = "";
    currentOperation = null; 
  }

function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '-':
        return substract(a, b)
      case '*':
        return multiply(a, b)
      case '/':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
}