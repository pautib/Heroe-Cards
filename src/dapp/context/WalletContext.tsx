import { createContext } from 'react'

const init : WalletProviderContext = {
    wallets: {}, 
    selectedWallet: null,
    selectedAccount: null,
    errorMessage: null,
    connectWallet: () => { return Promise.resolve(); } ,
    disconnectWallet: () => {},
    switchChain: (chainId: number) => { return Promise.resolve(); },
    clearError: () => {}
}

export const WalletContext = createContext<WalletProviderContext>(init);

