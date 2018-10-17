import { operations as userOperations } from './user';
import { all } from 'redux-saga/effects';

function* rootSaga() {
    yield all([
        userOperations(),
    ]);
}

export default rootSaga;