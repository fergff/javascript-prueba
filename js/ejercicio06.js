    //el hig scoreee
    var highScore = localStorage.getItem('highScore'); //obtener highscore
    if (!highScore) highScore = 0;
    document.getElementById("high").innerHTML= "High Score : "+highScore; // le aztulizo el highscore

    var contador = document.getElementById("contador");
    var problema = document.getElementById("problema");

    //botones
    var op1 = document.getElementById("op1");
    var op2 = document.getElementById("op2");
    var op3 = document.getElementById("op3");

    var highScore = localStorage.getItem('highScore');
    var score;

    var segundosTotales;
    var intervalo; // intervalo como variable global
    const operaciones = ["+", "-", "/", "*"];
    var resultado; //el resultado de la operacion 
    function actualizarContador() {
        contador.innerHTML = segundosTotales;
        segundosTotales--;

        // contador llega a cero
        if (segundosTotales == 0) {
            clearInterval(intervalo); // Detener el intervalo
            contador.innerHTML = "Terminado";
            document.getElementById("bempezar").disabled = false;
            return;
        }
    }

    function empezar() {
        score=0;
        segundosTotales = 4;
        document.getElementById("score").innerHTML= "Score : "+score;
        document.getElementById("bempezar").disabled = true; //inavilitamos el boton de empezar
        intervalo = setInterval(actualizarContador, 1000); // se actulizaca cada seg.

        generaroperacion();
        //habilitamos botonesss
        document.getElementById("op1").disabled = false;
        document.getElementById("op2").disabled = false;
        document.getElementById("op3").disabled = false;
    }

    function generaroperacion(){
        let randomop = Math.floor(Math.random() * 4);

        let r1 = Math.floor(Math.random() * 12);
        let r2 = Math.floor(Math.random() * 12);

        switch (operaciones[randomop]) {
            case "+":
                problema.innerHTML= r1 + " + " + r2;
                resultado = r1+r2; 
                break;
            case "-":
                problema.innerHTML= r1 + " - " + r2;
                resultado = r1-r2; 
            break;
            case "/":
                problema.innerHTML= r1 + " / " + r2;
                resultado = r1/r2; 
            break;
            case "*":
                problema.innerHTML= r1 + " * " + r2;
                resultado = r1*r2; 
            break;
            default:
                alert("aaa");
                break;
        }
        generarbotones();

    }

    function generarbotones(){
        let r1 = Math.floor(Math.random() * 18);
        let r2 = Math.floor(Math.random() * 18);
        let posicion = Math.floor(Math.random() * 3);
        
        switch (posicion+1) {
            case 1:
                    op1.innerHTML=resultado;
                    op2.innerHTML=r1;
                    op3.innerHTML=r2;
                break;
            case 2:
                op1.innerHTML=r2;
                op2.innerHTML=resultado;
                op3.innerHTML=r1;
            break;
            case 3:
                op1.innerHTML=r2;
                op2.innerHTML=r1;
                op3.innerHTML=resultado;
            break;
            default:
                alert("aaa");
                break;
        }
    }

    function comprobar(op){
        if(op.innerHTML==resultado){
            score++;
            if (score > highScore) { // si el score el mas lato k highscore lo guardo
                highScore = score;
                localStorage.setItem('highScore', highScore);
                document.getElementById("high").innerHTML= "High Score : "+highScore; // le aztulizo el highscore
            }
            document.getElementById("score").innerHTML= "Score : "+score;
            segundosTotales = 5; // Restablecer el contador
            contador.innerHTML = segundosTotales;
            generaroperacion();
        }else{  //has fallado la respuesta
            alert("noooooooo");
            document.getElementById("bempezar").disabled = false;
            segundosTotales = 0;
            clearInterval(intervalo); // Detener el intervalo
            document.getElementById("op1").disabled = true;
            document.getElementById("op2").disabled = true;
            document.getElementById("op3").disabled = true;
        }
        
    }
    