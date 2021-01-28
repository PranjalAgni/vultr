import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { addNotes } from '../actions/notes';

const initalState: string[] = [];

const notesReducer = createReducer(initalState, {
  [addNotes]: (state: Array<any>, action: PayloadAction<string>) => {
    console.log(action);
    state.push(action.payload);
  },
});

export default notesReducer;
