const buttons=document.querySelectorAll('button'); //getting the buttons
var screen=document.querySelector('.screen'); //getting the screen
buttons.forEach(button => {
    button.addEventListener('click',()=>{
    //Clear button
    if(button.innerText==="C"){
        clearDisplay();
    //Backspace button
    } else if(button.innerText==="backspace") {
        screen.value=screen.value.slice(0,-1);
    //Adding numbers & operands to screen
    } else {
        screen.value+=button.innerText;
        if (/\d+[+\-*/]\d+/.test(screen.value)) {
            screen.value = calculate();
        }
    }})    
});

// const operators="+-*/";
if (/\d+[+\-*/]\d+/.test(screen.value)) {
    screen.value = calculate();
}

//Clear Display function
function clearDisplay(){
    screen.value="";
};

//Calculate function
function calculate(){
    const exp=screen.value;
    const match = exp.match(/(\d+)([+\-*/])(\d+)/);
    if(!match) return "Error";

    const op1=Number(match[1]);
    const operator=match[2];
    const op2=Number(match[3]);

    return operate(op1,operator,op2);
};

//Functions to perform different operations
function add(op1,op2){ return op1+op2; };
function subtract(op1,op2){ return op1-op2; };
function multiply(op1,op2){ return op1*op2; };
function divide(op1,op2){ return op1/op2; };

//Operate function
function operate(op1,operator,op2){
    switch(operator){
        case "+": return add(op1,op2);
        case "-": return subtract(op1,op2);
        case "*": return multiply(op1,op2);
        case "/": return divide(op1,op2);
        default: return "Error";
    }
};