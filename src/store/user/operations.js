import * as types from './types';
import * as actions from './actions';
import { all } from 'redux-saga/effects';

function* rootSaga() {
    yield all([]);
}

export default rootSaga;