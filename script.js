const numBtns = document.querySelectorAll(".btn_num");
const display = document.querySelector(".current")
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
let value = "";
display.textContent = value;
numBtns.forEach(btn => {
    btn.addEventListener('click',()=>{
        value = btn.value;
        display.textContent += value; 
    })
});
