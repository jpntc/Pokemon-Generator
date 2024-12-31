try{
    const Button = document.querySelector(".buttonn");
    Button.addEventListener('click', renderData);

    const generateNumber = () =>{
    return Math.ceil(Math.random() * 1017);
}

function renderData(){
    let index = generateNumber();
    fetch( `https://pokeapi.co/api/v2/pokemon/${index}`)
        .then(response => response.json())
        .then(pokemon=>{
            generatePokemon(pokemon);
        }

        )
   }

    function generatePokemon(pokemon){
        const pane = document.querySelector(".pane");
        const renderData = document.querySelector(".render-img");
        const renderData2 = document.querySelector(".render-img2");
        const renderText = document.querySelector(".render-text");
        renderData.innerHTML=' ';
        renderText.innerHTML= ' ';
        renderData2.innerHTML = " ";

        console.log(pokemon);
        let pokemonName = pokemon.forms[0].name;
        let spriteLocationFront = pokemon.sprites.front_default;
        let spriteLocationBack = pokemon.sprites.back_default;

        let pokeNameText = document.createTextNode("Name: " + pokemonName);
        let pokeImageFront = document.createElement('img');
        let pokeImageBack = document.createElement('img');
        let pokeImageBack2 = document.createElement("img");
        pokeImageFront.src=spriteLocationFront;
        pokeImageBack.src = spriteLocationBack;
        pokeImageBack2.src = spriteLocationFront

        renderText.appendChild(pokeNameText);
        renderData.appendChild(pokeImageFront);
        renderData2.appendChild(pokeImageFront);

        if(spriteLocationBack != null){
            renderData.appendChild(pokeImageBack);

        }
    }
    //Work In Progress
    // function generatePokemonStats(pokemon, renderText){
    //     let keys = ["abilities"];
    //     keys.forEach((element) =>{
    //         pokemon[element].forEach((elements)=>{
    //           for(let key in elements){
    //                 console.log(`${key}: ${elements[key]}`);
                
    //           }
    //         })


    //     })

    // }
}
catch(error){
    console.log(error);
}