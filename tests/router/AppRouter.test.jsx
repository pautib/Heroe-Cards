import {AuthContext} from "../../src/auth";
import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {AppRouter} from "../../src/router/AppRouter.jsx";

describe('Pruebas en <AppRouter/>', () => {

    test('Debe de mostrar el login si no está autenticado', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        //screen.debug();

        expect(screen.getAllByText('Login').length).toBe(1);

    });

    test('Debe de mostrar el componente de marvel si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Caca'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        screen.debug();

        expect(screen.getAllByText('Marvel Comics').length).toBeGreaterThanOrEqual(1);

    });
});