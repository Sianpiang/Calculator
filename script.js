const numBtns = document.querySelectorAll(".btn_num");
const display = document.querySelector(".currentone");
let shouldRestScreen = false;

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

function operate(op,a,b){
    if(op === "+"){
        return add(a,b);
    }
    else if(op === "-"){
        return substract(a,b);
    }
    else if(op === "*"){
        return multiply(a,b);
    }
    else{
        return divide(a,b);
    }
}

numBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>appendNumber(btn.value));    
})

function appendNumber(number){
    if(display.textContent === '0' || shouldRestScreen)clear();
    display.textContent += number;
}

function clear(){
    display.textContent = '';
    shouldRestScreen = false;
}