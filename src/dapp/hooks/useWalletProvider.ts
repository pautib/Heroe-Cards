import { useContext } from "react"
import { WalletContext } from "../context"

export const useWalletProvider = () => useContext(WalletContext)