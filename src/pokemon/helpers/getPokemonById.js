const pokeApiRoot = 'https://pokeapi.co/api/v2/pokemon/';

async function fetchPokemonData(id) {

    try {
        const response = await fetch(pokeApiRoot + id);
        return response.json();
    } catch (e) {
        console.error(e);
        throw new Error(`${id} is not a valid pokemon`);
    }

}


export const getPokemonById = async(id) => {
    const pokemonInfo = await fetchPokemonData(id);
    return pokemonInfo;
}