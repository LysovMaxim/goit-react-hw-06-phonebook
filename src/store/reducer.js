import { contactReducer } from './sliceContact';
import { filterReducer } from './sliceFilter';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
