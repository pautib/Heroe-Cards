const pokeApiRoot = 'https://pokeapi.co/api/v2/pokemon/';

async function getPokemonList(nameOrId) {
    return fetch(pokeApiRoot + nameOrId)
        .then((response) => response.json())
        .then(bodyResp => bodyResp.results)
        .catch(error => {
                console.error(error);
                throw new Error(`${nameOrId} is not a valid pokemon`);
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

export const getPokemonByNameOrId = async(nameOrId) => {

    const pokemonList = await getPokemonList(nameOrId);
    const pokemonCardsList = await Promise.all(
        pokemonList.map( (pokemon) => { return getPokemonCardDetails(pokemon); })
    );

    return pokemonCardsList;

}