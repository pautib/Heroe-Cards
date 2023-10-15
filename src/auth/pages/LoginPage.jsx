import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context";
import {useContext} from "react";

export const LoginPage = () => {

    const { login } = useContext( AuthContext );
    const navigate = useNavigate();
    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';
        login('Pau Torres I Bravo');

        navigate(lastPath, { replace: true })
    }

    return (
        <div className="container mt-5">
            <h1>LoginPage</h1>
            <hr/>
            <button className="btn btn-primary" onClick={ onLogin }>Login</button>
        </div>
    )
}