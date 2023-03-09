let firstNumber=0;
let secondNumber=0;
let opeartor="";
let isDecimalPressed=false;
const input=document.querySelector(".input p");
const output=document.querySelector(".output p");
const buttons=document.querySelectorAll('.button');
buttons.forEach(
    button=> button.addEventListener('click',buttonClick)
)

function buttonClick(e){
    const buttonText=e.srcElement.innerText;
    if(!["AC","DEL","="].includes(buttonText)){
        if(["+","-","*","/"].includes(buttonText)){  
            if(firstNumber==""){
                firstNumber=input.innerText;
                console.log(firstNumber);
            }
            else if(secondNumber==""){
                output.innerText="";
                secondNumber=input.innerText.slice(input.innerText.lastIndexOf(opeartor)+1);
                console.log(secondNumber);
                try {
                        let answer=opearte(opeartor,Number(firstNumber),Number(secondNumber));
                        if(answer=="Can't divide by zero"){
                            input.innerText="";
                            output.innerText=answer;
                            firstNumber="0";
                            secondNumber="";
                        }
                        else{
                            input.innerText=Math.round(answer*100)/100;
                            firstNumber=answer;
                            secondNumber="";
                        }          
                } 
                catch (error) {
                    console.log(error)
                    output.innerText="INVALID EXPRESSION"; 
                } 
            }
            opeartor=buttonText;
            isDecimalPressed=false;
            input.innerText+=buttonText;
        }
        else if(buttonText=="."){
            if(!isDecimalPressed){
                input.innerText+=buttonText;
                isDecimalPressed=true;
            }
        }
        else{
            input.innerText+=buttonText;
        }
    }
    else if(buttonText=="AC"){
        input.innerText="";
        output.innerText="";
        firstNumber=0;
        secondNumber=0;
        opeartor="";
        isDecimalPressed=false;
    }
    else if(buttonText=="DEL"){
        input.innerText=input.innerText.slice(0,-1);
    }
    else{
        output.innerText="";
        try {
            if(opeartor!=""){
                secondNumber=input.innerText.slice(input.innerText.lastIndexOf(opeartor)+1);
                input.innerText="";
                let answer=opearte(opeartor,Number(firstNumber),Number(secondNumber));
                firstNumber="";
                secondNumber="";
                opeartor="";
                if(answer=="Can't divide by zero"){
                    output.innerHTML=answer;
                }
                else{
                    output.innerText=Math.round(answer*100)/100;
                }   
            }           
        } catch (error) {
            console.log(error)
            output.innerText="INVALID EXPRESSION"; 
        }
        isDecimalPressed=false;
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
    if(secondNumber==0){
        return "Can't divide by zero";
    }
    else{
        return firstNumber/secondNumber;
    }
}

function opearte(opeartor,firstNumber,secondNumber){
    switch (opeartor) {
        case '+':
            return add(firstNumber,secondNumber)    
            break;
        case '-':
            return subtract(firstNumber,secondNumber)
            break;
        case '*':
            return multiply(firstNumber,secondNumber)
            break;
        case '/':
            return divide(firstNumber,secondNumber)
            break;
        default:
            break;
    }
}