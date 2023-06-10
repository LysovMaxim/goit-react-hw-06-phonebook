import { counterReducer } from './slice';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  app: counterReducer,
});
