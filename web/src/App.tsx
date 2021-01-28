import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNotes } from './actions/notes';
import './App.css';
import logo from './logo.svg';
import { RootState } from './store/configureStore';

function App() {
  const notes = useSelector((state: RootState) => state.notes);

  const [noteValue, setNoteValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (noteValue && noteValue.trim()) {
      console.log('Value: ', noteValue);
      dispatch(addNotes(noteValue));
      setNoteValue('');
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log('Called', event.target.value);
    setNoteValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type="text"
          onChange={handleOnChange}
          value={noteValue}
          required
        />
        <button onClick={handleSubmit}>Submit</button>
        {notes.map((note, idx) => (
          <li key={idx}>{note}</li>
        ))}
      </header>
    </div>
  );
}

export default App;
