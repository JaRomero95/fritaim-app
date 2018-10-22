import { operations as userOperations } from './user';
import { operations as booksOperations } from './books';
import { all } from 'redux-saga/effects';

function* rootSaga() {
    yield all([
        userOperations(),
        booksOperations(),
    ]);
}

export default rootSaga;