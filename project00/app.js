function getNumber(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
}

function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

function expFunction() {
    var result = document.getElementById("result");
    result.value += Math.E;
}

function piFunction() {
    var result = document.getElementById("result");
    result.value += Math.PI;
}