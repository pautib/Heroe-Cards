import {getPokemonListDetails} from "../helpers";
import {PokemonCard} from "./PokemonCard.jsx";
import {useMemo} from "react";

export const PokemonList = ({ name }) => {
    const pokemonByName = useMemo(() => getPokemonListDetails(name), [name]);
    return (

        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                pokemonByName.map(pokemon => ( <PokemonCard key = { pokemon.id } { ...pokemon } /> ))
            }
        </div>

    )
}