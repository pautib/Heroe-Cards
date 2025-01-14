import "./DApp.css"
import { WalletList } from "./WalletList";
import { SelectedWallet } from "./SelectedWallet";
import { WalletError } from "./WalletError";
//import { WalletProvider } from "../context";

export const DApp = () => {

  return (
      <div className="DApp">
        <WalletList />
        <hr />
        <SelectedWallet />
        <WalletError />
      </div>
  )
}
