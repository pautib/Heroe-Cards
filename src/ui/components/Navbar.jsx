import {Link, NavLink} from 'react-router-dom';
import {DApp} from "../../dapp/components/DApp";
import { PopupButton } from './PopupButton.jsx';
import { SelectedWallet, DisconnectWallet } from '../../dapp/index.ts';

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm" style={{backgroundColor: "#aa0d18"}}>

            <Link
                className="navbar-brand"
                to="/"
            >
                <img src="/Pokemon.svg.png" alt="Pokemon" className="img-thumbnail" style={{backgroundColor: "#aa0d18", borderColor: "black" }}/>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link pokeNavSection"
                        to="/search"
                    >
                        Search
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link pokeNavSection"
                        to="/purchases"
                    >
                        Purchases
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link pokeNavSection"
                        to="/objects"
                    >
                        Objects
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link pokeNavSection"
                        to="/wallet-test"
                    >
                        Wallet
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link" style={{ fontWeight: 'bold', color: '#f2c304' }}>
                        <PopupButton buttonTitle={"Available Wallets"} style= { { buttonClassName: 'pokeNavWalletButton'} } >
                            <DApp/>
                        </PopupButton>
                    </span>

                    <span className="nav-item nav-link" style={{ fontWeight: 'bold', color: '#f2c304' }}>
                        <SelectedWallet />
                    </span>

                    <span className="nav-item nav-link" style={{ fontWeight: 'bold', color: '#f2c304' }}>
                        <DisconnectWallet />
                    </span>

                </ul>
            </div>
        </nav>
    )
}