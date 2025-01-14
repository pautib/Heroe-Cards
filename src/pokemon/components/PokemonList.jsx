import {getPokemonListDetails} from "../helpers";
import {PokemonCard} from "./PokemonCard.jsx";
import {useMemo} from "react";
import PropTypes from "prop-types";

export const PokemonList = ({ name }) => {
    const pokemonsByName = useMemo(() => getPokemonListDetails(name), [name]);
    return (

        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                pokemonsByName.map(pokemon => ( <PokemonCard key = { pokemon.id } { ...pokemon } /> ))
            }
        </div>

    )
}

PokemonList.propTypes = {
    name: PropTypes.string
};