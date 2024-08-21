let pokemon_card_container = document.querySelector('#pokemon_card_container');
let searchInput = document.getElementById("search");
let filterBtn = document.getElementById("filter");
let type = document.getElementById("type");

// animation  
const filterButton = document.getElementById('filter');

filterButton.addEventListener('click', function() {
    filterButton.classList.toggle('flipped');
    filterBtn.innerHTML = "Filter By Type"
});



async function fetchPokData(i) {
    let data =await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let response =await data.json();
    console.log(response);
    return response;
}
// fetchPokData();

function createCard(pokemon){
    let card = document.createElement("div");
    card.classList.add('card');
    card.innerHTML = `
    <div class = "card-inner">
    <div class = "card-front">
    <div class = "id">${pokemon.id}</div>
    <img src = '${pokemon.sprites.front_default}'>
    <div class = "id">${pokemon.name}</div>
    <div class = "type">${pokemon.types[0].type.name}</div>
    </div>

    <div class = "card-back">

        <img src = '${pokemon.sprites.back_default}'>
        <div class = "name">${pokemon.name} </div>
        <div class = "type"> ${pokemon.types[0].type.name} </div>

     </div>  
     </div>      
    `
    console.log(card);
    return card;
}

filterBtn.addEventListener("click", function(card){
    let allCards = document.querySelectorAll(".card");
    allCards.forEach((card)=>{
        let cardType = card.querySelector(".type").textContent;
        if(cardType === type.value){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
        console.log(cardType);
    })


})


searchInput.addEventListener("keyup",function(){
    let searchValue = searchInput.value;
    // console.log(searchValue);
    let allCards = document.querySelectorAll(".card");
    allCards.forEach(function(card){
        let cardName = card.querySelector(".name").textContent;
        if(cardName.startsWith(searchValue)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
    })

})

async function NPokemon(){
    for(let i=1; i<=100; i++){
        let pokemon = await fetchPokData(i);
        console.log(pokemon);
        let card = createCard(pokemon);
        pokemon_card_container.appendChild(card);
    }
}
NPokemon();



