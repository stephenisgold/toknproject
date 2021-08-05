import userReducer, { INITIAL_STATE } from './userReducer';
import { SET_EMAIL, SET_IS_LOGGED_IN } from '../actions/types';
import { setEmail, setIsLoggedIn } from '../actions/userActions';


describe('userReducer test', () => {
    test('should return initial state', async () => {
        expect(userReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    test('handles SET_EMAIL', async () => {
        const finalState = {
            email: 'email@email.com',
            isLoggedIn: false
        };
        expect(userReducer(undefined, setEmail("email@email.com"))).toEqual(finalState)
    });

    test('doesnt login if no email is set', async () => {
        const finalState = {
            email: '',
            isLoggedIn: false
        };
        expect(userReducer(undefined, setIsLoggedIn(true))).toEqual(finalState)
    });

    test('changes login state if email is set', async () => {
        const email = 'email@email.com'
        const finalState = {
            email: email,
            isLoggedIn: true
        };
        
        const state = userReducer(undefined, setEmail('email@email.com'));
        expect(state.email).toEqual(email);
        expect(userReducer(state, setIsLoggedIn(true))).toEqual(finalState);
    })

})
