import {useContext} from "react";
import {AuthContext} from "../auth/index.js";
import {Navigate, useLocation} from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    const {pathname, search} = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

    return logged ? children : (<Navigate to="/login"/>);
}