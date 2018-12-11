var operandoa;
var operandob;
var operacion;

function calc() {
    var pantalla = document.getElementById("pantalla");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var punto = document.getElementById("punto");
    var raiz = document.getElementById("raiz");

    uno.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "1";

    }

    dos.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "2";

    }

    tres.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "3";

    }

    cuatro.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "4";

    }

    cinco.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "5";

    }

    seis.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "6";

    }

    siete.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "7";

    }

    ocho.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "8";

    }

    nueve.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "9";

    }

    cero.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "0";

    }

    punto.onclick = function (e){
        pantalla.textContent = pantalla.textContent + ".";
    }

    reset.onclick = function (e) {
        resetear();

    }

    suma.onclick = function (e) {
        operandoa = pantalla.textContent;
        operacion = "+";
        limpiar();
    }

    resta.onclick = function (e) {
        operandoa = pantalla.textContent;
        operacion = "-";
        limpiar();
    }

    multiplicacion.onclick = function (e) {
        operandoa = pantalla.textContent;
        operacion = "*";
        limpiar();
    }

    division.onclick = function (e) {
        operandoa = pantalla.textContent;
        operacion = "/";
        limpiar();
    }

    igual.onclick = function (e) {
        operandob = pantalla.textContent;
        resolver();
    }

}

function limpiar() {
    pantalla.textContent = "";

}

function resetear() {
    pantalla.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    pantalla.textContent = res;
    operandoa = res;
}
