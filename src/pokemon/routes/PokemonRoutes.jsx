import {Navigate, Route, Routes} from "react-router-dom";
import {SearchPokemonPage, PokemonPage} from "../pages";
import {Navbar} from "../../ui";
import {DApp} from "../../dapp/components/DApp";

export const PokemonRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container">
                <Routes>
                    <Route path="/*" element={<Navigate to="/search" />} />
                    <Route path="search" element={<SearchPokemonPage />} />
                    <Route path="pokemon/:pokemonId" element={<PokemonPage />} />
                    <Route path="wallet-test" element={<DApp />} />
                </Routes>
            </div>
        </>
    )
}