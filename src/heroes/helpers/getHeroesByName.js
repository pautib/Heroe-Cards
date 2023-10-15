import {heroes} from "../data/heroes.js";

export const getHeroesByName = ( name = '' ) => {
    name = name.toLocaleLowerCase().trim();
    if ( name.length === 0) { return []; }

    return heroes.filter(
        heroe => heroe.superhero.toLocaleLowerCase().includes( name )
    );
}