import * as types from './types';

const initialState = {
    books: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_BOOKS:
            return setBooks(state, action);
        default:
            return state;
    }
}

const setBooks = (state, { books }) => ({
    ...state,
    books,
})

export default reducer;