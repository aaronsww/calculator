let stack =  [];
let topValue = -1;
let first = 0;
let last = 0;


seven.addEventListener('click', () => push(7) );
four.addEventListener('click', () => push(4) );
one.addEventListener('click', () => push(1) );
zero.addEventListener('click', () => push(0) );
eight.addEventListener('click', () => push(8) );
five.addEventListener('click', () => push(5) );
two.addEventListener('click', () => push(2) );
decimal.addEventListener('click', () => push(".") );
nine.addEventListener('click', () => push(9) );
six.addEventListener('click', () => push(6) );
three.addEventListener('click', () => push(3) );

function push(value)
{
    if(value == ".")
        first=first + value;
    else
        first = first*10 + value;
    console.log(first)
}
