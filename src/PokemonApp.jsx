import { WalletProvider } from "./dapp/index.ts";
import {PokemonRoutes} from "./pokemon";

export const PokemonApp = () => {
    return (
        <WalletProvider>
            <PokemonRoutes/>
        </WalletProvider>
    )
}