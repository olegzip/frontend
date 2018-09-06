let num = +prompt("ENTER NUMBER:", 0);

function factorial(x) {
    return x ? x * factorial(x - 1) : 1;
}

document.getElementById('one').innerText = `Factorial of ${num} is ${factorial(num)}`;