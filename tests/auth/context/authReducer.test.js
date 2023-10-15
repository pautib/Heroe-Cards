import { authReducer, types } from "../../../src/auth";

describe('Pruebas en authReducer', () => {

    const initialState = { logged: false }
    const testUser = {
        id: 'testId',
        name: 'Test User',
    }

    test('Debe de retornar el estado por defecto', () => {

        const state = authReducer(initialState, );

        expect(state).toBe(initialState);

    });

    test('Debe de llamar al login, poner logged a true y establecer el user', () => {

        const action = {
            type: types.login,
            payload: testUser,
        };

        const {logged, user} = authReducer(initialState, action);

        expect(user).toBe(testUser);
        expect(logged).toBe(true);

    });

    test('Debe de llamar al logout, quitar el user y poner logged a false', () => {

        const state = {
            logged: true,
            user: testUser,
        }

        const action = {
            type: types.logout,
            //payload: testUser,
        };

        const {logged, user} = authReducer(state, action);

        expect(user).toBeUndefined();
        expect(logged).toBe(false);
    });
});