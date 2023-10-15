import {Navigate, Route, Routes} from "react-router-dom";
import {DcPage, MarvelPage, SearchHeroesPage, HeroePage} from "../pages";
import {Navbar} from "../../ui";

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container">
                <Routes>
                    <Route path="/*" element={<Navigate to="/marvel" />} />
                    <Route path="marvel" element={<MarvelPage/>} />
                    <Route path="dc" element={<DcPage/>} />
                    <Route path="search" element={<SearchHeroesPage/>} />
                    <Route path="heroe/:heroeId" element={<HeroePage/>} />
                </Routes>
            </div>
        </>
    )
}