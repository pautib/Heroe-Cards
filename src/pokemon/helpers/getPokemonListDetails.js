const pokeApiRoot = 'https://pokeapi.co/api/v2/pokemon/';
const pokeApiAllPokemonRoot =  pokeApiRoot + '?limit=2000';


async function getAllPokemonList() {
    return fetch(pokeApiAllPokemonRoot)
        .then((response) => response.json())
        .then(bodyResp => bodyResp.results)
        .catch(error => {
                console.error(error);
                throw new Error(`Could not fetch entire Pokemon List`);
            }
        );
}

async function getPokemonCardDetails(pokemon) {

  return fetch(pokemon.url)
      .then((response) => response.json())
      .then(bodyResp => bodyResp)
      .then(res => ( {
          id: res.id,
          name: res.name,
          imgUrl: res.sprites.front_default,
          height: res.height,
          weight: res.weight,
      }))
      .catch(error => {
          console.error(error);
          throw new Error(`Cannot fetch ${pokemon.name} details from ${pokemon.url}`);
      });
}

export const getPokemonListDetails = async(name) => {

    let pokemonFiltered = await getAllPokemonList();

    if (name.trim()) {
        pokemonFiltered = pokemonFiltered.filter((pokemon) => pokemon.name.includes(name) );
    }
    const pokemonCardsList = await Promise.all(
        pokemonFiltered.map( (pokemon) => { return getPokemonCardDetails(pokemon); })
    );

    return pokemonCardsList;

}