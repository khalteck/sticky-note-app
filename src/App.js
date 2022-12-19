import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import Notes from "./Notes";
import { useState } from "react";
import Detail from "./Detail";
import "./output.css";
import notedata from "./data/notedata.json";

function App() {
  //to set the default notes in state
  const [note, setNote] = useState(notedata);

  //to set hover state of each sticky note
  function handleNoteHover(index) {
    const newNote = [...note];
    newNote[index].hover = true;
    setNote(newNote);
  }
  function handleNoteOut(index) {
    const newNote = [...note];
    newNote[index].hover = false;
    setNote(newNote);
  }

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/notes"
        element={
          <Notes
            note={note}
            handleNoteHover={handleNoteHover}
            handleNoteOut={handleNoteOut}
          />
        }
      />
      <Route path="/note/:id" element={<Detail note={note} />} />
    </Routes>
  );
}

export default App;
