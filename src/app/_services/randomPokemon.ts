export default function randomPokemon() {
    const random = Math.floor(Math.random() * 5);
    
    let pokemon = '';
    switch (random) {
        case 0 : pokemon ="Charmander"
        break;
        case 1 : pokemon = "Squirtle"
        break;
        case 2 : pokemon = "Wartortle"
        break;
        case 3 : pokemon = "Caterpie"
        break;
        case 4 : pokemon = "Metapod"
        break;
        case 5 : pokemon = "Kakuna"
        break;
    }

    return pokemon;
}