let firstOperand = '';
let secondOPerand = '';
let Operation = null;
let resetScreen = false;

const currentScreen = document.querySelector(".currentScreen");
const previousScreen = document.querySelector(".previousScreen");
const numBtn = document.querySelectorAll(".btn_num");
const eraseBtn = document.querySelector(".btn_erase");
const OpBtns = document.querySelectorAll(".btn_op")
const equalBtn = document.querySelector("#btn_equal");
const clearBtn = document.querySelector(".btn_clear");
const pointBtn = document.querySelector(".btn_point");

eraseBtn.addEventListener('click',erase);
equalBtn.addEventListener('click',evaluate);
clearBtn.addEventListener('click',clearScreen);
pointBtn.addEventListener('click',appendPoint)

numBtn.forEach((btn)=>{
  btn.addEventListener('click',()=>appendNum(btn.value));
});

OpBtns.forEach((btn)=>{
  btn.addEventListener('click',()=>SelectOp(btn.textContent));
})

function appendNum(number){
  if(currentScreen.textContent === "0" || resetScreen )reset();
  currentScreen.textContent += number;
}
function reset(){
  currentScreen.textContent = '';
  resetScreen = false;
}

function appendPoint(){
  if( resetScreen)return;
  if(currentScreen.textContent ==='')
    currentScreen.textContent = "0";
  if(currentScreen.textContent.includes('.'))return;
  currentScreen.textContent += ".";
}

function erase(){
  currentScreen.textContent = currentScreen.textContent.
  toString()
  .slice(0,-1);
}

function SelectOp(operator){
  if(Operation !== null)evaluate();
  firstOperand = currentScreen.textContent;
  Operation = operator;
  previousScreen.textContent = `${firstOperand}${Operation}`;
  reset(); 
}

function evaluate(){
  if(Operation === null || resetScreen) return;
  if(Operation === "/" && currentScreen.textContent === "0"){
    alert("Cannot divde by 0");
    return;
  }
  secondOPerand = currentScreen.textContent;
  currentScreen.textContent = roundedResult(operate(Operation,firstOperand,secondOPerand));
  previousScreen.textContent = `${firstOperand}${Operation}${secondOPerand}`;
  Operation = null;
}

function roundedResult(result){
  return Math.floor(result*1000)/1000;
}

function clearScreen(){
  currentScreen.textContent = '0';
  previousScreen.textContent = '';
  firstOperand = '';
  secondOPerand = '';
  Operation = null;
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

function operate(Operator,a,b){
  if(Operator === "+"){
    return add(a,b);
  }
  else if(Operator === "-"){
    return substract(a,b);
  }
  else if(Operator === "*"){
    return multiply(a,b);
  }
  else{
    return divide(a,b);
  }
}