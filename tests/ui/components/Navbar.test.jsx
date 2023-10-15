import {fireEvent, render, screen} from "@testing-library/react";
import {AuthContext} from "../../../src/auth";
import React from "react";
import {MemoryRouter, useNavigate} from "react-router-dom";
import {Navbar} from "../../../src/ui";

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}))
describe('Pruebas en Navbar', () => {

    const contextValue = {
        user: {
            name: 'Test user',
            id: 'abc',
        },
        logged: true,
        logout: jest.fn(),
    };

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el nombre del usuario del login', () => {

        render(
            <AuthContext.Provider value = { contextValue } >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Test user')).toBeTruthy();

    });

    test('Debe de llamar el logout y navigate al hacer click en el botón', () => {

        render(
            <AuthContext.Provider value = { contextValue } >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutButton = screen.getByRole('button');
        fireEvent.click(logoutButton);

        expect(contextValue.logout).toHaveBeenCalledTimes(1);
        expect(mockUseNavigate).toHaveBeenCalledWith("/login", {"replace": true})

    })


});