let tirada =0;
            let terminado=false;
            let botones = [];
            
            for (let i = 1; i <= 9; i++) {
                botones.push(document.getElementById("b0" + i));
            }

            let resultado = document.getElementById("resultado");

            let combinacionesGanadoras = [
                    ["b01","b02", "b03"],
                    ["b04", "b05", "b06"],
                    ["b07", "b08", "b09"],
                    ["b01", "b04", "b07"],
                    ["b02", "b05", "b08"],
                    ["b03", "b06", "b09"],
                    ["b01", "b05", "b09"],
                    ["b03", "b05", "b07"]
            ];
            function tirar(boton){
                if(boton.innerHTML==""){
                    if(tirada%2==0){ //toca circulo
                        boton.innerHTML="O";
                        verificar("O");
                    }else{//toca cruz
                        boton.innerHTML="X";
                        verificar("X");
                    }
                    tirada++;
                }
                
            }

            function verificar(simbolo) {
                let cuenta=0;
                for (const boton of botones) {
                    if(boton.innerHTML==""){
                        cuenta++;
                       
                    }
                }
                if(cuenta==0){
                    resultado.innerHTML = "Empate"
                    terminado=true; 
                }
                
                if(terminado){//si esta terminado k lo ponga todo como estaba
                    resultado.innerHTML = "3 en ralla"
                    for (const boton of botones) {
                        boton.innerHTML = "";
                    }
                    tirada=-1;
                    terminado=false;
                }else{ // si no que compruebe lo que este dentro
                    for (const combinacion of combinacionesGanadoras) {
                        let contador = 0;
                        for (const id of combinacion) { 
                            if (document.getElementById(id).innerHTML === simbolo) {
                                contador++;
                            }
                        }
                        if (contador === 3) {
                            resultado.innerHTML = "Ganador: " + simbolo;
                            terminado=true;
                        }
                    }
                }
            }
