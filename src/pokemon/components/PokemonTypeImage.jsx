import PropTypes from "prop-types";

export const PokemonTypeImage = ({ pokemonTypeName }) => {

    const getPokemonTypeImageUri = (pokemonType) => "/pokemonTypes/Pokemon_Type_Icon_" + pokemonType + ".svg";

    return (
        pokemonTypeName ?
            <img src={ getPokemonTypeImageUri(pokemonTypeName) } style={{ margin: '0.5%'}} title={ pokemonTypeName } />
            : <div></div>
    )

}

PokemonTypeImage.propTypes = {
    pokemonTypeName: PropTypes.string
};