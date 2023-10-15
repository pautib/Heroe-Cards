import {getHeroesByPublisher} from "../helpers";
import {HeroeCard} from "./HeroeCard.jsx";
import {useMemo} from "react";

export const HeroeList = ({ publisher }) => {
    const heroesByPublisher = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (

        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroesByPublisher.map(heroe => ( <HeroeCard key = { heroe.id } { ...heroe } /> ))
            }
        </div>

    )
}