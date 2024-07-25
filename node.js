function operaçãoDiMath(num1, num2, callback) {
    return callback(num1, num2);
}


function soma(x, y) {
    return x + y;
}

function subtracao(x, y) {
    return x - y;
}

function multiplicacao(x, y) {
    return x * y;
}


console.log(operaçãoDiMath(5, 3, soma));
console.log(operaçãoDiMath(10, 7, subtracao));
console.log(operaçãoDiMath(4, 6, multiplicacao));
