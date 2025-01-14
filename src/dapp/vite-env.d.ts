/// <reference types="vite/client" />

/**
 * Represents the assets needed to display and identify a wallet.
 *
 * @interface EIP6963ProviderInfo
 * @property uuid - A locally unique identifier for the wallet. MUST be a v4 UUID.
 * @property name - The name of the wallet.
 * @property icon - The icon for the wallet. MUST be data URI.
 * @property rdns - The reverse syntax domain name identifier for the wallet.
 */
interface EIP6963ProviderInfo {
    rdns: string
    uuid: string
    name: string
    icon: string
  }

/**
 * Represents the structure of an Ethereum provider based on the EIP-1193 standard
 * 
 * @interface EIP1193Provider
 */
  interface EIP1193Provider {
    chainId?: string
    isStatus?: boolean
    host?: string
    path?: string
    sendAsync?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void
    send?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void
    request: (request: { method: string, params?: Array<unknown> }) => Promise<unknown>
    addListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
  }

/**
 * Combines the provider's metadata with an actual provider object.
 * Creating a complete picture of a wallet provider at a glance and for purposes of working with them.
 *
 * @interface EIP6963ProviderDetail
 * @property info - The EIP6963ProviderInfo object.
 * @property provider - The provider instance.
 */
  interface EIP6963ProviderDetail {
    info: EIP6963ProviderInfo
    provider: EIP1193Provider
  }
  
  // This type represents the structure of an event dispatched by a wallet to announce its presence based on EIP-6963
  interface EIP6963ProviderEvent extends Event {
    detail:{
      info: EIP6963ProviderInfo
      provider: EIP1193Provider
    }
  }
  
  // An error object with optional properties, commonly encountered when handling MetaMask `eth_requestAccounts` errors
  interface WalletError {
    code?: string
    message?: string
  }

  // Context interface for the EIP-6963 provider.
interface WalletProviderContext {
  wallets: Record<string, EIP6963ProviderDetail> // A list of wallets.
  selectedWallet: EIP6963ProviderDetail | null // The selected wallet.
  selectedAccount: string | null // The selected account address.
  errorMessage: string | null // An error message.
  connectWallet: (walletUuid: string) => Promise<void> // Function to connect wallets.
  disconnectWallet: () => void // Function to disconnect wallets.
  switchChain: (chainId: number) => Promise<void> // Function to switch chains.
  clearError: () => void
}

// Type alias for a record where the keys are wallet identifiers and the values are account
// addresses or null.
type SelectedAccountByWallet = Record<string, string | null>