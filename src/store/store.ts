import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '~store/reducers/rootReducer';
import rootSaga from '~store/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, undefined, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
