import PropTypes from "prop-types";
import { PokemonCarousel } from './PokemonCarousel';
import { useWalletProvider } from '../../dapp'

export const PokemonNFTPopupBody = ({sprites}) => {

const { selectedWallet } = useWalletProvider();

function createPokemonNFT() {

  selectedWallet.provider.request({
    method: "createPokemon blablabla",
    params: [
      {
        // The user's active address.
        from: 'test',// accounts[0],
        // Required except during contract publications.
        to: 'test', // Only required to send ether to the recipient from the initiating external account.
        value: 'test', // Customizable by the user during MetaMask confirmation.
        gasLimit: '0x5028', // Customizable by the user during MetaMask confirmation.
        maxPriorityFeePerGas: '0x3b9aca00', // Customizable by the user during MetaMask confirmation.
        maxFeePerGas: '0x2540be400',
      },
    ],
  }).then((txHash) => console.log(txHash))
  .catch((error) => console.error(error));

}

  return (
    <>
      <PokemonCarousel imageJson={ sprites } />
      <button className="btn m-2 pokeGoBackButton" onClick={createPokemonNFT} >
        Get NFT with this image
      </button>
    </>
    
  );
}

PokemonNFTPopupBody.propTypes = {
  sprites: PropTypes.object,
};
