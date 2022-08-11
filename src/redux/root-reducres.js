import {combineReducers} from 'redux';
import {reducer as userReducer} from './user/reducres';
import {reducer as themeReducer} from './theme/reducres';
import {reducer as currencyReducer} from './currency/reducers';
import { persistReducer } from 'redux-persist';
import { persistConfig } from '../../store';

const reducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
  theme: persistReducer(persistConfig,themeReducer),
  currency: persistReducer(persistConfig,currencyReducer)
});

export {reducer};