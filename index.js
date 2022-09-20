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

function push1(value)
{
    if(topValue == 0)
    {
        if(value == ".")
            first=first + value;
        else
            first = first*10 + value;
        stack[topValue]= first;
        console.log(stack[topValue])
    }
    if(topValue == 1)
    {
        if(value == ".")
            last=last + value;
        else
            last = last*10 + value;
        stack[topValue]= last;
        console.log(stack[topValue])
        flag = 1;
    }
}

function push2(op)
{
    if(flag == 1)
        evaluate()
    topValue = 1;
    operator = op;
    console.log(operator)
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
