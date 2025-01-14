import {fireEvent, render, screen} from "@testing-library/react";
import {AuthContext} from "../../../src/auth";
import React from "react";
import {MemoryRouter, useNavigate} from "react-router-dom";
import {Navbar} from "../../../src/ui";
import {SearchPokemonPage} from "../../../src/pokemon/index.js";
import {useForm} from "../../../src/hooks/useForm.js";

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}))

jest.mock("../../../src/hooks/useForm.js");
describe('Pruebas en SearchHeroesPage', () => {

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar los valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPokemonPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar a Batman y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?query=batman']}>
                <SearchPokemonPage />
            </MemoryRouter>
        );

        expect(screen.getByText('Batman')).toBeTruthy();
        expect(screen.getByRole('img').src).toContain("/heroes/dc-batman.jpg");
        const noDisplayHeroDiv = screen.getByLabelText('nohero');
        expect(noDisplayHeroDiv.style.display).toBe('none');
    });

    test('Debe de mostrar un error si no se encuentra el heroe', () => {

        render(
            <MemoryRouter initialEntries={['/search?query=dummyHero']}>
                <SearchPokemonPage />
            </MemoryRouter>
        );

        const noDisplayHeroDiv = screen.getByLabelText('nohero');
        expect(noDisplayHeroDiv.style.display).toBe('');

    });

    test('Debe de llamar el navigate a la pantalla nueva', () => {

        useForm.mockReturnValue({
            searchText: 'dummyHero',
            onInputChange: jest.fn(),
        })

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPokemonPage />
            </MemoryRouter>
        );

        const searchBtn = screen.getByRole('button');
        fireEvent.click(searchBtn);

        expect(mockUseNavigate).toHaveBeenCalledWith("?query=dummyhero");

    })


});