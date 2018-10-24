import * as types from './types';
import * as actions from './actions';
import { takeLatest, takeEvery, put } from 'redux-saga/effects';
import ApiService from 'services/ApiService';

function* getBooks() {
    // TODO handle errors
    const books = yield ApiService.getBooks();
    yield put(actions.setBooks(books));
}

function* addBook({ book }) {
    // TODO handle errors
    const result = yield ApiService.addBook(book);
    console.log(result);
}

function* rootSaga() {
    yield takeLatest(types.GET_BOOKS, getBooks);
    yield takeEvery(types.ADD_BOOK, addBook);
}

export default rootSaga;