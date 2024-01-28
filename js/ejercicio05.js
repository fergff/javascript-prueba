const tablero = document.getElementById('tablero');

// Crea el tablero con botones
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const celda = document.createElement('button');
        celda.classList.add('celda');
        celda.dataset.row = i;
        celda.dataset.col = j;
        tablero.appendChild(celda);
    }
}
const celdas = document.querySelectorAll('.celda');
//celda clikarla
celdas.forEach(celda => {
    celda.addEventListener('click', () => {
        
        alert("Celda clicada:"+ celda.dataset.row +" "+ celda.dataset.col);
    });
});


const minas = new Array(8);

// Inicializa el array bidimensional
for (let i = 0; i < 8; i++) {
    minas[i] = new Array(8);
}

// Rellena el array con valores aleatorios
for (let j = 0; j < 8; j++) {
    let random1 = Math.floor(Math.random() * 8);
    let random2 = Math.floor(Math.random() * 8);
    if (minas[random1][random2] === "*") {
        j--; // Si ya hay una mina en esta posición, intenta de nuevo
    } else {
        minas[random1][random2] = "*";
    }
}

// PARA VER LAS MINAS
for (let k = 0; k < minas.length; k++) {
    for (let l = 0; l < minas[k].length; l++) {
        if (minas[k][l] === "*") {
            const boton = document.querySelector(`button[data-row="${l}"][data-col="${k}"]`);
            boton.textContent = "*";
        }
    }
}