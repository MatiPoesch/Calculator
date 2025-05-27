function add (a,b) {
    return a+b;
}
function sub (a,b) {
    return a-b;
}
function mult (a,b) {
    return a*b;
}
function divide(dividend,divisor) {
    if (divisor!=0) {
        return dividend/divisor;
    } else {
        return undefined;
    }
}
//OPERATE
let n1=undefined,
    n2=undefined,
    operator=undefined;
const operatorChars = ["+","-","*","/"];

function operate(number1,number2,operator) {
    switch (operator) {
        case '+': return(add(parseInt(number1),parseInt(number2)));
        case '-': return(sub(parseInt(number1),parseInt(number2)));
        case '*': return(mult(parseInt(number1),parseInt(number2)));
        case '/': return(divide(parseInt(number1),parseInt(number2)));
        
    }
}
function manageOperation(char) {
    if(char===undefined || char==='') {
        console.log("empty");
        return "!n2";
    }
    if (operatorChars.includes(char)) {
        if(operator!=undefined) {
            n1=manageOperation('=');
            n2=undefined;
            ndisplay='';
        }
        operator = char;
        return;
    }
    if (char=="=") {
        if(noUnsigned()) {
        let result = operate(n1,n2,operator)
        if(result==undefined) {
            clearDisplay();
            addToDisplay("Bro you dumb?");
            ndisplay='';
            n1=undefined;
            n2=undefined;
            operator=undefined;
            return;
        }
        result = result.toFixed(8);
        clearDisplay();
        addToDisplay(result);
        ndisplay='';
        n1=result;
        return n1;
        } else {
            addToDisplay("Add numbers bro..")
            ndisplay='';
            return;
        }
    }
    if (n1==undefined) {
        n1=char;
        return;
    } else if (n2==undefined) {
        n2=char;
        return;
    }

}
//NUMBERS
document.addEventListener("DOMContentLoaded",() => {
    const numberButtons = document.querySelector("#numberButtons");
    for(let i=0;i<=9;i++) {
        let button = document.createElement("button");
        button.textContent=i;
        button.addEventListener("click",() => {
            addToDisplay(i) 
        })
        numberButtons.appendChild(button);
    }
    //OPERATORS
    const operatorButtons = document.querySelector("#operatorButtons");
    operatorChars.forEach((char) => {
        let button = document.createElement("button");
        button.textContent=char;        
        button.addEventListener("click", () => {
            let aux = manageOperation(ndisplay);
            if(aux != "!n2") {

                ndisplay='';
                manageOperation(char)
            }
        })
        operatorButtons.appendChild(button);
    })

    const buttonEqual = document.createElement("button");
    buttonEqual.textContent='=';
    buttonEqual.addEventListener("click",() => {
        manageOperation(ndisplay);
        ndisplay='';
        manageOperation("=");

    })
    operatorButtons.appendChild(buttonEqual);

    const buttonClear = document.querySelector("#clearButton");
    buttonClear.addEventListener("click",() => {
        clearCalculator();
    })
})

let ndisplay = '';
function addToDisplay(char) {
    const displaySelect = document.querySelector("#display");
    ndisplay += char;
    displaySelect.textContent=ndisplay;
}
function clearDisplay() {
    const displayClear = document.querySelector("#display");
    displayClear.textContent='.';
}
function clearCalculator() {
    clearDisplay();
    ndisplay='';
    n1=undefined;
    n2=undefined;
    operator=undefined;
    
}
//return true if n1,n2 and operators are assigned
function noUnsigned() {
    if(n1==undefined || n2==undefined || operator==undefined) {
        return false;
    } 
    return true;

}