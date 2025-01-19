import {Navigate, Route, Routes} from "react-router-dom";
import {SearchPokemonPage, PokemonPage} from "../pages";
import {Navbar} from "../../ui";
import {DApp} from "../../dapp/components/DApp";

export const PokemonRoutes = () => {

    return (
        <>
            <Navbar baseUri={BASE_URI}/>

            <div className="container">
                <Routes>
                    <Route path= {BASE_URI}>
                        <Route path= {BASE_URI + "/"} element={<Navigate to="search" />} />
                        <Route path="search" element={<SearchPokemonPage />} />
                        <Route path="pokemon/:pokemonId" element={<PokemonPage />} />
                        <Route path="wallet-test" element={<DApp />} />
                    </Route>
                </Routes>
            </div>
        </>
    )
}


export const BASE_URI = "/pokemon-nft-react";