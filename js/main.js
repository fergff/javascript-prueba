document.addEventListener("DOMContentLoaded", function () {
    const listaEjercicios = document.getElementById("listaEjercicios");

    // Array con el nombre de los archivos de ejercicios
    const archivosEjercicios = ["ejercicio01", "ejercicio02", "ejercicio03", "ejercicio04"];
    let cuenta=0;
    archivosEjercicios.forEach(function (nombreEjercicio) {
        // Crear un enlace para cada ejercicio
        const enlace = document.createElement("a");
        enlace.href = nombreEjercicio + ".html";
        enlace.textContent = nombreEjercicio;

        // Crear un elemento de lista y agregar el enlace
        const elementoLista = document.createElement("li");
        elementoLista.appendChild(enlace);

        // Agregar el elemento de lista a la lista de ejercicios
        listaEjercicios.appendChild(elementoLista);
    });
});