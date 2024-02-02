const screen = document.querySelector('#screeninput');
const inputVal = screen.value;
const operators = document.querySelectorAll('.commongreen');

function put(value){
    if(value === 'AC')
    {
        clearScreen();
    }

    else if(value === 'DE')
    {
        deleteLastCharacter();
    }

    else if(value === '=')
    {
        calculateResult();
    }

    else{
        appendCharacter(value);
    }
}

function clearScreen(){
    screen.value = '';
}

function deleteLastCharacter(){
    screen.value = screen.value.toString().slice(0,-1);
}

function appendCharacter(character){
    screen.value += character;
}

function calculateResult(){
    try{
        const result = evaluateResult(screen.value);
        screen.value = result;
    }
    catch(error){
        screen.value = 'Error: ' + error.message;
    }
}

function evaluateResult(expression){
    const tokens = expression.match(/(\d+|\+|\-|\*|\/)/g);
    const stack = [];
    let result = 0;
    let currentOperator = '+';

    tokens.forEach(token =>{
        if(/[\+|\-|\*|\/]/.test(token)){
            currentOperator = token;
        }

        else{
            const number = parseFloat(token);

            switch(currentOperator){
                case '+':
                    stack.push(number);
                    break;
                case '-':
                    stack.push(-number);
                    break;
                case '*':
                    stack.push(stack.pop()* number);
                    break;
                case '/':
                    stack.push(stack.pop() / number);
                    break;
            }
        }
    });

    while(stack.length > 0){
        result += stack.pop();
    }

    return result;
}








// ORIGINAL
// function put(value){
//     if(value === 'AC')
//     {
//         screen.value = '';
//         value='';
//     }

//     else if(value === 'DE')
//     {
//         value='';
//         screen.value =screen.value.toString().slice(0,-1);
        
//     }
//     if(value === '=')
//     {
//         screen.value = eval(screen.value);
//     }
//     else
//     {
//         screen.value += value;
//     }
// };

