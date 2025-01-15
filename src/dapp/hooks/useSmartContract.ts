import { useCallback, useEffect, useState } from "react"
import { BrowserProvider, Contract, JsonRpcSigner, InterfaceAbi } from "ethers";
import { useWalletProvider } from "./useWalletProvider";

export const useSmartContract = (contractAddress: string, contractAbi: InterfaceAbi) => {
    //const [ethersProvider, setEthersProvider] = useState<BrowserProvider | null>(null);
    const { selectedWallet } = useWalletProvider();
    const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
    const [contract, setContract] = useState<Contract | null>(null);
    const [error, setError] = useState();

    useEffect(() => {

        if (selectedWallet) {

            const ethersProvider = new BrowserProvider(selectedWallet.provider);
            ethersProvider.getSigner().then((newSigner) => { 
                console.log(newSigner);
                setSigner(newSigner);
            }).catch((e) => setError(e))
            .finally(() => {
                console.log("Signer set");
                const theContract = new Contract(contractAddress, contractAbi, signer);
                console.log(theContract);
                console.log(theContract.getAddress());
                console.log(theContract.getDeployedCode);
                console.log(theContract.target);
                setContract(theContract);
                
            } );

        }

    }, [selectedWallet]);

    return { 
        contract,
        signer,
        error,
    };

}