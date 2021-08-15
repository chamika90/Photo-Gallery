import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import expireReducer from 'redux-persist-expire';

import rootReducers from 'redux/reducers';
import sagas from 'sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['galleryReducer'],
  transforms: [
    expireReducer('galleryReducer', {
      expireSeconds: 60 * 60 * 24,
      expiredState: [],
      autoExpire: true,
    }),
  ],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

const persister = persistStore(store);
const configureStore = () => {
  return { persister, store };
};
sagaMiddleware.run(sagas);

export default configureStore;
