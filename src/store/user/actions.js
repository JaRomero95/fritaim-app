import * as types from './types';

const login = () => ({
    type: types.LOGIN,
});

const setUser = (uid, email) => ({
    type: types.SET_USER,
    uid,
    email,
});

const removeUser = () => ({
    type: types.REMOVE_USER,
});

export {
    login,
    setUser,
    removeUser,
};