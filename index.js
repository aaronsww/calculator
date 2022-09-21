let stack =  [];
let topValue = 0;
let first = 0;
let last = 0;
let operator = '';
let result = 0;
let flag = 0;

seven.addEventListener('click', () => push1(7) );
four.addEventListener('click', () => push1(4) );
one.addEventListener('click', () => push1(1) );
zero.addEventListener('click', () => push1(0) );
eight.addEventListener('click', () => push1(8) );
five.addEventListener('click', () => push1(5) );
two.addEventListener('click', () => push1(2) );
decimal.addEventListener('click', () => push1(".") );
nine.addEventListener('click', () => push1(9) );
six.addEventListener('click', () => push1(6) );
three.addEventListener('click', () => push1(3) );

reminder.addEventListener('click', () => push2("%"));
divide.addEventListener('click', () => push2("/"));
multiply.addEventListener('click', () =>  push2("*"));
subtract.addEventListener('click', () => push2("-"));
add.addEventListener('click', () => push2("+"));

equals.addEventListener('click', () => push2("="));
AC.addEventListener('click', () => location.reload());

const displayInput = document.querySelector('#displayInput');
const content = document.createElement('div');
content.textContent = 0
displayInput.appendChild(content)

function push1(value)
{
    if(topValue == 0)
    {
        if(value == ".")
            first=first + value;
        else
            first = first*10 + value;
        stack[0]= first;
        console.log(stack[topValue])
        domAdd()
    }
    if(topValue == 1)
    {
        if(value == ".")
            last=last + value;
        else
            last = last*10 + value;
        stack[1]= last;
        console.log(stack[topValue])
        domAdd2()
        flag = 1;
    }
}

function push2(op)
{
    if(flag == 1)
    {
        evaluate()
        domAdd()
    }
    topValue = 1;
    operator = op;
    console.log(operator)
    if(operator == "=")
        console.log(first)
}

function domAdd()
{
    content.textContent = first
    displayInput.appendChild(content);
}
function domAdd2()
{
    content.textContent = last
    displayInput.appendChild(content);
}

function evaluate()
{
    if(operator == "%")
    {
        result = first % last
        first = result
        last = 0
        console.log(first)
    }
    if(operator == "/")
    {
        result = first / last
        first = result
        last = 0
        console.log(first)
    }
    if(operator == "*")
    {
        result = first * last
        first = result
        last = 0
        console.log(first)
    }
    if(operator == "+")
    {
        result = first + last
        first = result
        last = 0
        console.log(first)
    }
    if(operator == "-")
    {
        result = first - last;
        first = result;
        last = 0
        console.log(first)
    }
}

 