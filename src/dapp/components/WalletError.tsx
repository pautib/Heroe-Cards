import "./DApp.css"
import { useWalletProvider } from '../hooks/useWalletProvider'

export const WalletError = () => {
  
  const { errorMessage, clearError } = useWalletProvider();
  const isError = !!errorMessage;

  return (
    <>
      <div className="metaMaskError" style={isError ? { backgroundColor: 'brown' } : {}}>
        {isError &&
          <div onClick={clearError}>
            <strong>Error:</strong> {errorMessage}
          </div>
        }
      </div>
    </>
  )
}
