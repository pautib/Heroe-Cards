import {HeroeList} from "../components/HeroeList.jsx";

export const MarvelPage = () => {
    return (
        <>
            <h1>Marvel Comics</h1>
            <hr/>
            <HeroeList publisher={ 'Marvel Comics' } />
        </>
    )
}