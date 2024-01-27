let secuencia = [];
let secuenciapulsada = [];
const colores = ['amarillo', 'azul', 'rojo', 'verde'];
let puntuacion = 0;
const puntaje = document.getElementById('puntaje');

function empezar() { //pone todo a 0
    secuenciapulsada = [];
    secuencia=[];
    puntuacion=0;
    puntaje.innerHTML = puntuacion;
    generarSecuencia();
}

function generarSecuencia() { 
    const colorAleatorio = colores[Math.floor(Math.random() * 4)]; //genero un color aleatorio de la lista colores
    secuencia.push(colorAleatorio); // se lo meto a secuencia
    reproducirSecuencia(0); //reproduzco la secuencia de 0
}

async function reproducirSecuencia(index) {
    if (index < secuencia.length) {
        await parpadearColor(secuencia[index]);
        await esperar(500); // Espera 1 segundo después de reproducir el color actual
        reproducirSecuencia(index + 1); // Llama a la función recursivamente para reproducir el siguiente color
    }
}
function boton(idBoton) {
    parpadearColor(idBoton);
    secuenciapulsada.push(idBoton);
    if (secuencia.length === secuenciapulsada.length) { //cuando es igual el tamaño de las 2 secuencias comprueba
        comprobar();
    }
}

async function comprobar() {
    for (let i = 0; i < secuencia.length; i++) {
        if (secuencia[i] !== secuenciapulsada[i]) {// si no es igual
            puntaje.innerHTML = "Simon Says";
            secuenciapulsada = [];
            puntuacion = 0;
            secuencia = [];
            return; // sale
        }
    }
    // Si la secuencia es correcta
    puntuacion++;
    puntaje.innerHTML = puntuacion;
    secuenciapulsada.length = 0; // Limpia la secuencia pulsada
    await esperar(300);
    generarSecuencia(); // Genera la siguiente secuencia
}

async function parpadearColor(idBoton) {
    const boton = document.getElementById(idBoton);
    boton.classList.add('oculto');
    await esperar(200);
    boton.classList.remove('oculto');
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}