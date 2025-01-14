import { useEffect, useState} from 'react';
import { getNaturesArrayValues } from '../helpers';

export const usePokemonNatures = (initialValue = []) => {

    const [naturesArray, setNaturesArray] = useState(initialValue);
    const [selectedNature, setSelectedNature] = useState([1,1,1,1,1,1]);
    const [areNaturesLoading, setAreNaturesLoading] = useState(true);

    useEffect(() => {

        getNaturesArrayValues()
            .then((obj) => {
                setNaturesArray(obj)
            })
            .finally(() => setAreNaturesLoading(false));

    }, []);

    return {
        natures: naturesArray,
        selectedNature: selectedNature,
        setSelectedNature: setSelectedNature,
        areNaturesLoading: areNaturesLoading,
    };
}