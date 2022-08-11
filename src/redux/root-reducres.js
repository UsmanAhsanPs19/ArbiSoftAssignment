import {combineReducers} from 'redux';
import {reducer as userReducer} from './user/reducres';
import { persistReducer } from 'redux-persist';
import { persistConfig } from '../../store';

const reducer = combineReducers({
  user: persistReducer(persistConfig, userReducer)
});

export {reducer};