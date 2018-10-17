import * as types from './types';

const initialState = {
    uid: null,
    email: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_USER:
            return setUser(state, action);
        case types.REMOVE_USER:
            return removeUser(state, action);
        default:
            return state;
    }
}

function setUser(state, action) {
    return {
        ...state,
        uid: action.uid,
        email: action.email,
    };
}

function removeUser(state, action) {
    return {
        ...state,
        uid: null,
        email: null,
    };
}

export default reducer;