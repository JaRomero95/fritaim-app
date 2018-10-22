import * as types from './types';
import * as actions from './actions';
import { takeLatest, put } from 'redux-saga/effects';
import ApiService from 'services/ApiService';

function* getBooks() {
    const books = yield ApiService.getBooks();
    yield put(actions.setBooks(books));
}

function* rootSaga() {
    yield takeLatest(types.GET_BOOKS, getBooks);
}

export default rootSaga;