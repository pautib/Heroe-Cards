import PropTypes from "prop-types";
import {useCarouselCounter} from "../hooks/useCarouselCounter.js";

export const PokemonCryButton = ({
      cryArray,
    }) => {

    const { counter: activeSoundIndex, increment: setNextSound } = useCarouselCounter(0,0, cryArray.length - 1);
    function onSoundDisplay(event) {
        event.preventDefault();
        let sound = new Audio(cryArray[activeSoundIndex]);
        sound.play();

        setNextSound();
    }

    return (
            <img key="crySound" onClick={ onSoundDisplay } src="./speaker_icon.svg" className="btn" />
        )
}

PokemonCryButton.propTypes = {
    cryArray: PropTypes.array
};