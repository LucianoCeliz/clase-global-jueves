
const d = document;

const $cards = d.querySelector(`.cards`);

/* // Creacion de elementos
const $card = d.createElement(`div`),
      $cardImg = d.createElement(`img`),
      $cardTitle = d.createElement(`h3`),
      $cardDescription = d.createElement(`p`);

// Insercion de elementos
$cards.appendChild($card);
$card.appendChild($cardImg);
$card.appendChild($cardTitle);
$card.appendChild($cardDescription);

// Insercion de atributos y contenido
$card.className = `card`;
$cardImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/250px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg`;
$cardImg.alt = `Lionel Messi`
$cardImg.width = 150;
$cardTitle.textContent = `The best`;
$cardDescription.textContent = `Y dale messiii daleeee`; */

const pokemons= [
    {
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
        title: "pikachu",
        description:"electric",
        bgColor: "yellow"
    },
    {
        img:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
        title:"Bulbasaur",
        description:"Plant/Venon",
        bgColor:"Green"
    },
    {
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png",
        title: "Charmander",
        description:"Fire",
        bgColor:"Orange"
    },
    {
        img:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
        title:"Squirtle",
        description:"Water",
        bgColor:"Blue"
    }
] 

pokemons.forEach(pokemon =>{
    // Creacion de elementos
const $card = d.createElement(`div`),
$cardImg = d.createElement(`img`),
$cardTitle = d.createElement(`h3`),
$cardDescription = d.createElement(`p`);

// Insercion de elementos
$cards.appendChild($card);
$card.appendChild($cardImg);
$card.appendChild($cardTitle);
$card.appendChild($cardDescription);

// Insercion de atributos y contenido
$card.className = `card`;
$cardImg.src = pokemon.img;
$cardImg.alt = `Pokemon`;
$cardImg.width = 150;
$cardTitle.textContent = pokemon.title;
$cardDescription.textContent = pokemon.description;

// Inserto css para darle color a cada fondo.

$card.style.backgroundColor = pokemon.bgColor;

})


 

