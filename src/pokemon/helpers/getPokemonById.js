
export const getPokemonById = async(id) => {
    const pokeApiRoot = 'https://pokeapi.co/api/v2/pokemon/';

    const pokemonInfo = await fetch(pokeApiRoot + id)
        .then(response => response.json())
        .catch(error => {
                console.error(error);
                throw new Error(`${ name } is not a valid pokemon`);
            }
        );

    return pokemonInfo;
}