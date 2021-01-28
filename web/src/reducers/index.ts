import { combineReducers } from '@reduxjs/toolkit';
import notesReducer from './notes';

export const rootReducer = combineReducers({
  notes: notesReducer,
});
