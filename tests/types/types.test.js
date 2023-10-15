import {types} from "../../src/auth/index.js";

describe('Pruebas sobre types', () => {

    const validTypes = {
        login: '[Auth] Login',
        logout: '[Auth] Logout',
    }

    test('Debe de regresar estos y solo estos types', () => {
        expect(types).toEqual(validTypes);
    });
})