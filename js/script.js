const input=document.querySelector(".input p");
const output=document.querySelector(".output p");
const buttons=document.querySelectorAll('.button');
buttons.forEach(
    button=> button.addEventListener('click',buttonClick)
)

function buttonClick(e){
    const buttonText=e.srcElement.innerText;
    if(!["AC","DEL","="].includes(buttonText)){
        input.innerText+=buttonText;
    }
    else if(buttonText=="AC"){
        input.innerText="";
        output.innerText="";
    }
    else if(buttonText=="DEL"){
        input.innerText=input.innerText.slice(0,-1);
    }
    else{
        output.innerText="";
        try {
            const answer=eval(input.innerText);
            input.innerText="";
            output.innerText=Math.round(answer*100)/100;            
        } catch (error) {
            output.innerText="INVALID EXPRESSION"; 
        }
    }
}

function add(firstNumber,secondNumber){
    return firstNumber+secondNumber;
}

function subtract(firstNumber,secondNumber){
    return firstNumber-secondNumber;
}

function multiply(firstNumber,secondNumber){
    return firstNumber*secondNumber;
}

function divide(firstNumber,secondNumber){
    return firstNumber/secondNumber;
}