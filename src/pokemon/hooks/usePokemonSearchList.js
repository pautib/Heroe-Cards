import { useEffect, useState } from 'react';
import { getPokemonListDetails } from '../helpers';

export const usePokemonSearchList = (query = '') => {
    
    const [pokemons, setPokemons] = useState(undefined); // full list of Pokemons

    useEffect(() => {
        getPokemonListDetails('')
            .then(list => setPokemons(list));
    }, []);


    return pokemons?.filter(pokemon => pokemon.name.includes(query));
}