import {legacy_createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer} from './src/redux/root-reducres';
import { handler as userSaga} from "./src/redux/user/sagas";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore } from 'redux-persist';

export const persistConfig = {
    key: 'currency',
    storage: AsyncStorage
};

const sagaMiddleware = createSagaMiddleware();
export const store = legacy_createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga);

export const persistor = persistStore(store);

// export default persistStore(store);