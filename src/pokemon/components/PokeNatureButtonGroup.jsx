import PropTypes from "prop-types";
import { capitalize } from "lodash";
import { Tooltip } from "react-tooltip";

export const PokeNatureButtonGroup = ({ setMatrix, naturesArray }) => {

    return (
        <div className="btn-group-toggle wrap" role="group" aria-label="Natures available">
            {
                naturesArray?.map( ([keyName, natureObject] ) => (
                    <PokeNatureButton key={ keyName } natureName={ keyName } natureObject={ natureObject } setMatrix={ setMatrix } />
                ))
            }
        </div>
    )
}

const PokeNatureButton = ({ natureName, natureObject, setMatrix }) => {

    return (
        <>
            <Tooltip id={ natureName } />
            <button type="button"
                    id={natureName}
                    key={natureName}
                    className="btn m-2 pokeNatureButtons"
                    data-tooltip-id={ natureName }
                    data-tooltip-content={ natureObject.description }
                    data-tooltip-place="top"
                    title={ natureObject.description }
                    onClick={ () => setMatrix(natureObject.matrix) }>
                { capitalize(natureName) }
            </button>
        </>
    );

}

PokeNatureButtonGroup.propTypes = {
    naturesArray: PropTypes.array,
    setMatrix: PropTypes.func,
    naturesLoading: PropTypes.bool,
};

PokeNatureButton.propTypes = {
    natureName: PropTypes.string,
    natureObject: PropTypes.object,
    setMatrix: PropTypes.func,
};