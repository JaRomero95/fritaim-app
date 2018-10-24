import * as types from './types';

const setBooks = books => ({
    type: types.SET_BOOKS,
    books,
});

const getBooks = () => ({
    type: types.GET_BOOKS,
});

const addBook = book => ({
    type: types.ADD_BOOK,
    book,
});

export {
    setBooks,
    getBooks,
    addBook,
};