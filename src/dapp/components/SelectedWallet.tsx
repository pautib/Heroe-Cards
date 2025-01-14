import "./DApp.css"
import { useWalletProvider } from '../hooks/useWalletProvider'
import { formatAddress } from "../utils";

export const SelectedWallet = () => {
  
  const { selectedWallet, selectedAccount } = useWalletProvider();

  return (
    <>
      {selectedAccount &&
      <>
        <div className="selectedWallet">
            <img src={selectedWallet?.info.icon} alt={selectedWallet?.info.name} />
            <div>{selectedWallet?.info.name}</div>
            <div>({formatAddress(selectedAccount)})</div>
        </div>
      </>
      }
    </>
  )
}
