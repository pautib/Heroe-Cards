import {heroes} from "../data/heroes.js";

export const getHeroeById = (id) => {
    return heroes.find( heroe => heroe.id === id );
}