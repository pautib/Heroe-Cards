import "./DApp.css"
import { useWalletProvider } from '../hooks/useWalletProvider'

export const DisconnectWallet = () => {
  
  const {selectedAccount, disconnectWallet } = useWalletProvider();

  return (
    <>
      {
        selectedAccount &&
          <img key="disconnectWallet" title="Disconnect Wallet" onClick={ disconnectWallet } src="/logout.svg" className="btn disconnectButton" />
      }
    </>
  )
}
