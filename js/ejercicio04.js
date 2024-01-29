let secuencia = [];
let secuenciapulsada = [];
const colores = ['amarillo', 'azul', 'rojo', 'verde'];
let puntuacion = 0;
const puntaje = document.getElementById('puntaje');

var highScore = localStorage.getItem('highScoreSimon'); //obtener highscore
if (!highScore) highScore = 0;
document.getElementById("high").innerHTML= "High Score : "+highScore;

function empezar() { //pone todo a 0
    secuenciapulsada = [];
    secuencia=[];
    puntuacion=0;
    puntaje.innerHTML = puntuacion;
    generarSecuencia();
    document.getElementById("bempezar").disabled = true;
}

function generarSecuencia() { 
    const colorAleatorio = colores[Math.floor(Math.random() * 4)]; //genero un color aleatorio de la lista colores
    secuencia.push(colorAleatorio); // se lo meto a secuencia
    reproducirSecuencia(0); //reproduzco la secuencia de 0
}

async function reproducirSecuencia(index) {
    if (index < secuencia.length) {
        await parpadearColor(secuencia[index]);
        await esperar(500); // Espera 1 segundo despu�s de reproducir el color actual
        reproducirSecuencia(index + 1); // Llama a la funci�n recursivamente para reproducir el siguiente color
    }
}
function boton(idBoton) {
    parpadearColor(idBoton);
    secuenciapulsada.push(idBoton);
    if (secuencia.length === secuenciapulsada.length) { //cuando es igual el tama�o de las 2 secuencias comprueba
        comprobar();
    }
}

async function comprobar() {
    for (let i = 0; i < secuencia.length; i++) {
        if (secuencia[i] !== secuenciapulsada[i]) {// si no es igual
            document.getElementById("bempezar").disabled = false;
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
    if (puntuacion > highScore) { // si la puntacion el mas lato k highscore lo guardo
        highScore = puntuacion;
        localStorage.setItem('highScoreSimon', highScore);
        document.getElementById("high").innerHTML= "High Score : "+highScore; // le aztulizo el highscore
    }
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