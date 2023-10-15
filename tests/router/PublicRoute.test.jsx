import { render, screen } from "@testing-library/react";
import {AuthContext} from "../../src/auth";
import {PublicRoute} from "../../src/router/PublicRoute.jsx";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import React from "react";

describe('Pruebas sobre PublicRoute', () => {

    test('Debe de mostrar el children si no está autenticado', () => {

        const contextValue = {
            logged: false,
        };

        render(
            <AuthContext.Provider value = { contextValue } >
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        screen.debug();

        expect(screen.getByText('Ruta pública')).toBeTruthy();

    });

    test('Debe de navegar a "/" si sí está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'TestId',
                name: 'Test name',
            }
        }

        render(
            <AuthContext.Provider value = { contextValue } >
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path="/login" element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />
                        <Route path="/" element={<h1>Pagina Base</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        screen.debug();

        expect(screen.getByText('Pagina Base')).toBeTruthy();

    });
})