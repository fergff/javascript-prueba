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

celdas.forEach(celda => {
    celda.addEventListener('click', () => {
        
        alert("Celda clicada: " + celda.dataset.row + " " + celda.dataset.col);
        alert(celda);
        contarminas(celda , true);
        
    });
});

function contarminas(celda ,deprimeras){

    if (celda.classList.contains('checked')) { // para no hacer un bucle infinitoo
        return;
    }

    let col = parseInt(celda.dataset.row);
    let row = parseInt(celda.dataset.col);
    let contarminass = 0;
    let nohagas=true;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            // Check if neighboring cells exist
            if (row + i >= 0 && row + i < minas.length && col + j >= 0 && col + j < minas[0].length) {
                // Skip the current cell
                if (i === 0 && j === 0) {
                    if(minas[row][col] === "*"&& deprimeras){
                        alert("boooooom");
                        break;
                        
                    }else if(minas[row][col] === "*"&& !deprimeras){
                        nohagas=false;
                    }
                    
                    continue;
                }
                if (minas[row + i][col + j] === "*") {
                    contarminass++;
                }
            }
        }
    }
    if(nohagas){
        celda.innerHTML = contarminass;
        celda.classList.add('checked'); // marca la celda checked
    }
    

    if (contarminass === 0) {
        // If no mines are adjacent, recursively check neighboring cells
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (row + i >= 0 && row + i < minas.length && col + j >= 0 && col + j < minas[0].length) {
                    const boton = document.querySelector(`[data-row="${row + i}"][data-col="${col + j}"]`);
                    if (boton && !boton.classList.contains('checked')) {
                        contarminas(boton,false);
                    }
                }
            }   
        }
    }
}




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