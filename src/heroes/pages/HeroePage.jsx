import { Navigate, useNavigate, useParams} from "react-router-dom";
import {getHeroeById} from "../helpers";
import {useEffect, useMemo} from "react";

export const HeroePage = () => {

    const { heroeId, ...rest } = useParams();
    const heroe = useMemo( () => getHeroeById(heroeId), [heroeId]);

    if (!heroe) {
        return <Navigate to="/marvel" />
    }

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }

    const heroeImageUrl = `/heroes/${ heroeId }.jpg`;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={ heroeImageUrl } alt={ heroe.superhero } className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>

            <div className="col-8">
                <h3>{ heroe.superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego: </b> { heroe.alter_ego } </li>
                    <li className="list-group-item"> <b>Publisher: </b> { heroe.publisher } </li>
                    <li className="list-group-item"> <b>First appearance: </b> { heroe.first_appearance } </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{ heroe.characters }</p>

                <button className="btn btn-outline-primary" onClick={ onNavigateBack }>Regresar</button>
            </div>

        </div>
    )
}