alert("hola mundoooo");
    
function tirar(){
        // Obtén el elemento del botón
        var miboton = document.getElementById("miBoton");
        var resultado = document.getElementById("resultado");
    // Genera un número aleatorio y escribe en el botón
    let random = Math.floor(Math.random() * 6) + 1;
    miboton.innerHTML = random;
    resultado.innerHTML= random;
}