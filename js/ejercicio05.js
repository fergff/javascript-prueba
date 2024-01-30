const tablero = document.getElementById('tablero');
const minas = new Array(8).fill(null).map(() => new Array(8).fill(0));

var titulo = document.getElementById('busca');

// Coloca las minas de forma aleatoria
for (let i = 0; i < 9; i++) {
    const fila = Math.floor(Math.random() * 8);
    const columna = Math.floor(Math.random() * 8);
    minas[fila][columna] = '*';
}

// Crea el tablero con botones
for (let fila = 0; fila < 8; fila++) {
    for (let columna = 0; columna < 8; columna++) {
        const celda = document.createElement('button');
        celda.classList.add('celda');
        celda.dataset.fila = fila;
        celda.dataset.columna = columna;
        tablero.appendChild(celda);
    }
}

// Agrega el evento clic a cada celda
const celdas = document.querySelectorAll('.celda');
celdas.forEach(celda => {
    celda.addEventListener('click', () => {
        const fila = parseInt(celda.dataset.fila);
        const columna = parseInt(celda.dataset.columna);
        revisarCelda(fila, columna);
    });
});

// Función para revisar una celda
function revisarCelda(fila, columna) {
    const celda = document.querySelector(`[data-fila="${fila}"][data-columna="${columna}"]`);
    if (minas[fila][columna] === '*') {
        celda.textContent = '*';
        celda.classList.add('minas');
        titulo.innerHTML = "Perdiste, Mierdass";
        alert("BooooMMMM!!!");
    } else {
        const minasAdyacentes = contarMinasAdyacentes(fila, columna);
        if (minasAdyacentes > 0) {
            celda.textContent = minasAdyacentes;
            celda.classList.add('checked');
        } else {
            celda.classList.add('checked');
            revisarCeldasVecinas(fila, columna);
            const celdasRevisadas = document.querySelectorAll('.celda.checked').length;
            if (celdasRevisadas === 64 - 9) { // 64 es el total de celdas y 9 es el número de minas
                alert("¡Has ganado WINNNNNN!");
                titulo.innerHTML = "Ganaste";
            }
        }
    }
}

// Función para contar minas adyacentes a una celda
function contarMinasAdyacentes(fila, columna) {
    let minasAdyacentes = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const nuevaFila = fila + i;
            const nuevaColumna = columna + j;
            if (nuevaFila >= 0 && nuevaFila < 8 && nuevaColumna >= 0 && nuevaColumna < 8 && minas[nuevaFila][nuevaColumna] === '*') {
                minasAdyacentes++;
            }
        }
    }
    return minasAdyacentes;
}

// Función recursiva para revisar celdas vecinas sin minas adyacentes
function revisarCeldasVecinas(fila, columna) {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const nuevaFila = fila + i;
            const nuevaColumna = columna + j;
            if (nuevaFila >= 0 && nuevaFila < 8 && nuevaColumna >= 0 && nuevaColumna < 8) {
                const celda = document.querySelector(`[data-fila="${nuevaFila}"][data-columna="${nuevaColumna}"]`);
                if (!celda.classList.contains('checked')) {
                    revisarCelda(nuevaFila, nuevaColumna);
                }
            }
        }
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    window.location.reload();
}
