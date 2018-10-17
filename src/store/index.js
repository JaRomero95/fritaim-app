import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import user from './user';
import rootSaga from './rootSaga';

const reducer = combineReducers({ user });

const composeEnhancers = ( process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ )
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;