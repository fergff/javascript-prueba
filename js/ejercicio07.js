
    getCharactersByName(`https://rickandmortyapi.com/api/character/?`);

    function buscar(){
        var idpersonaje = document.getElementById('idpersonaje').value;
        var npersonaje = document.getElementById('npersonaje').value;
        var status = document.getElementById('status').value;
        var species = document.getElementById('species').value;
        let apiUrl = `https://rickandmortyapi.com/api/character/?`;
            let cuenta =0;
        if(idpersonaje> 0 && idpersonaje!= ""){
            //alert(idpersonaje);
            getCharacterInfo(idpersonaje);
        }else{
            //alert("aaaa");
            if(npersonaje!= ""){
                if(cuenta!=0){
                    apiUrl=apiUrl+`&`;
                }
                apiUrl=apiUrl+`name=${npersonaje}`;
                cuenta++;
            }
            if(status!=""){
                if(cuenta!=0){
                    apiUrl=apiUrl+`&`;
                }
                apiUrl=apiUrl+`status=${status}`;
                cuenta++;
            }
            if(species!=""){
                if(cuenta!=0){
                    apiUrl=apiUrl+`&`;
                }
                apiUrl=apiUrl+`species=${species}`;
                cuenta++;
            }
            if(cuenta==0){
                apiUrl = `https://rickandmortyapi.com/api/character`;
            }
            getCharactersByName(apiUrl);
        }
        //alert(apiUrl);
    }


    var nada="human";
    function getCharactersByName(apiUrl) {
        fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Construye el HTML con la información de los personajes
            let charactersHtml = '';
            data.results.forEach(character => {
                charactersHtml += `
                    <div class="col-4">
                        <div class="card mb-3 border-2 border-warning">
                            <img src="${character.image}" class="card-img-top" alt="${character.name}">
                            <div class="card-body ">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title">${character.name}</h5>
                                    <h5 class=""> Id: ${character.id}</h5>
                                </div>
                                <p class="m-0">Estado: ${character.status}</p>
                                <p class="m-0">Especie: ${character.species}</p>
                                <p class="m-0">Género: ${character.gender}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
            // Inserta el HTML en el contenedor
            document.getElementById('character-info').innerHTML = charactersHtml;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }

    // Llama a la función con el nombre del personaje que deseas obtener
    //getCharactersByName(); 
    function getCharacterInfo(characterId) {
    const apiUrl = `https://rickandmortyapi.com/api/character/${characterId}`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(character => {
        // Construye el HTML con la información del personaje
        const characterInfoHtml = `
            <div class="col-12">
                <div class="card mb-3 border-2 border-warning">
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body ">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title">${character.name}</h5>
                            <h5 class=""> Id: ${character.id}</h5>
                        </div>
                        <p class="m-0">Estado: ${character.status}</p>
                        <p class="m-0">Especie: ${character.species}</p>
                        <p class="m-0">Género: ${character.gender}</p>
                    </div>
                </div>
            </div>
        `;
        // Inserta el HTML en el contenedor
        document.getElementById('character-info').innerHTML = characterInfoHtml;
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}