import PropTypes from "prop-types";

export const InlineInputNumber = ({id, minValue, maxValue, labelContent, value, onChangeFunction}) => {

    return (
        <div data-mdb-input-init className="d-flex">
            <label className="form-label" htmlFor={ id } style={{ padding: "5px" }}>{ labelContent }</label>
            <input
                min={ minValue }
                max={ maxValue}
                value={ value }
                placeholder={minValue + "to" + maxValue}
                type="number"
                id={ id }
                className="form-control"
                style={{ borderRadius: '10px !important', blockSize: '50%', maxWidth: '50%'}}
                onChange={onChangeFunction}
            />
        </div>
    );
}

InlineInputNumber.propTypes = {
    id: PropTypes.string,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    value: PropTypes.number,
    labelContent: PropTypes.string,
    onChangeFunction: PropTypes.func,
};