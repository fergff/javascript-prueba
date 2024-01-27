let numero;
let parrafo = document.getElementById("parrafo");
let asteriscos = ""; 

function piramide() {
const numeroInput = document.getElementById("numeroInput").value;
numero = parseInt(numeroInput); // Guarda el número convertido a entero
asteriscos = ""; 

for (let i = 0; i < numero; i++) {
    for (let j = numero; j > i; j--) {
        asteriscos += "&nbsp;"; // Agrega espacios en blanco
    }
    for (let j = 0; j <= i; j++) { //ida piramide
        asteriscos += "*"; // Agrega asteriscos
    }
    for (let j = 0; j <= i-1; j++) { //vuelta piramide
        asteriscos += "*"; // Agrega asteriscos
    }
    asteriscos += "<br>"; // Agrega salto de línea
}

    parrafo.innerHTML = asteriscos;
}

function PiramideInv( borrar ) {
const numeroInput = document.getElementById("numeroInput").value;
numero = parseInt(numeroInput); // Guarda el número convertido a entero

if(!borrar)asteriscos = ""; 

for (let i = numero -1; i >= 0; i--) {
    for (let j = numero; j > i; j--) {
        asteriscos += "&nbsp;"; // Agrega espacios en blanco
    }
    for (let j = 0; j <= i; j++) { //ida piramide
        asteriscos += "*"; // Agrega asteriscos
    }
    for (let j = 0; j <= i-1; j++) { //vuelta piramide
        asteriscos += "*"; // Agrega asteriscos
    }
    asteriscos += "<br>"; // Agrega salto de línea
}

    parrafo.innerHTML = asteriscos;
}
