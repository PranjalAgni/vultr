import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { addNotes } from '../actions/notes';

interface notesState {
  notes: string[];
  noteState: {
    reason: string;
    done: boolean;
  };
}

const initalState: notesState = {
  notes: [],
  noteState: {
    reason: '',
    done: false,
  },
};

const notesReducer = (
  state: notesState,
  action: PayloadAction<string>
): notesState => {
  switch (action.type) {
    case addNotes:
      return {
        notes: [...state.notes, action.payload],
        noteState: state.noteState,
      };
    default:
      return initalState;
  }
};

const notesReducer2 = createReducer(initalState, {
  [addNotes]: (state: notesState, action: PayloadAction<string>) => {
    console.log(action);
    state.notes.push(action.payload);
  },
});

export default notesReducer;
