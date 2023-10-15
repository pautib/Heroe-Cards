import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../src/auth";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {PrivateRoute} from "../../src/router/PrivateRoute.jsx";

describe('Pruebas sobre PrivateRoute', () => {



    test('Debe de mostrar el children si está autenticado', () => {


        const contextValue = {
            logged: true,
            user: {
                id: 'TestId',
                name: 'Test name',
            }
        };

        Storage.prototype.setItem = jest.fn();

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/search?q=batman"]}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        //screen.debug();

        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search?q=batman");
        expect(screen.getByText('Ruta privada')).toBeTruthy();

    });

    test('Debe de navegar a "/login" si no está autenticado', () => {

        const contextValue = {
            logged: false,

        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>

                    <Routes>
                        <Route path="/marvel" element={
                            <PrivateRoute>
                                <h1>Ruta privada</h1>
                            </PrivateRoute>
                        }/>
                        <Route path="/login" element={<h1>Pagina Login</h1>}/>
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        //screen.debug();

        expect(screen.getByText('Pagina Login')).toBeTruthy();

    });
})