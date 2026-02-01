const buttons=document.querySelectorAll('button');
var screen=document.querySelector('.screen');
var calculation;
buttons.forEach(button => {
    button.addEventListener('click',()=>{
    if(button.innerText==="C"){
        screen.value="";
    } else if(button.innerText==="=") {
        try{
            var answer=calculate();
        screen.value=answer;
        } catch {
            screen.value="Error";
        }
    } else {
        screen.value+=button.innerText;
    }})    
});
function clearDisplay(){
    screen.value="";
}
function calculate(){
    var answer=eval(screen.value);
    console.log(answer);
    return answer;
    
}
