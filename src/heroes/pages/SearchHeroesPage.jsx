import {useForm} from "../../hooks/useForm.js";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from 'query-string';
import {getHeroesByName} from "../helpers/getHeroesByName.js";
import {HeroeCard} from "../components/index.js";
import React from "react";
export const SearchHeroesPage = () => {

    const { searchText, onInputChange } = useForm({searchText: ''});
    const navigate = useNavigate();
    const location = useLocation();
    const {query = "" } = queryString.parse( location.search );
    const heroes = getHeroesByName(query);
    const showAlert = query === "";
    const showError = query.length > 0 && heroes.length === 0;
    const onSearchSubmit = (event) => {
        event.preventDefault();

        navigate(`?query=${ searchText.toLowerCase().trim() }`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr/>
            <div className="row">

                <div className="col-5">
                    <h4>Searching</h4>
                    <hr/>
                    <form>
                        <input text="text" placeholder="Search a hero" className="form-control"
                               name="searchText" autoComplete="off" value={ searchText } onChange={ onInputChange }/>
                        <button className="btn btn-outline-primary mt-1" onClick={ onSearchSubmit } >Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Result</h4>
                    <hr/>
                    <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showAlert ? '' : 'none'}}>
                        Search a heroe
                    </div>
                    <div className="alert alert-danger animate__animated animate__fadeIn" aria-label="nohero" style={{ display: showError ? '' : 'none'}}>
                        No heroe with <b>{ query }</b>
                    </div>
                    {
                        heroes.map( hero => (<HeroeCard key={ hero.id } {...hero } />) )
                    }
                </div>

            </div>
        </>
    )
}