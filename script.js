const screen = document.querySelector('#screeninput');
const inputVal = screen.value;
const operators = document.querySelectorAll('.commongreen');

function put(value){
    if(value === 'AC')
    {
        screen.value = '';
        value='';
    }

    else if(value === 'DE')
    {
        value='';
        screen.value =screen.value.toString().slice(0,-1);
        
    }
    if(value === '=')
    {
        screen.value = eval(screen.value);
    }
    else
    {
        screen.value += value;
    }
};

