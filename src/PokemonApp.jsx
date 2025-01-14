import {AppRouter} from "./router/AppRouter.jsx";
import {AuthProvider} from "./auth/index.js";

export const HeroesApp = () => {
    return (
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    )
}