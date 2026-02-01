const buttons=document.querySelectorAll('button'); //getting the buttons
var screen=document.querySelector('.screen'); //getting the screen
buttons.forEach(button => {
    button.addEventListener('click',()=>{
    //Clear button
    if(button.innerText==="C"){
        clearDisplay();
    //Equal button
    } else if(button.innerText==="=") {
        try{
            var answer=calculate();
            screen.value=answer;
        } catch {
            screen.value="Error";
        }
    //Adding numbers & operands to screen
    } else {
        screen.value+=button.innerText;
    }})    
});

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
const operators="+-*/";

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